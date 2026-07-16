import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ---------------------------------------------------------
   Procedural moon surface: fbm noise craters + a terminator
   (day/night line) that we sweep across the sphere to fake
   "sunrise over the moon" as the user scrolls. Colors pull
   from the palette: mustard/terracotta on the lit crescent,
   teal in the shadowed half, moonlight cream at the terminator.
   --------------------------------------------------------- */
const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPos;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPos;
  uniform vec3 lightDir;
  uniform vec3 colorLit;
  uniform vec3 colorShadow;
  uniform vec3 colorRim;
  uniform float time;

  // hash + noise + fbm for crater-like surface detail
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
          mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
          mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
      f.z);
  }
  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 n = normalize(vNormal);
    float ndl = dot(n, normalize(lightDir));

    // surface detail: layered fbm shaped into crater-like pockmarks
    float base = fbm(vPos * 3.2);
    float craters = smoothstep(0.15, 0.85, fbm(vPos * 6.5 + base));
    float detail = mix(base, craters, 0.6);

    // terminator band glow (the sunrise line)
    float term = 1.0 - smoothstep(0.0, 0.22, abs(ndl));

    float litMix = smoothstep(-0.15, 0.35, ndl);
    vec3 surface = mix(colorShadow * (0.35 + detail * 0.5), colorLit * (0.6 + detail * 0.6), litMix);
    surface += colorRim * term * 0.9;

    // subtle vignette toward the limb for a rounder feel
    float fresnel = pow(1.0 - max(dot(n, vec3(0.0, 0.0, 1.0)), 0.0), 2.2);
    surface += colorRim * fresnel * 0.12;

    gl_FragColor = vec4(surface, 1.0);
  }
`

function MoonMesh({ scrollRef }) {
  const meshRef = useRef()
  const lightRef = useRef([1, 0.2, 1])

  const uniforms = useMemo(
    () => ({
      lightDir: { value: new THREE.Vector3(1, 0.3, 1) },
      colorLit: { value: new THREE.Color('#e3b04b') },
      colorShadow: { value: new THREE.Color('#123033') },
      colorRim: { value: new THREE.Color('#d15a35') },
      time: { value: 0 },
    }),
    []
  )

  useFrame((state, delta) => {
    const p = scrollRef.current
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.06 + p * 0.002
      meshRef.current.rotation.x = 0.15 - p * 0.1
    }
    // sweep the light from side-on to a dramatic rim-lit angle as we scroll
    const angle = THREE.MathUtils.lerp(0.9, -0.5, p)
    uniforms.lightDir.value.set(Math.cos(angle) * 1.2, 0.35, Math.sin(angle) * 1.2)
    uniforms.time.value = state.clock.elapsedTime

    // dolly the whole moon slightly for parallax with the camera move in Hero.jsx
    if (meshRef.current) {
      meshRef.current.position.y = -p * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 48]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

function Starfield({ count = 900 }) {
  const pointsRef = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 18 + Math.random() * 22
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.008
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#f4ecd8" size={0.045} sizeAttenuation transparent opacity={0.75} />
    </points>
  )
}

function CameraRig({ scrollRef }) {
  useFrame((state) => {
    const p = scrollRef.current
    // dolly toward the moon and drop slightly, like descending toward it
    state.camera.position.z = THREE.MathUtils.lerp(5.2, 2.6, p)
    state.camera.position.y = THREE.MathUtils.lerp(0, -0.35, p)
    state.camera.lookAt(0, -p * 0.3, 0)
  })
  return null
}

/**
 * Moon3D — full-bleed canvas meant to sit behind the hero copy.
 * `scrollRef` is a ref (mutable object with `.current`, 0..1) that
 * Hero.jsx updates from a GSAP ScrollTrigger — this component never
 * touches the DOM/scroll itself, it just reads the shared value
 * every frame, so the animation stays perfectly in sync with scroll.
 */
export default function Moon3D({ scrollRef }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.15} />
      <Starfield />
      <MoonMesh scrollRef={scrollRef} />
      <CameraRig scrollRef={scrollRef} />
    </Canvas>
  )
}

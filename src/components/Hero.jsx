import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Moon3D from '../three/Moon.jsx'
import { profile } from '../data/content.js'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const wrapRef = useRef(null)
  const pinRef = useRef(null)
  const copyRef = useRef(null)
  const scrollProgress = useRef(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the hero while we "fly toward" the moon, scrubbed by scroll —
      // this is the scroll-video-like moment: the 3D scene reacts to
      // ScrollTrigger's progress every frame via scrollProgress.current.
      const st = ScrollTrigger.create({
        trigger: wrapRef.current,
        start: 'top top',
        end: '+=140%',
        scrub: 0.6,
        pin: pinRef.current,
        onUpdate: (self) => {
          scrollProgress.current = self.progress
        },
      })

      gsap.to(copyRef.current, {
        opacity: 0,
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: '+=60%',
          scrub: 0.6,
        },
      })

      return () => st.kill()
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="hero-wrap" ref={wrapRef} id="home">
      <div className="hero-pin" ref={pinRef}>
        <Moon3D scrollRef={scrollProgress} />
        <div className="hero-vignette" />

        <div className="hero-wordmark" aria-hidden="true">
          <span>DEVELOPER</span>
          <span>DEVELOPER</span>
          <span>DEVELOPER</span>
        </div>

        <div className="hero-copy" ref={copyRef}>
          <span className="eyebrow">Flutter · MERN · Cross‑platform</span>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-sub">
            I build cross-platform apps and full-stack systems that ship — from
            mobile to web, prototype to production.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View work</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-hint-line" />
        </div>
      </div>
    </div>
  )
}

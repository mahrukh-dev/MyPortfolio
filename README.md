# Mah Rukh — Portfolio

A React + Vite portfolio with a live 3D moon hero (Three.js via
react-three-fiber) and a scroll-scrubbed "flight toward the moon" animation
powered by GSAP ScrollTrigger.

## Design concept

- **Palette:** deep night-sky background, with mustard / teal / terracotta
  accents pulled from the vintage color references you shared — a
  "night shift, warm instruments" feel rather than a generic dark theme.
- **Type:** Fraunces (display serif) for headlines, Space Grotesk for body
  copy, JetBrains Mono for labels/eyebrows/tags — a technical-but-warm pairing.
- **Signature moment:** the hero moon is a real 3D object (procedural
  crater shader, no image textures needed). As you scroll, the camera dollies
  toward it, the "sunrise" terminator line sweeps across the surface, and the
  starfield drifts — like a scroll-scrubbed video, entirely in WebGL.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

Requires Node 18+.

## Structure

```
src/
  data/content.js        ← all your CV content lives here — edit this first
  three/Moon.jsx          ← the 3D moon scene (shader material + starfield + camera rig)
  components/
    Navbar.jsx
    Hero.jsx              ← pins the hero + drives Moon3D's scroll progress
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Leadership.jsx
    Contact.jsx
    Footer.jsx
```

## Section color themes

Below the hero, the page follows the reference moodboard's alternating
palette: `#334B35` forest green, `#F5EEE1` cream, `#F9AD16` mustard,
`#2A2014` ink, `#000000` black, `#FD6038` orange, `#B86939` brown.

Each section opts into a theme by adding one class to its `<section>`
element — `theme-cream`, `theme-forest`, or `theme-black` (see
`src/index.css`). Every theme redefines the *same* variable names
(`--bg`, `--bg-panel`, `--hairline`, `--text-primary`, `--text-muted`,
`--moonlight`, `--mustard`, `--teal`, `--terracotta`), so components never
need theme-specific styling of their own — they just use those variables
and automatically match whichever section wraps them.

Current rhythm: About (cream) → Skills + Experience (forest) → Projects
(cream) → Leadership (forest) → Contact (cream) → Footer (black). Swap a
section's class to re-theme it instantly.

The Experience "highlight panel" and the About contact card intentionally
break from their section's theme (solid mustard and solid black respectively,
via the fixed `--ref-*` tokens) — that's deliberate, matching the reference's
orange Experience box and black Contact card, which stay the same color
regardless of what's around them.

## Section overlaps

Two spots bleed across a section boundary, echoing the reference's
overlapping card/text treatment:

- The About section's black contact card spills down into the top of the
  green Skills section.
- The Experience section's mustard panel spills down into the top of the
  cream Projects section.

This is done with two utility classes in `src/index.css`:
`.overlap-out` (on the section whose content should spill downward) and
`.overlap-in` (on the section receiving it, which adds extra top padding so
its own content clears the overlap). Adjust the pixel values inside those
two classes to make the bleed larger/smaller.

## Placeholder images

Three things currently use placeholder images (all via placehold.co, so the
site works out of the box with no assets):

- **Portrait** — `portraitImage` in `src/data/content.js`
- **Project screenshots** — `image` on each entry in the `projects` array
- **Certificate badges** — `image` on each entry in the `certifications` array

Just swap the URL for a real photo/screenshot/badge (a local file in `public/`
works too — e.g. `image: "/projects/rescue-app.png"`).

## Tech-stack icons

Project cards and the Skills section render real tech logos via
`react-icons/si` (Simple Icons), with `lucide-react`'s `Cloud` icon standing
in for AWS (Simple Icons dropped the AWS mark for trademark reasons).

- The icon-key → component map lives in `src/utils/icons.jsx`
- Reference a key via `iconKeys: ["flutter", "firebase", ...]` on a project,
  or add to `toolIcons` in `content.js` for the Skills strip
- To add a new tech: import its `Si...` icon in `icons.jsx`, add it to
  `iconMap`, then reference the key in `content.js`

## Customizing

- **Content:** everything text-based (bio, skills, experience, projects,
  leadership, education, certifications, contact info) is centralized in
  `src/data/content.js`. Edit that file and every section updates.
- **Colors/type:** all design tokens are CSS custom properties at the top of
  `src/index.css` (`--bg`, `--mustard`, `--teal`, `--terracotta`, `--font-*`).
- **Moon look:** tweak `colorLit` / `colorShadow` / `colorRim` uniforms in
  `src/three/Moon.jsx` to shift the moon's palette; `fbm(vPos * 3.2)` controls
  crater scale.
- **Scroll intensity:** in `Hero.jsx`, the `ScrollTrigger` `end: '+=140%'`
  controls how much scroll distance the flyby consumes — increase for a
  slower, more cinematic effect.
- **Contact form:** currently opens a `mailto:` draft with no backend. Swap
  the `handleSubmit` in `Contact.jsx` for a real endpoint (Formspree, Resend,
  a serverless function, etc.) when you're ready.

## Deploying

The `dist/` folder from `npm run build` is fully static — drop it on Vercel,
Netlify, GitHub Pages, or any static host.

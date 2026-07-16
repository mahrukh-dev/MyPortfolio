import { profile } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer theme-black">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-note">Built with React, Three.js & GSAP</span>
      </div>
    </footer>
  )
}

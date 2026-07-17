import { profile } from '../data/content.js'
import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer theme-black">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">{profile.name}</h3>
            <p className="footer-tagline">{profile.role}</p>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-col">
              <h4>Navigation</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#resume">Resume</a>
              <a href="#projects">Projects</a>
            </div>

            <div className="footer-links-col">
              <h4>Connect</h4>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="footer-social-link">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="footer-social-link">
                <Github size={14} /> GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="footer-social-link">
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="footer-note">Built with React, Three.js, GSAP & AI</span>
        </div>
      </div>
    </footer>
  )
}

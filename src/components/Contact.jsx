import { useState } from 'react'
import { profile } from '../data/content.js'
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="theme-forest">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's build something.</h2>
          <p className="section-lede">
            Open to Flutter, MERN, and full-stack collaborations. Reach out
            directly or send a note.
          </p>

          <ul className="contact-list">
            <li className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={18} />
              </div>
              <div className="contact-text">
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone size={18} />
              </div>
              <div className="contact-text">
                <span>Phone</span>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon-wrapper">
                <Linkedin size={18} />
              </div>
              <div className="contact-text">
                <span>LinkedIn</span>
                <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
                  {profile.linkedin}
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon-wrapper">
                <Github size={18} />
              </div>
              <div className="contact-text">
                <span>GitHub</span>
                <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">
                  {profile.github}
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin size={18} />
              </div>
              <div className="contact-text">
                <span>Location</span>
                <p>{profile.location}</p>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Your email address" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required value={form.message} onChange={handleChange} placeholder="Hi, let's talk about..." />
          </label>
          <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
            {sent ? 'Opening mail app…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

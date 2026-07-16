import { useState } from 'react'
import { profile } from '../data/content.js'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your own endpoint (Formspree, Resend, a serverless
    // function, etc). As a zero-backend fallback, this opens a mail draft.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="theme-cream">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's build something.</h2>
          <p className="section-lede">
            Open to Flutter, MERN, and full-stack collaborations. Reach out
            directly or send a note.
          </p>

          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
                {profile.linkedin}
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">
                {profile.github}
              </a>
            </li>
            <li>
              <span>Location</span>
              <p>{profile.location}</p>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" required value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" required value={form.email} onChange={handleChange} />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required value={form.message} onChange={handleChange} />
          </label>
          <button className="btn btn-accent" type="submit">
            {sent ? 'Opening mail app…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

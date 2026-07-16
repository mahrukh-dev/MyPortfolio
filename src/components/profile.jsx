import React from 'react';
import './profile.css';
import {
  profile,
  stats,
  badges,
  portraitImage,
  skillGroups,
  experience,
  experienceTags,
  projects,
  leadership,
  education,
  certifications
} from '../data/content.js';
import { TechIcon } from '../utils/icons.jsx';

export default function Profile() {
  return (
    <div className="portfolio-container">
      {/* 1. ABOUT ME SECTION */}
      <section className="about-section" id="about">
        <div className="about-grid">
          {/* Left Side: Text and CTA */}
          <div className="about-intro">
            <h2 className="section-title-large">Hello, <br />I'm {profile.name.split(' ')[0]} !</h2>
            <p className="about-description">{profile.summary}</p>
            <div className="about-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="btn-linkedin">
                <span className="search-icon">🔍</span> LinkedIn
              </a>
              <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="btn-github" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--color-black)',
                color: 'white',
                textDecoration: 'none',
                padding: '14px 28px',
                borderRadius: '30px',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'transform 0.2s ease, filter 0.2s',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)'
              }}>
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side: High-Overlap Collage */}
          <div className="about-graphics">
            <div className="collage-container">
              {/* Overlapping backdrops */}
              <div className="green-backdrop-box"></div>
              <div className="white-backdrop-circle"></div>

              {/* Main portrait with rounded top */}
              <div className="portrait-placeholder main-portrait" style={{ backgroundImage: `url(${portraitImage})` }}></div>

              {/* Overlapping pill badges */}
              {badges.map((b, idx) => (
                <div key={idx} className={`badge ${idx === 0 ? 'birth-badge' : 'nation-badge'}`}>
                  {b.label}
                </div>
              ))}

              {/* Overlapping Contact card (Hangs over the section below) */}
              <div className="contact-card-overlay">
                <h3>Contact Details</h3>
                <p>📍 {profile.location}</p>
                <p>✉️ {profile.email}</p>
                <p>📞 {profile.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="container" style={{ marginTop: '100px' }}>
          <div className="stats-container">
            {stats.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE, EDUCATION & SKILLS SECTION */}
      <section className="split-resume-section" id="resume">
        <div className="split-grid">
          {/* Left Column (Cream) */}
          <div className="split-left-column">
            {/* Education Sub-section */}
            <div className="education-block">
              <h2 className="section-title-accent">Education</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">
                    <span className="star-bullet">✦</span> {education.period}
                  </div>
                  <div className="timeline-content">
                    <h4>{education.school}</h4>
                    <p>{education.degree} (CGPA: {education.cgpa})</p>
                    <p className="coursework">
                      <strong>Coursework:</strong> {education.coursework}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Sub-section */}
            <div className="experience-box" id="experience">
              <h2 className="experience-title">Experience</h2>
              <div className="exp-timeline">
                {experience.map((exp, idx) => (
                  <div className="exp-item" key={idx}>
                    <div className="exp-year">✦ {exp.period}</div>
                    <div className="exp-content">
                      <h4>{exp.role}</h4>
                      <h5 className="exp-org">{exp.org}</h5>
                      <p className="exp-stack">{exp.stack}</p>
                      <ul className="exp-points">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                      {exp.projects && (
                        <p className="exp-projects">
                          <strong>Key Projects:</strong> {exp.projects}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tag Pills */}
              <div className="experience-tags">
                {experienceTags.map((tag, idx) => (
                  <span className="dark-tag" key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Dark Green) */}
          <div className="split-right-column" id="skills">
            {/* Ghost background outline text overlapping behind content */}
            <div className="ghost-bg-text-wrapper">
              <span className="ghost-text">RESUME</span>
              <span className="ghost-text">RESUME</span>
              <span className="ghost-text">RESUME</span>
            </div>

            <div className="skills-content-wrapper">
              <h2 className="section-title-accent yellow-text">Technical skills</h2>
              <div className="skills-grid-dynamic">
                {skillGroups.map((group, idx) => (
                  <div className="skills-sub-block" key={idx}>
                    <h3>{group.title}</h3>
                    <div className="skills-pill-group">
                      {group.items.map((item, itemIdx) => (
                        <span className="skill-pill" key={itemIdx}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section className="projects-section theme-cream" id="projects">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Projects</span>
            <h2 className="section-title">Selected Works</h2>
          </div>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-image-wrap">
                  <img src={proj.image} alt={proj.name} className="project-image" />
                </div>
                <div className="project-content">
                  <span className="project-tag">{proj.tag}</span>
                  <h3 className="project-title">{proj.name}</h3>
                  <p className="project-desc">{proj.desc}</p>
                  
                  {proj.stack && (
                    <div className="project-tech-list">
                      {proj.stack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}

                  <div className="project-footer">
                    {proj.iconKeys && (
                      <div className="project-icons">
                        {proj.iconKeys.map((key) => (
                          <TechIcon key={key} name={key} size={20} />
                        ))}
                      </div>
                    )}
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="project-link-btn">
                        View Code ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & ACTIVITIES SECTION */}
      <section className="leadership-section theme-forest" id="leadership">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title">Community & Impact</h2>
          </div>
          <div className="leadership-grid">
            {leadership.map((lead, idx) => (
              <div className="leadership-card" key={idx}>
                <div className="leadership-header">
                  <span className="orange-star">✦</span>
                  <div>
                    <h3>{lead.org}</h3>
                    <h4 className="leadership-role">{lead.role}</h4>
                  </div>
                </div>
                <p className="leadership-desc">{lead.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS SECTION */}
      <section className="certifications-section theme-cream" id="certifications">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Learning</span>
            <h2 className="section-title">Certifications</h2>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <div className="cert-card" key={idx}>
                <div className="cert-image-wrap">
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                </div>
                <div className="cert-info">
                  <span className="cert-date">{cert.date}</span>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-from">From: {cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
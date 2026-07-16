import {
  profile,
  stats,
  education,
  badges,
  portraitImage,
  skillGroups,
  toolIcons,
  experience,
  experienceTags,
  projects,
  leadership,
  certifications
} from '../data/content.js'
import { TechIcon } from '../utils/icons.jsx'
import './profile.css'

export default function Profile() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="theme-cream overlap-out">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">About</span>
            <h2 className="section-title">Grounded in code, aiming further.</h2>
            <p className="about-text">{profile.summary}</p>
            <p className="about-text">
              B.S. Computer Science from {education.school} ({education.period},
              CGPA {education.cgpa}).
            </p>

            <div className="stat-grid">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              className="about-link-pill"
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="about-link-icon">↗</span> {profile.linkedin}
            </a>
          </div>

          <div className="portrait-block">
            <div className="portrait-frame">
              {/* Placeholder — replace `portraitImage` in src/data/content.js with a real photo */}
              <img src={portraitImage} alt="Portrait of Mah Rukh" />
              <div className="portrait-badges">
                {badges.map((b) => (
                  <span className="pill" key={b.label}>
                    {b.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <h3>Contact</h3>
              <ul>
                <li>
                  <span>📍</span> {profile.location}
                </li>
                <li>
                  <span>✉</span> {profile.email}
                </li>
                <li>
                  <span>☎</span> {profile.phone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="theme-forest overlap-in">
        <div className="skills-wordmark" aria-hidden="true">
          <span>SKILLS</span>
          <span>SKILLS</span>
        </div>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2 className="section-title">The toolkit behind the ship.</h2>
            <p className="section-lede">
              Two platforms, one engineering mindset — mobile-first with Flutter,
              full-stack with MERN, backed by clean architecture and DevOps
              practice.
            </p>
          </div>

          <div className="tool-strip">
            {toolIcons.map((key) => (
              <span className="tool-icon" key={key} title={key}>
                <TechIcon name={key} size={20} />
              </span>
            ))}
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="theme-forest overlap-out">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">A track record of shipped work.</h2>
          </div>

          <div className="experience-panel">
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={job.role + job.period}>
                  <div className="timeline-marker">
                    <span className="timeline-diamond">✦</span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h3>{job.role}</h3>
                      <span className="timeline-period">{job.period}</span>
                    </div>
                    <p className="timeline-org">{job.org}</p>
                    <p className="timeline-stack">{job.stack}</p>
                    <ul>
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    {job.projects && (
                      <p className="timeline-projects">
                        <span>Projects:</span> {job.projects}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="experience-tags">
              {experienceTags.map((t) => (
                <span className="hashtag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="theme-cream overlap-in">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Selected Projects</span>
            <h2 className="section-title">Things built end-to-end.</h2>
          </div>

          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.name}>
                <div className="project-thumb">
                  {/* Placeholder — replace `image` in content.js with a real screenshot */}
                  <img src={p.image} alt={`${p.name} screenshot`} />
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      aria-label={`${p.name} on GitHub`}
                    >
                      ↗
                    </a>
                  )}
                </div>

                <div className="project-body">
                  <span className="tag project-tag">{p.tag}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>

                  <div className="project-stack">
                    {p.iconKeys?.map((key) => (
                      <span className="stack-icon" key={key} title={key}>
                        <TechIcon name={key} size={15} />
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="theme-forest">
        <div className="container">
          <div className="leadership-grid">
            <div>
              <span className="eyebrow">Leadership & Activities</span>
              <h2 className="section-title">Beyond the codebase.</h2>

              <div className="leadership-list">
                {leadership.map((item) => (
                  <div className="leadership-item" key={item.org}>
                    <span className="timeline-diamond">✦</span>
                    <div>
                      <h3>{item.org}</h3>
                      <p className="leadership-role">{item.role}</p>
                      <p className="leadership-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="edu-card">
              <span className="eyebrow">Education</span>
              <h3>{education.degree}</h3>
              <p className="edu-school">
                {education.school} · {education.period}
              </p>
              <p className="edu-detail">CGPA: {education.cgpa}</p>
              <p className="edu-detail">{education.coursework}</p>
            </div>
          </div>

          <div className="cert-section">
            <span className="eyebrow">Certifications</span>
            <div className="cert-grid">
              {certifications.map((c) => (
                <div className="cert-card" key={c.title}>
                  {/* Placeholder — swap `image` in content.js for the real badge/certificate */}
                  <img src={c.image} alt={`${c.title} certificate`} />
                  <div className="cert-info">
                    <h4>{c.title}</h4>
                    <p>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

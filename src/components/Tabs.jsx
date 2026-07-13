import React from "react";
import {
  FileText, MapPin, Mail, Phone, Braces, ScrollText, Briefcase,
  FolderGit2, GraduationCap, Award, Star, TerminalSquare
} from "lucide-react";
import {
  PROFILE, SKILLS, EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS, LEADERSHIP
} from "../data/portfolioData";
import { Cursor, SectionHeader, Pill, Github, Linkedin } from "./Common";
import { ContactTerminal } from "./ContactTerminal";

export function AboutTab() {
  return (
    <div className="rc-fade">
      <SectionHeader icon={FileText} path="~/portfolio/" label="about.md" />
      <h1 className="rc-name">{PROFILE.name}<Cursor /></h1>
      <p className="rc-title-line">{PROFILE.title}</p>

      <div className="rc-meta-row">
        <span><MapPin size={13} /> {PROFILE.location}</span>
        <span><Mail size={13} /> {PROFILE.email}</span>
        <span><Phone size={13} /> {PROFILE.phone}</span>
      </div>

      <div className="rc-code-block">
        <div className="rc-comment"># professional_summary</div>
        <p className="rc-summary">{PROFILE.summary}</p>
      </div>

      <div className="rc-quick-stats">
        <div className="rc-stat"><span className="rc-stat-num">3+</span><span className="rc-stat-label">years experience</span></div>
        <div className="rc-stat"><span className="rc-stat-num">{PROJECTS.length}</span><span className="rc-stat-label">shipped projects</span></div>
        <div className="rc-stat"><span className="rc-stat-num">5</span><span className="rc-stat-label">person team led</span></div>
      </div>
    </div>
  );
}

export function SkillsTab() {
  return (
    <div className="rc-fade">
      <SectionHeader icon={Braces} path="~/portfolio/" label="skills.json" />
      <div className="rc-json-wrap">
        <div className="rc-json-brace">{"{"}</div>
        {SKILLS.map((cat, i) => (
          <div key={cat.key} className="rc-json-row">
            <cat.icon size={14} className="rc-json-icon" />
            <span className="rc-json-key">"{cat.key}"</span>
            <span className="rc-json-colon">:</span>
            <span className="rc-json-arr">
              [{cat.items.map((it, j) => (
                <span key={it}>
                  <span className="rc-json-str">"{it}"</span>{j < cat.items.length - 1 ? ", " : ""}
                </span>
              ))}]{i < SKILLS.length - 1 ? "," : ""}
            </span>
          </div>
        ))}
        <div className="rc-json-brace">{"}"}</div>
      </div>
    </div>
  );
}

export function ExperienceTab() {
  return (
    <div className="rc-fade">
      <SectionHeader icon={ScrollText} path="~/portfolio/" label="experience.log" />
      <div className="rc-log">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="rc-log-entry">
            <div className="rc-log-rail">
              <Briefcase size={14} />
              {i < EXPERIENCE.length - 1 && <div className="rc-log-line" />}
            </div>
            <div className="rc-log-content">
              <div className="rc-log-date">[{job.date}]</div>
              <div className="rc-log-role">{job.role} <span className="rc-log-at">@ {job.company}</span></div>
              <div className="rc-stack-row">
                {job.stack.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
              <ul className="rc-bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              {job.projects && <div className="rc-log-projects">projects: {job.projects}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsTab() {
  return (
    <div className="rc-fade">
      <SectionHeader icon={FolderGit2} path="~/portfolio/" label="projects/" />
      <div className="rc-projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.file} className="rc-project-card">
            <div className="rc-project-file"><FileText size={13} /> {p.file}</div>
            <div className="rc-project-title"><p.icon size={18} /> {p.name}</div>
            <p className="rc-project-desc">{p.desc}</p>
            <div className="rc-stack-row">
              {p.stack.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
            {p.link && <div className="rc-project-link"><Github size={12} /> {p.link}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function EducationTab() {
  return (
    <div className="rc-fade">
      <SectionHeader icon={GraduationCap} path="~/portfolio/" label="education.yaml" />

      <div className="rc-yaml-block">
        <div className="rc-yaml-key">degree:</div>
        <div className="rc-yaml-val">{EDUCATION.degree}</div>
        <div className="rc-yaml-key">school:</div>
        <div className="rc-yaml-val">{EDUCATION.school}</div>
        <div className="rc-yaml-key">cgpa:</div>
        <div className="rc-yaml-val">{EDUCATION.cgpa}</div>
        <div className="rc-yaml-key">dates:</div>
        <div className="rc-yaml-val">{EDUCATION.date}</div>
        <div className="rc-yaml-key">coursework:</div>
        <div className="rc-yaml-val">
          {EDUCATION.coursework.map((c) => <Pill key={c}>{c}</Pill>)}
        </div>
      </div>

      <div className="rc-subheading"><Award size={14} /> certifications</div>
      <ul className="rc-cert-list">
        {CERTIFICATIONS.map((c) => <li key={c}>{c}</li>)}
      </ul>

      <div className="rc-subheading"><Star size={14} /> leadership &amp; activities</div>
      <div className="rc-leadership">
        {LEADERSHIP.map((l) => (
          <div key={l.org} className="rc-leadership-item">
            <div className="rc-leadership-org">{l.org}</div>
            <div className="rc-leadership-role">{l.role}</div>
            <div className="rc-leadership-detail">{l.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactTab() {
  return (
    <div className="rc-fade">
      <SectionHeader icon={TerminalSquare} path="~/portfolio/" label="contact.sh" />
      <div className="rc-contact-links">
        <a className="rc-contact-link" href={`mailto:${PROFILE.email}`}><Mail size={14} /> {PROFILE.email}</a>
        <a className="rc-contact-link" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}><Phone size={14} /> {PROFILE.phone}</a>
        <a className="rc-contact-link" href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer"><Linkedin size={14} /> {PROFILE.linkedin}</a>
        <a className="rc-contact-link" href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer"><Github size={14} /> {PROFILE.github}</a>
      </div>
      <ContactTerminal />
    </div>
  );
}

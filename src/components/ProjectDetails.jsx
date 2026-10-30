import { ArrowLeft, ExternalLink } from 'lucide-react'
import './ProjectDetails.css'

export default function ProjectDetails({ project }) {
  const images = (project.images?.length ? project.images : [project.image]).filter(Boolean)

  return (
    <main className="project-detail-page theme-cream">
      <div className="project-detail-container">
        <nav className="project-detail-nav" aria-label="Project navigation">
          <a className="project-back-link" href={`${window.location.pathname}#projects`}>
            <ArrowLeft size={17} aria-hidden="true" />
            Back to portfolio
          </a>
          {project.link && (
            <a className="project-source-link" href={project.link} target="_blank" rel="noreferrer">
              View Code
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </nav>

        <header className="project-detail-header">
          <span className="project-detail-tag">{project.tag}</span>
          <h1>{project.name}</h1>
          {project.categories?.length > 0 && (
            <div className="project-detail-categories" aria-label={`${project.name} categories`}>
              {project.categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          )}
          <p>{project.desc}</p>
          {project.supervisor && (
            <p className="project-detail-supervisor">
              <strong>Project supervisor:</strong> {project.supervisor}
            </p>
          )}
        </header>

        {project.stack?.length > 0 && (
          <section className="project-detail-tech" aria-labelledby="project-tech-heading">
            <h2 id="project-tech-heading">Technologies</h2>
            <ul>
              {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
          </section>
        )}

        {images.length > 0 && (
          <section className="project-detail-gallery" aria-label={`${project.name} images`}>
            {images.map((image, index) => (
              <figure className="project-detail-image" key={image}>
                <img
                  src={image}
                  alt={`${project.name}${images.length > 1 ? ` screenshot ${index + 1}` : ''}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </figure>
            ))}
          </section>
        )}
      </div>
    </main>
  )
}

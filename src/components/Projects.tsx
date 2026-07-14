import { motion } from 'framer-motion'
import { projects } from '../data/content'

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
        <p className="section__lead">
          From LLM evaluation and forecasting systems to computer vision and full-stack apps.
        </p>

        <ul className="projects__list">
          {projects.map((project, index) => (
            <motion.li
              key={project.title}
              className="project"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.06, 0.36),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={project.href ?? '#contact'}
                target={project.href ? '_blank' : undefined}
                rel={project.href ? 'noopener noreferrer' : undefined}
                className="project__link"
              >
                <div
                  className={`project__image ${project.image ? '' : 'project__image--placeholder'}`}
                >
                  {project.image ? (
                    <img src={project.image} alt="" loading="lazy" />
                  ) : (
                    <span aria-hidden="true">{project.title.slice(0, 2)}</span>
                  )}
                </div>
                <div className="project__meta">
                  <div className="project__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project__cta">
                    {project.href ? 'View project →' : 'Ask me about this →'}
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

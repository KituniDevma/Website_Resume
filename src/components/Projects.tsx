'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projectFilters, projects, type ProjectFilter } from '@/data/content'
import { assetUrl } from '@/lib/assetUrl'
import { Reveal } from './Reveal'

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All')

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(filter))

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
          <p className="section__lead">
            From LLM evaluation and forecasting systems to computer vision and full-stack apps.
          </p>
        </Reveal>

        <div className="tabs" role="tablist" aria-label="Filter projects">
          {projectFilters.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={filter === option}
              className={`tabs__btn ${filter === option ? 'is-active' : ''}`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <ul className="projects__list">
          {visible.map((project, index) => (
            <motion.li
              key={project.title}
              className="project"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.06, 0.3),
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
                    <img src={assetUrl(project.image)} alt="" loading="lazy" />
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

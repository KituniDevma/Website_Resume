'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/content'
import { assetUrl } from '@/lib/assetUrl'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Career</p>
          <h2>Experience</h2>
          <p className="section__lead">
            Applied AI and data science roles across product engineering, research, and teaching.
          </p>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              className="timeline__item"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.08, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="timeline__top">
                {job.logo ? (
                  <div className="timeline__logo">
                    <img src={assetUrl(job.logo)} alt={`${job.company} logo`} loading="lazy" />
                  </div>
                ) : null}

                <div className="timeline__headings">
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">{job.company}</p>
                  {job.location ? <p className="timeline__location">{job.location}</p> : null}
                </div>

                <span className="timeline__period">{job.period}</span>
              </div>

              <ul className="timeline__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

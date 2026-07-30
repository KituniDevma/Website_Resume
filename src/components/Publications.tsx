'use client'

import { motion } from 'framer-motion'
import { publications } from '@/data/content'
import { Reveal } from './Reveal'

export function Publications() {
  return (
    <section id="publications" className="section publications">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Research</p>
          <h2>Publications</h2>
          <p className="section__lead">
            Peer-reviewed and workshop papers on evaluating contextual understanding in LLMs.
          </p>
        </Reveal>

        <ul className="publications__list">
          {publications.map((pub, index) => (
            <motion.li
              key={pub.title}
              className="publication"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="publication__link"
              >
                <div className="publication__meta">
                  <span className="publication__venue">{pub.venue}</span>
                  <span className="publication__date">{pub.date}</span>
                </div>
                <h3>{pub.title}</h3>
                <p className="publication__authors">{pub.authors}</p>
                <p className="publication__desc">{pub.description}</p>
                <span className="publication__cta">Read more →</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

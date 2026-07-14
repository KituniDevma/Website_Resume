import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  aboutTabs,
  profile,
  type AboutTabId,
} from '../data/content'

export function About() {
  const [active, setActive] = useState<AboutTabId>('experience')
  const tab = aboutTabs.find((t) => t.id === active) ?? aboutTabs[0]

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__portrait">
          <img src="/user.png" alt={profile.fullName} />
        </div>

        <div className="about__body">
          <p className="eyebrow">About</p>
          <h2>Who I am</h2>
          <p className="about__copy">{profile.about}</p>

          <div className="tabs" role="tablist" aria-label="About details">
            {aboutTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active === t.id}
                className={`tabs__btn ${active === t.id ? 'is-active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={tab.id}
              className="tabs__panel"
              role="tabpanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tab.items.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  {item.detail ? <span>{item.detail}</span> : null}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

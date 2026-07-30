'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { aboutTabs, profile, type AboutTabId } from '@/data/content'
import { assetUrl } from '@/lib/assetUrl'
import { Reveal } from './Reveal'

export function About() {
  const [active, setActive] = useState<AboutTabId>('education')
  const tab = aboutTabs.find((t) => t.id === active) ?? aboutTabs[0]

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__portrait">
          <img src={assetUrl('user.webp')} alt={profile.fullName} />
        </Reveal>

        <Reveal className="about__body" delay={0.1}>
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
              initial="hidden"
              animate="shown"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                shown: { opacity: 1, transition: { staggerChildren: 0.07 } },
              }}
            >
              {tab.items.map((item) => (
                <motion.li
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    shown: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <strong>{item.title}</strong>
                  {item.detail ? <span>{item.detail}</span> : null}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}

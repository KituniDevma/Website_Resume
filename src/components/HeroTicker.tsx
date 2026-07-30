'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { heroTicker } from '@/data/content'
import { assetUrl } from '@/lib/assetUrl'

const INTERVAL = 3200

/**
 * Single-line bar at the bottom of the hero. Highlights rotate through it
 * vertically, one at a time; the full list stays in the DOM for crawlers and
 * screen readers, which only ever see one rotating item.
 */
export function HeroTicker() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroTicker.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const item = heroTicker[index]

  return (
    <div className="ticker">
      <div className="container ticker__inner">
        <span className="ticker__dot" aria-hidden="true" />

        <div className="ticker__viewport" aria-hidden="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={item.lead}
              className="ticker__item"
              initial={reduceMotion ? undefined : { y: '115%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={reduceMotion ? undefined : { y: '-115%', opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {'logo' in item && item.logo ? (
                <span className="ticker__logo">
                  <img src={assetUrl(item.logo)} alt="" />
                </span>
              ) : null}
              <strong>{item.lead}</strong>
              <span className="ticker__trail">{item.trail}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        <ul className="sr-only">
          {heroTicker.map((entry) => (
            <li key={entry.lead}>
              {entry.lead} — {entry.trail}
            </li>
          ))}
        </ul>

        <ol className="ticker__ticks" aria-hidden="true">
          {heroTicker.map((entry, position) => (
            <li key={entry.lead} className={position === index ? 'is-active' : undefined} />
          ))}
        </ol>
      </div>
    </div>
  )
}

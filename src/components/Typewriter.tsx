'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type TypewriterProps = {
  /** Cycled in order: typed out, held, erased, then the next one. */
  words: readonly string[]
  /** Canonical string exposed to screen readers and to crawlers. */
  label: string
  /** Milliseconds before the first character appears. */
  startDelay?: number
  /** Milliseconds per character while typing. */
  speed?: number
  /** Milliseconds per character while erasing. */
  eraseSpeed?: number
  /** Milliseconds a finished phrase stays on screen. */
  hold?: number
}

export function Typewriter({
  words,
  label,
  startDelay = 450,
  speed = 55,
  eraseSpeed = 28,
  hold = 1900,
}: TypewriterProps) {
  const reduceMotion = useReducedMotion()
  const [started, setStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState(0)
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    if (reduceMotion) return
    const timer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(timer)
  }, [reduceMotion, startDelay])

  useEffect(() => {
    if (reduceMotion || !started) return

    const word = words[index]

    if (!erasing && typed < word.length) {
      const timer = setTimeout(() => setTyped(typed + 1), speed)
      return () => clearTimeout(timer)
    }

    if (!erasing) {
      const timer = setTimeout(() => setErasing(true), hold)
      return () => clearTimeout(timer)
    }

    if (typed > 0) {
      const timer = setTimeout(() => setTyped(typed - 1), eraseSpeed)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setErasing(false)
      setIndex((current) => (current + 1) % words.length)
    }, 320)
    return () => clearTimeout(timer)
  }, [erasing, eraseSpeed, hold, index, reduceMotion, speed, started, typed, words])

  return (
    <>
      <span aria-hidden="true">
        {reduceMotion ? label : words[index].slice(0, typed)}
        <span className="typewriter__caret" />
      </span>
      <span className="sr-only">{label}</span>
    </>
  )
}

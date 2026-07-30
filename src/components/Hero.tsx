'use client'

import type { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaThreads } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { profile } from '@/data/content'
import { assetUrl } from '@/lib/assetUrl'
import { HeroTicker } from './HeroTicker'
import { Typewriter } from './Typewriter'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const socialIcons: Record<string, IconType> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  Threads: FaThreads,
}

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__glow" />
        <picture className="hero__figure">
          <source media="(max-width: 660px)" srcSet={assetUrl('hero-cutout-phone.webp')} />
          <img src={assetUrl('hero-cutout.webp')} alt="" className="hero__bg" />
        </picture>
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <p className="hero__role">
          <Typewriter words={profile.roleRotation} label={profile.role} />
        </p>

        <h1 className="hero__name">
          {[profile.firstName, profile.lastName].map((line, index) => (
            <motion.span
              key={line}
              custom={index + 1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero__tagline"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <a href={assetUrl(profile.cvUrl)} download className="btn btn--primary">
            Download CV
          </a>
          <a href="#contact" className="btn btn--ghost">
            Contact me
          </a>
        </motion.div>

        <motion.ul
          className="hero__socials"
          aria-label="Profiles"
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.label]
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  {Icon ? <Icon aria-hidden="true" /> : social.label}
                </a>
              </li>
            )
          })}
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
              <FaEnvelope aria-hidden="true" />
            </a>
          </li>
        </motion.ul>
      </div>

      <HeroTicker />
    </section>
  )
}

import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { assetUrl } from '../utils/assetUrl'

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

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__media" aria-hidden="true">
        <picture>
          <source media="(max-width: 900px)" srcSet={assetUrl('phone-background.webp')} />
          <img src={assetUrl('background.webp')} alt="" className="hero__bg" />
        </picture>
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <motion.p
          className="hero__role"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {profile.role}
        </motion.p>

        <motion.h1
          className="hero__name"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <a href="#projects" className="btn btn--primary">
            View projects
          </a>
          <a href="#publications" className="btn btn--ghost">
            Publications
          </a>
        </motion.div>
      </div>
    </section>
  )
}

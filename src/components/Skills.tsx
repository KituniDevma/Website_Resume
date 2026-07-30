'use client'

import type { CSSProperties } from 'react'
import { useState } from 'react'
import type { IconType } from 'react-icons'
import {
  FaAws,
  FaCode,
  FaDatabase,
  FaDiagramProject,
  FaJava,
  FaMicrochip,
  FaWindows,
} from 'react-icons/fa6'
import {
  SiCplusplus,
  SiCss,
  SiDjango,
  SiGit,
  SiHtml5,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si'
import { TbChartHistogram } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { skillGroups } from '@/data/content'
import { Reveal } from './Reveal'

/**
 * Brand mark and brand colour per skill. Marks sit on a white tile in both
 * themes, so even the very dark brand colours stay legible.
 */
const skillIcons: Record<string, { Icon: IconType; color: string }> = {
  Python: { Icon: SiPython, color: '#3776AB' },
  Java: { Icon: FaJava, color: '#E76F00' },
  'C++': { Icon: SiCplusplus, color: '#00599C' },
  RPAL: { Icon: FaCode, color: '#6B7280' },
  VHDL: { Icon: FaMicrochip, color: '#7E57C2' },
  SQL: { Icon: FaDatabase, color: '#4479A1' },
  'Scikit-Learn': { Icon: SiScikitlearn, color: '#F7931E' },
  TensorFlow: { Icon: SiTensorflow, color: '#FF6F00' },
  NumPy: { Icon: SiNumpy, color: '#013243' },
  Pandas: { Icon: SiPandas, color: '#150458' },
  LangChain: { Icon: SiLangchain, color: '#1C3C3C' },
  OpenCV: { Icon: SiOpencv, color: '#5C3EE8' },
  'Knowledge Graphs': { Icon: FaDiagramProject, color: '#2F9E8F' },
  'Next.js': { Icon: SiNextdotjs, color: '#111111' },
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#1572B6' },
  Django: { Icon: SiDjango, color: '#0C4B33' },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  MySQL: { Icon: SiMysql, color: '#4479A1' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Git: { Icon: SiGit, color: '#F05032' },
  'VS Code': { Icon: VscVscode, color: '#0065A9' },
  'Power BI': { Icon: TbChartHistogram, color: '#C9A200' },
  AWS: { Icon: FaAws, color: '#ED8B00' },
  Linux: { Icon: SiLinux, color: '#111111' },
  Windows: { Icon: FaWindows, color: '#0078D4' },
}

/** One soft hue per group, reused as the filter's active colour. */
const groupAccents = ['#e07a9a', '#e0a273', '#6fb6a4', '#a98ad4']

export function Skills() {
  const [active, setActive] = useState<string>('All')

  const visible = skillGroups
    .filter((group) => active === 'All' || group.id === active)
    .flatMap((group) =>
      group.skills.map((skill) => ({
        id: `${group.id}-${skill}`,
        skill,
        accent: groupAccents[skillGroups.indexOf(group) % groupAccents.length],
      })),
    )

  return (
    <section id="skills" className="section skills section--tint">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Toolkit</p>
          <h2>Tech skills</h2>
          <p className="section__lead">
            The languages, frameworks, and platforms I reach for when building AI and data products.
          </p>
        </Reveal>

        <div className="tabs" role="tablist" aria-label="Filter skills">
          {[{ id: 'All', label: 'All' }, ...skillGroups].map((option) => (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={active === option.id}
              className={`tabs__btn ${active === option.id ? 'is-active' : ''}`}
              onClick={() => setActive(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <ul className="skills__grid">
          {visible.map(({ id, skill, accent }, index) => {
            const entry = skillIcons[skill]
            const Icon = entry?.Icon

            return (
              <motion.li
                key={id}
                className="skill"
                style={{ '--group-accent': accent } as CSSProperties}
                initial={{ opacity: 0, y: 18, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.035, 0.35),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="skill__tile" aria-hidden="true">
                  {Icon ? <Icon style={{ color: entry.color }} /> : skill.slice(0, 2)}
                </span>
                <span className="skill__name">{skill}</span>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

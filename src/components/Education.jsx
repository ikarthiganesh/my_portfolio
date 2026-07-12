import { motion } from 'framer-motion'
import Section from './Section'
import { education } from '../data'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Timeline">
      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400 via-violet-400 to-transparent" />
        <div className="space-y-10">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <span className="absolute -left-8 sm:-left-10 top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 ring-4 ring-base-950" />
              <div className="glass-card p-6">
                <h3 className="font-display text-lg font-semibold text-white">{ed.degree}</h3>
                <p className="text-slate-400 mt-1">{ed.school}</p>
                {ed.period && (
                  <p className="text-xs uppercase tracking-wider text-violet-400 mt-2">{ed.period}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import Section from './Section'
import { about } from '../data'

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title={about.heading}>
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-400 leading-relaxed text-base sm:text-lg">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-6 space-y-5 h-fit"
        >
          {about.highlights.map((h) => (
            <div key={h.label} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <span className="text-xs uppercase tracking-wider text-slate-500">{h.label}</span>
              <span className="text-sm font-medium text-slate-200 text-right">{h.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

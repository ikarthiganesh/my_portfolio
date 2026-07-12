import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internship">
      <div className="space-y-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="glass-card p-7 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white">{job.company}</h3>
                <p className="text-violet-400 text-sm font-medium mt-1">{job.role}</p>
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-500 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <ul className="space-y-2.5">
              {job.points.map((pt, idx) => (
                <li key={idx} className="flex gap-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 flex-shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

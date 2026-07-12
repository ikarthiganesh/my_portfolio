import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Section from './Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Work" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="group relative glass-card p-6 flex flex-col hover:-translate-y-1.5 transition-transform duration-300"
          >
            <div className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${p.accent} mb-5`} />
            <h3 className="font-display text-xl font-semibold text-white mb-3">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-5 mb-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm text-slate-200 hover:border-violet-400/60 hover:bg-white/5 transition-all"
              >
                <FaGithub /> Code
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 py-2.5 text-sm text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all"
              >
                <FaExternalLinkAlt className="text-xs" /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { FaMedium, FaAward } from 'react-icons/fa'
import Section from './Section'
import { certifications, blog } from '../data'

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Recognition" title="Certifications & Achievements">
      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card gradient-border p-6 relative overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-violet-300 text-lg flex-shrink-0">
                <FaAward />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white leading-snug">{c.title}</h3>
                <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">{c.issuer}</p>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{c.description}</p>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.a
          href={blog.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6 sm:col-span-2 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-cyan-300 text-lg flex-shrink-0">
            <FaMedium />
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">Writing on {blog.platform}</h3>
            <p className="text-slate-400 text-sm mt-1">{blog.description}</p>
          </div>
          <span className="ml-auto text-sm text-violet-400 whitespace-nowrap hidden sm:inline">Read my blog →</span>
        </motion.a>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 px-6 sm:px-10 lg:px-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14"
          >
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

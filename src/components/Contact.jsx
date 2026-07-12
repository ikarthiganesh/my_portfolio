import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'
import Section from './Section'
import { profile } from '../data'

// ------------------------------------------------------------------
// EmailJS setup (see README.md "Contact Form Setup" for full steps):
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
// 3. Create a template for messages sent TO you -> copy the Template ID
//    (Optional) Create a second "auto-reply" template that emails the
//    sender back a short thank-you note mentioning your projects and
//    internship — EmailJS supports this as a second template/action
//    triggered from the same form. A sample auto-reply template body
//    is included in README.md.
// 4. Copy your Public Key from Account -> API Keys
// 5. Paste all three values below.
// ------------------------------------------------------------------
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const AUTOREPLY_TEMPLATE_ID = 'YOUR_EMAILJS_AUTOREPLY_TEMPLATE_ID' // optional
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)

      // Optional: fire the auto-reply template too, so the sender gets an
      // instant response mentioning your projects & internship experience.
      if (AUTOREPLY_TEMPLATE_ID && AUTOREPLY_TEMPLATE_ID !== 'YOUR_EMAILJS_AUTOREPLY_TEMPLATE_ID') {
        await emailjs.sendForm(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      }

      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="space-y-5"
        >
          <p className="text-slate-400 leading-relaxed">
            Have a role, a project, or just want to say hi? My inbox is open — I try to reply within a day or two.
          </p>

          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <span className="h-10 w-10 rounded-xl glass flex items-center justify-center text-violet-300"><FaEnvelope /></span>
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <span className="h-10 w-10 rounded-xl glass flex items-center justify-center text-violet-300"><FaLinkedin /></span>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <span className="h-10 w-10 rounded-xl glass flex items-center justify-center text-violet-300"><FaGithub /></span>
              GitHub
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <span className="h-10 w-10 rounded-xl glass flex items-center justify-center text-violet-300"><FaPhone /></span>
              {profile.phone}
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="glass-card p-7 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-500 mb-2 block">Name</label>
              <input
                name="user_name"
                required
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-400/60 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-slate-500 mb-2 block">Email</label>
              <input
                name="user_email"
                required
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-400/60 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-slate-500 mb-2 block">Subject</label>
            <input
              name="subject"
              required
              type="text"
              placeholder="What's this about?"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-400/60 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-slate-500 mb-2 block">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me a bit about the opportunity or idea..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-400/60 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-cyan-300 text-center">
              Thanks for reaching out — I'll get back to you soon!
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-rose-400 text-center">
              Something went wrong. Please email me directly at {profile.email}.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  )
}

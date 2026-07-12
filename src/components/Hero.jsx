import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiOutlineArrowDown } from 'react-icons/hi'
import { profile } from '../data'

const roles = ['Full Stack Developer', 'AI & ML Enthusiast', 'React + Spring Boot', 'Building with RAG & CV']

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-24 pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="section-eyebrow">Portfolio · {profile.location}</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-[1.1]">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="mt-4 h-9 flex items-center">
            <span className="font-display text-xl sm:text-2xl text-slate-200 border-r-2 border-violet-400 pr-1">
              {typed}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 text-xl text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-white hover:scale-110 transition-all" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 animate-float">
  {/* Glow */}
  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/25 via-violet-500/20 to-cyan-400/20 blur-xl" />

  {/* Border */}
  <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-violet-500 to-indigo-500">
    <div className="h-full w-full rounded-full bg-base-950" />
  </div>

  {/* Image */}
  <div className="absolute inset-[5px] rounded-full overflow-hidden">
    <img
      src={profile.photo}
      alt={profile.name}
      className="
        h-full
        w-full
        object-cover
        object-[50%_8%]
        scale-[1.38]
        transition-all
        duration-500
        hover:scale-[1.42]
      "
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.nextSibling.style.display = "flex";
      }}
    />

    <div
      className="hidden h-full w-full items-center justify-center font-display text-5xl gradient-text"
      style={{ display: "none" }}
    >
      KT
    </div>
  </div>
</div>
</motion.div>
</div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <HiOutlineArrowDown />
      </motion.a>
    </section>
  )
}

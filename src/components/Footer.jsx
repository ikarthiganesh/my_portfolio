import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from 'react-icons/fa'
import { profile, blog } from '../data'

export default function Footer() {
  return (
    <footer className="relative px-6 sm:px-10 lg:px-24 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display text-white font-semibold">
          Karthika<span className="gradient-text">.</span>
        </p>

        <div className="flex items-center gap-6 text-lg text-slate-400">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={blog.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Medium">
            <FaMedium />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

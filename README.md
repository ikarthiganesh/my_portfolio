# Karthika T — Personal Portfolio

A modern, animated, dark-themed portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Stack

- React 18 + Vite
- Tailwind CSS (dark theme, indigo/violet/cyan gradient accents, glassmorphism)
- Framer Motion (scroll reveals, hover effects, page load animation)
- React Icons
- EmailJS (contact form — no backend required)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

Build for production:

```bash
npm run build
npm run preview
```

## 🖼️ Adding Your Profile Photo

Drop your photo at:

```
public/assets/profile.jpg
```

Recommended: a square photo, at least 500×500px. It will automatically appear inside the circular animated-border frame in the Hero section. If no photo is present, your initials ("KT") show instead, so the layout never breaks.

## ✉️ Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) so messages are sent straight to your inbox with no backend server.

1. Create a free account at https://www.emailjs.com
2. **Add an Email Service** (e.g. connect your Gmail) → copy the **Service ID**
3. **Create an Email Template** for messages sent *to you*. Suggested template:

   ```
   Subject: New portfolio message: {{subject}}

   From: {{user_name}} <{{user_email}}>

   {{message}}
   ```

   Copy the **Template ID**.

4. **(Optional but recommended) Create a second "auto-reply" template** so that anyone who emails you through the form instantly gets a short, friendly reply mentioning your background, projects, and internship. Suggested auto-reply template (send this one "To Email" = `{{user_email}}`):

   ```
   Subject: Thanks for reaching out, {{user_name}}!

   Hi {{user_name}},

   Thanks so much for getting in touch — I've received your message
   about "{{subject}}" and will get back to you personally within
   a day or two.

   A quick bit about me while you wait: I'm Karthika T, a final-year
   AI & Data Science student who builds full-stack and applied-AI
   products end to end. A few things I've recently shipped:

   • NGO Donation Management System — a full-stack donation platform
     (React, Spring Boot, MySQL) with JWT auth and role-based access.
   • Document Layout Analysis — a YOLOv8-powered system that detects
     and classifies elements in scanned documents (Python, PyTorch,
     LayoutLMv3, OpenCV).
   • AI Document Assistant (RAG) — chat with PDFs using semantic
     search + LLMs (FastAPI, LangChain, ChromaDB, Gemini API).

   I also completed a Full-Stack Developer internship at Chennai
   Metro Rail Limited (CMRL), building a Competency Certificate
   Generation System with React and Spring Boot.

   You can see all of this in detail on my portfolio, GitHub, and
   LinkedIn — links are in my email signature.

   Talk soon,
   Karthika
   ```

   Copy this template's **Template ID** too.

5. Go to **Account → API Keys** and copy your **Public Key**.
6. Open `src/components/Contact.jsx` and fill in the four constants near the top:

   ```js
   const SERVICE_ID = 'your_service_id'
   const TEMPLATE_ID = 'your_template_id'
   const AUTOREPLY_TEMPLATE_ID = 'your_autoreply_template_id' // optional
   const PUBLIC_KEY = 'your_public_key'
   ```

That's it — the form will send you an email, and (if configured) auto-reply to the visitor.

## 🎨 Customizing Content

All text content (name, bio, skills, projects, education, certifications, links) lives in one file:

```
src/data.js
```

Edit that file to update anything without touching component/JSX code.

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── assets/          # profile.jpg, favicon.svg
├── src/
│   ├── components/      # Navbar, Hero, About, Skills, Projects,
│   │                      Experience, Education, Certifications,
│   │                      Contact, Footer, BackgroundBlobs, Loader, Section
│   ├── data.js           # all portfolio content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## ☁️ Deploying

**Vercel** (recommended, free):

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo at https://vercel.com/new and it will auto-detect the Vite build settings (`npm run build`, output dir `dist`).

**Netlify**: build command `npm run build`, publish directory `dist`.

## ✅ Notes

- Update the GitHub/live-demo links in `src/data.js` for each project.
- Update `resumeUrl` in `src/data.js` if you want a "Download Resume" button — place the PDF at `public/assets/`.
- Reduced-motion users automatically get animations minimized (`prefers-reduced-motion` respected).

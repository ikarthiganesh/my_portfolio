// ------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update copy,
// links, projects, skills etc. without touching component code.
// ------------------------------------------------------------------

export const profile = {
  name: 'Karthika T',
  role: 'Full Stack Developer | AI & ML Enthusiast',
  tagline:
    'Final-year AI & Data Science student building production-ready web and AI systems — from JWT-secured full stack platforms to deep learning document intelligence.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'karthikat185@gmail.com',
  phone: '+91 8825610743',
  github: 'https://github.com/ikarthiganesh',
  linkedin: 'https://www.linkedin.com/in/karthika-t/',
  medium: 'https://medium.com/@ikarthiganesh',
  resumeUrl: '/assets/Karthika_T_Resume.pdf',
  photo: '/assets/profile.jpg.png',
}


  export const about = {
  heading: "Hi, I'm Karthika.",
  paragraphs: [
    "A Final-Year Artificial Intelligence & Data Science student passionate about Full-Stack Development and Artificial Intelligence.",

    "I enjoy building secure, scalable, and user-focused applications—from modern React frontends and Spring Boot backends to AI-powered systems using Deep Learning, Computer Vision, and Generative AI.",

    "I believe growth comes from building. Every project has challenged me to learn something new, improve my problem-solving skills, and create solutions that have real-world impact.",

    "I'm currently seeking Software Engineer and AI Engineer opportunities where I can contribute, learn from experienced teams, and continue building products that make a difference."
  ],

  highlights: [
    { label: 'Focus', value: 'Full Stack + Applied AI' },
    { label: 'Currently', value: 'Final-Year B.Tech, AI & DS' },
    { label: 'Seeking', value: 'SWE / AI Engineer roles' },
  ],
}

export const skills = [
  {
    category: 'Programming',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'React.js'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Node.js', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MongoDB', 'ChromaDB'],
  },
  {
    category: 'AI & ML',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NLP',
      'Generative AI',
      'RAG',
      'LangChain',
      'PyTorch',
      'YOLOv8',
      'LayoutLMv3',
      'Scikit-learn',
    ],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Vercel', 'Render'],
  },
]

export const experience = [
  {
    company: 'Chennai Metro Rail Limited (CMRL)',
    role: 'Full-stack Developer Intern',
    period: 'June 1 – June 30, 2025',
    points: [
      'Built and deployed a Competency Certificate Generation System to streamline certificate creation and management for internal departments.',
      'Collaborated with non-technical stakeholders to gather requirements, deliver product demos, and resolve usability issues.',
      'Developed a responsive front-end using React.js and built backend REST APIs using Spring Boot, integrating JWT-based authentication for secure user access.',
      'Improved system efficiency by reducing manual certificate processing time.',
    ],
  },
]

export const projects = [
  {
    title: 'NGO Donation Management System',
    description:
      'A full-stack donation platform for donor, campaign, and donation management with secure JWT authentication, role-based access control, and a responsive dashboard UI.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'JWT'],
    github: 'https://github.com/ikarthiganesh',
    demo: 'https://donation-management-system-tau.vercel.app/',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Document Layout Analysis',
    description:
      'An AI-powered system that detects and classifies document elements — text, tables, figures, and headings — from scanned documents using a fine-tuned YOLOv8 model, with a FastAPI backend and React analytics dashboard.',
    tech: ['Python', 'YOLOv8', 'LayoutLMv3', 'PyTorch', 'OpenCV'],
    github: 'https://github.com/ikarthiganesh',
    demo: 'https://document-layout-analysis-ten.vercel.app/',
    accent: 'from-violet-500 to-cyan-400',
  },
  {
    title: 'AI Document Assistant using RAG',
    description:
      'A Retrieval-Augmented Generation application that lets users chat with PDF documents using semantic search, vector embeddings, and an LLM to generate accurate, context-aware answers.',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Gemini API', 'Streamlit'],
    github: 'https://github.com/ikarthiganesh',
    demo: '#',
    accent: 'from-cyan-400 to-indigo-500',
  },
]

export const education = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    school: 'Shiv Nadar University, Chennai',
    period: 'Final Year',
  },
  {
    degree: 'Higher Secondary (Class XII)',
    school: 'Government Higher Secondary School, Chettikulam',
    period: '',
  },
]

export const certifications = [
  {
    title: 'SPURS Merit Scholarship',
    issuer: 'Shiv Nadar University',
    description: 'Awarded for academic merit and adaptability.',
  },
  {
    title: '1st Prize — District-Level Speech Competition',
    issuer: 'District Level',
    description: 'Recognized for public speaking and communication excellence.',
  },
]

export const blog = {
  platform: 'Medium',
  url: 'https://medium.com/@ikarthiganesh',
  description: 'I write about self-growth and personal development on Medium.',
}

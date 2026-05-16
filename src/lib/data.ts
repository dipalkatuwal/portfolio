export const PROJECTS = [
  {
    key: "nepse",
    title: "NepseSage",
    sub: "MERN · Conversational AI · Real-time Data",
    desc: "Stock market intelligence for retail investors in Nepal — complex NEPSE data, plain language answers. No jargon, no spreadsheets.",
    details: [
      "Full MERN platform where retail investors can ask questions about stocks in plain language",
      "Conversational AI layer on top of market data that translates it — no jargon, no spreadsheets",
      "Real-time data pipeline handling live market feeds, normalization, and queryability",
      "UX kept deliberately simple — if someone's never invested before, they should still be able to use it",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API", "WebSocket", "Chart.js", "JWT Auth"],
    github: "https://github.com/dipal-katuwal/NepseSage",
    bgClass: "bg-nepse",
    badge: "⏳ Demo in progress",
    visLabel: "01 / NepseSage",
  },
  {
    key: "pasal",
    title: "PasalBot",
    sub: "MERN · NLP · RBAC · Chat-driven Commerce",
    desc: "Conversational commerce where you order with words, not forms. No buttons, no dropdowns — just say what you want.",
    details: [
      "NLP-powered order system that converts conversational input into structured workflows",
      "Role-based access control across three user types: buyer, seller, and admin",
      "Entire interface as a chat UI — no forms, no traditional product pages, no checkout flow",
      "Secure JWT authentication and a backend architecture that scales to multiple concurrent shops",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "NLP", "RBAC", "JWT Auth", "Socket.io"],
    github: "https://github.com/dipal-katuwal/PasalBot",
    bgClass: "bg-pasal",
    badge: "⏳ Demo in progress",
    visLabel: "02 / PasalBot",
  },
  {
    key: "prediction",
    title: "NEPSE Prediction Portal",
    sub: "Python · ML · TensorFlow · Data Visualization",
    desc: "Machine learning models for NEPSE stock price prediction — turning historical market data into actionable forecasts.",
    details: [
      "LSTM-based deep learning model trained on historical NEPSE stock data for time-series forecasting",
      "Feature engineering pipeline: moving averages, RSI, volume-weighted indicators, sector correlation",
      "Flask backend exposing REST endpoints for predictions; React dashboard with interactive candlestick charts",
      "Backtesting framework that validates model accuracy against held-out market periods",
    ],
    tags: ["Python", "TensorFlow", "Pandas", "NumPy", "Flask", "Chart.js", "LSTM", "Data Visualization"],
    github: "https://github.com/dipal-katuwal/nepse-prediction-portal",
    bgClass: "bg-prediction",
    visLabel: "03 / NEPSE Prediction",
  },
  {
    key: "nextjs",
    title: "Next.js Learning Portfolio",
    sub: "Next.js · React · Tailwind CSS · App Router",
    desc: "A hands-on exploration of the Next.js ecosystem — App Router, server components, API routes, and modern React patterns.",
    details: [
      "Progressive exploration of the App Router paradigm: layouts, loading states, error boundaries",
      "Server and Client Component patterns with practical data-fetching examples",
      "API routes and server actions used to build small full-stack features inside Next.js",
      "Deployed to Vercel; used as a sandbox to test patterns before bringing them to production",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "App Router", "Server Components"],
    github: "https://github.com/dipal-katuwal/Nextjslearning",
    bgClass: "bg-nextjs",
    visLabel: "04 / Next.js Portfolio",
  },
  {
    key: "portfolio",
    title: "Portfolio Site",
    sub: "Next.js · Tailwind CSS · TypeScript · SVG",
    desc: "The site you're on right now. Built from scratch with a warm editorial aesthetic.",
    details: [
      "Custom design system with a warm ink palette — Playfair Display + Courier Prime",
      "Scroll-reveal animations driven by IntersectionObserver with staggered delays",
      "Fully accessible navigation with keyboard support and ARIA labels throughout",
      "Zero external component libraries — every UI element written from scratch",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SVG", "Animation"],
    bgClass: "bg-portfolio",
    yourehere: true,
    visLabel: "05 / Portfolio Site",
  },
];

export const SKILLS = [
  {
    label: "Core stack",
    tags: [
      { name: "JavaScript", type: "core" },
      { name: "React", type: "core" },
      { name: "Node.js / Express", type: "core" },
      { name: "MongoDB", type: "core" },
      { name: "REST APIs", type: "core" },
      { name: "Tailwind CSS", type: "core" },
    ],
  },
  {
    label: "Experience with",
    tags: [
      { name: "Python", type: "shipped" },
      { name: "Socket.io", type: "shipped" },
      { name: "JWT Auth", type: "shipped" },
      { name: "RBAC", type: "shipped" },
      { name: "LLM API Integration", type: "shipped" },
      { name: "NLP Pipelines", type: "shipped" },
      { name: "Real-time Data Feeds", type: "shipped" },
      { name: "TensorFlow", type: "shipped" },
    ],
  },
  {
    label: "Comfortable with",
    tags: [
      { name: "TypeScript", type: "comfortable" },
      { name: "Next.js", type: "comfortable" },
      { name: "PostgreSQL", type: "comfortable" },
      { name: "Docker", type: "comfortable" },
      { name: "Git Workflows", type: "comfortable" },
      { name: "AWS / Vercel", type: "comfortable" },
      { name: "Postman", type: "comfortable" },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer (Freelance)",
    company: "Independent",
    year: "2023 – Present",
    bullets: [
      "Designed and shipped NepseSage — a full MERN platform combining a real-time NEPSE data pipeline with a conversational AI layer for retail investors",
      "Built PasalBot — a chat-first commerce platform with NLP order parsing, RBAC for three user roles, and Socket.io for live order updates",
      "Developed the NEPSE Prediction Portal: Python data pipeline, LSTM model training, Flask API, and a React dashboard with interactive charts",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Tech Innovators Inc.",
    year: "2025",
    bullets: [
      "Assisted in development of core features for a large-scale SaaS platform within a high-velocity engineering team",
      "Collaborated in an agile team environment using SCRUM methodologies and professional version control",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Sc. Computer Science & IT",
  institution: "Tribhuvan University, Kathmandu",
  years: "2021 – 2026",
  core: ["Distributed Computing", "Algorithmic Efficiency", "Artificial Intelligence", "Databases", "OS", "Networking"],
  note: "Deep study of foundational CS principles. Built final-year projects merging academic theory with real-world product thinking, specifically in the FinTech space.",
};

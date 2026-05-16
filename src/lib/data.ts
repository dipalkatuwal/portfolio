export const PROJECTS = [
  {
    key: "nepse",
    slug: "nepse-sage",
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
    isLiveDemo: false,
    bgClass: "bg-nepse",
    badge: "Live Demo",
    visLabel: "01 / NepseSage",
    overview: "NepseSage AI is a full-stack, professional-grade market analysis platform purpose-built for Nepal Stock Exchange (NEPSE) investors. Designed around a 'Clinical Analyst' philosophy, it transforms raw market data into high-precision visual intelligence, giving retail investors access to tools previously reserved for institutional traders.",
    problemSolved: "Nepali retail investors lack access to professional-grade tools for portfolio tracking, behavioral analysis, and AI-driven market insights — forcing them to make high-stakes decisions with inadequate data and no psychological guardrails.",
    features: [
      { title: "Clinical Dashboard", description: "Real-time portfolio P&L, a proprietary 'Discipline Score' metric, live Portfolio Beta, and volatility ratings — all in one mission-control view." },
      { title: "Sage AI Engine", description: "OpenAI-powered symbol analysis for stocks like NICA and NTC. Detects support/resistance levels, interprets indicators, and aggregates NEPSE market sentiment." },
      { title: "Behavior Lab / Journal", description: "The trading psychologist. Logs emotional state during trades, identifies cognitive biases (FOMO, Revenge Trading), and auto-flags 'Red Flag' patterns." },
      { title: "Strategy Simulator", description: "Risk-free strategy testing environment using real NEPSE market data and virtual capital, enabling investors to validate approaches before committing." }
    ],
    architecture: "Built as a monorepo with a clean separation between frontend and backend. The Express.js API handles JWT-secured authentication, MongoDB portfolio/journal persistence, and background NEPSE data jobs via node-cron. The Next.js 15 App Router frontend leverages Server Components for optimal performance.",
    designSystem: "Uses a bespoke 'Clinical Navy' design language — OKLCH-based colors for perfect light/dark transitions, hardware-accelerated micro-animations via Framer Motion, and a dual-typography system pairing Space Grotesk for impact with DM Sans for data-dense readouts.",
    languages: [
      { name: "TypeScript", percentage: 83.6, color: "#9b89e8" },
      { name: "JavaScript", percentage: 14.7, color: "#c8a96e" },
      { name: "CSS", percentage: 1.7, color: "#6ecaa8" }
    ],
    archTags: ["Monorepo", "REST API", "JWT Auth", "Background Jobs", "Server Components", "Zod Validation", "OKLCH Color System"]
  },
  {
    key: "pasal",
    slug: "pasal-bot",
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
    isLiveDemo: false,
    bgClass: "bg-pasal",
    badge: "Live Demo",
    visLabel: "02 / PasalBot",
    overview: "PasalBot (v1.1) is a smart shop assistant frontend application built specifically for Nepali social media sellers operating on Facebook and Instagram. 'Pasal' means shop in Nepali — the app helps informal vendors manage products, track orders, and automate customer conversations through a keyword-driven chat bot, all from a single dashboard.",
    problemSolved: "Thousands of Nepali entrepreneurs run businesses entirely through social media DMs — manually responding to every inquiry, tracking orders in notebooks, and losing sales to missed messages. PasalBot brings structure and automation to this informal commerce landscape.",
    features: [
      { title: "Bot Chat Engine", description: "Keyword-matching chatbot with a full order flow — handles product inquiries, pricing, and order confirmation automatically without the seller's intervention." },
      { title: "Product Management", description: "Full CRUD interface for managing shop inventory with product cards, forms, and category organization — structured for real Nepali e-commerce patterns." },
      { title: "Order Tracking", description: "Centralized order management with status rows, formatted NPR currency display, and date tracking — replacing messy notebook-based records." },
      { title: "Demo Shop Modal", description: "Live preview of the buyer-facing shop experience, letting sellers test how their storefront appears to customers before going live." }
    ],
    architecture: "Built with a deliberate separation of concerns. All state lives in ShopContext (useReducer) and UIContext. The entire API layer is isolated — each function is mock-first but annotated for seamless real backend swap-in without touching components.",
    designSystem: "Focused on mobile-first accessibility for sellers on the go. High-contrast UI elements, simplified navigation, and a chat-driven workflow that minimizes typing and cognitive load.",
    languages: [
      { name: "JavaScript", percentage: 85.4, color: "#c8a96e" },
      { name: "CSS", percentage: 13.8, color: "#6ecaa8" },
      { name: "HTML", percentage: 0.8, color: "#8a8a8a" }
    ],
    archTags: ["Context API", "useReducer", "CSS Modules", "NPR Utils", "SPA Routing", "Mock Layer"]
  },
  {
    key: "prediction",
    slug: "nepse-predictor",
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
    isLiveDemo: false,
    bgClass: "bg-prediction",
    visLabel: "03 / NEPSE Prediction",
    overview: "This machine learning research project applies Long Short-Term Memory (LSTM) neural networks to the problem of predicting closing prices for Nepali Stock Exchange securities. Using real NEPSE historical data, the model learns temporal patterns in market behavior.",
    problemSolved: "Standard neural networks treat each input independently. LSTMs maintain a 'memory' of past time steps — critical for financial time series where yesterday's price and momentum influence tomorrow's movement.",
    features: [
      { title: "Data Collection & Cleaning", description: "Raw NEPSE CSV data ingested, cleaned for missing values, and formatted for time-series processing using Pandas." },
      { title: "Feature Engineering", description: "Computed moving averages (SMA, EMA) and percentage-change features to give the model richer context beyond raw price data." },
      { title: "Preprocessing & Scaling", description: "MinMax scaling applied to normalize all inputs to [0,1] range. Sequences of lookback windows created for LSTM input format." },
      { title: "Model Training & Evaluation", description: "LSTM built and trained via TensorFlow/Keras. Evaluated on held-out test data with prediction vs. actual price visualizations." }
    ],
    architecture: "The trained model is serialized and saved as stock_prediction_model.keras, allowing it to be loaded for inference without retraining. This demonstrates understanding of model persistence best practices.",
    designSystem: "Focus on data visualization clarity. Using Recharts and Matplotlib to present complex model outputs in an intuitive way for human analysis.",
    languages: [
      { name: "Python", percentage: 95.0, color: "#1a6b9a" },
      { name: "Jupyter Notebook", percentage: 5.0, color: "#9b89e8" }
    ],
    archTags: ["Time-Series", "LSTM", "MinMax Scaling", "Model Serialization", "Loss Visualization", "Test Set Evaluation"]
  },
  {
    key: "nextjs",
    slug: "nextjs-dashboard",
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
    isLiveDemo: false,
    bgClass: "bg-nextjs",
    visLabel: "04 / Next.js Portfolio",
    overview: "A production-quality financial dashboard application built by completing the official Next.js App Router course curriculum. This project demonstrates deep proficiency with Next.js 15's modern patterns.",
    problemSolved: "While labeled a learning project, this codebase is 99.1% TypeScript with strict configuration, auth middleware, database integration, and live deployment — reflecting production-grade technical rigor.",
    features: [
      { title: "App Router Mastery", description: "Deep use of nested layouts, loading UI, error boundaries, Server and Client component separation in Next.js App Router." },
      { title: "Authentication Flow", description: "NextAuth.js integrated with session management, middleware protection, and secure credential handling." },
      { title: "Full-Stack Data", description: "Server-side data fetching with Vercel Postgres, database queries colocated with components, and proper separation of layers." },
      { title: "Proxy & Config", description: "Custom proxy.ts, strict ESLint configuration, and production-grade configs demonstrating infrastructure awareness." }
    ],
    architecture: "Patterns learned here — App Router data fetching, auth middleware, TypeScript strict mode, and Tailwind-based component systems — were directly applied to more complex products.",
    designSystem: "Standardized dashboard UI using Tailwind CSS for consistent layout, typography, and responsive behavior across all modules.",
    languages: [
      { name: "TypeScript", percentage: 99.1, color: "#e87b6e" },
      { name: "Other", percentage: 0.9, color: "#8a8a8a" }
    ],
    archTags: ["Server Components", "Route Middleware", "DB Queries", "Session Management", "Streaming UI", "Vercel Deployment"]
  },
  {
    key: "portfolio",
    slug: "portfolio-site",
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
    isLiveDemo: false,
    bgClass: "bg-portfolio",
    yourehere: true,
    visLabel: "05 / Portfolio Site",
    overview: "A bespoke digital garden built to showcase projects and personality. The site emphasizes craftsmanship over convenience, using zero UI libraries and custom-built components.",
    problemSolved: "Moving away from generic developer portfolios. This site focuses on readability, typography, and subtle animations that reflect an 'editorial' feel.",
    features: [
      { title: "Typography First", description: "Harmonious pairing of Playfair Display for headings and Courier Prime for code/data, ensuring high legibility and character." },
      { title: "Scroll Reveal", description: "Custom IntersectionObserver implementation that triggers animations as elements enter the viewport, creating a guided experience." },
      { title: "Responsive Canvas", description: "Fluid layouts that adapt from ultra-wide desktops to mobile devices without losing the editorial spacing." },
      { title: "SVG Mastery", description: "Custom-crafted SVG icons and backgrounds that stay sharp at any resolution while maintaining a small bundle size." }
    ],
    architecture: "Built with Next.js App Router for optimal performance and SEO. The codebase follows a strict component-based architecture for maintainability.",
    designSystem: "The 'Warm Ink' palette (f7f4ef + 1c1c1c) inspired by vintage manuscripts and modern minimalist print design.",
    languages: [
      { name: "TypeScript", percentage: 70.0, color: "#1a6b9a" },
      { name: "Tailwind CSS", percentage: 25.0, color: "#6ecaa8" },
      { name: "SVG", percentage: 5.0, color: "#c8a96e" }
    ],
    archTags: ["Next.js", "App Router", "TypeScript", "Tailwind CSS", "Custom Animation", "SEO Optimized"]
  },
];

export const SKILLS = [
  {
    label: "Languages",
    tags: [
      { name: "TypeScript", type: "core" },
      { name: "JavaScript (ES6+)", type: "core" },
      { name: "Python", type: "core" },
      { name: "SQL", type: "core" },
      { name: "HTML/CSS", type: "core" },
    ],
  },
  {
    label: "Frameworks",
    tags: [
      { name: "Next.js", type: "core" },
      { name: "React", type: "core" },
      { name: "Node.js", type: "core" },
      { name: "Express", type: "core" },
      { name: "Django REST Framework", type: "core" },
    ],
  },
  {
    label: "Machine Learning",
    tags: [
      { name: "TensorFlow", type: "shipped" },
      { name: "Keras", type: "shipped" },
      { name: "LSTM Neural Networks", type: "shipped" },
      { name: "Scikit-learn", type: "shipped" },
      { name: "Pandas", type: "shipped" },
      { name: "NumPy", type: "shipped" },
    ],
  },
  {
    label: "Backend & DevOps",
    tags: [
      { name: "MongoDB", type: "shipped" },
      { name: "PostgreSQL", type: "shipped" },
      { name: "MySQL", type: "shipped" },
      { name: "REST APIs", type: "shipped" },
      { name: "JWT", type: "shipped" },
      { name: "Zod", type: "shipped" },
      { name: "Git", type: "shipped" },
      { name: "Vercel", type: "shipped" },
      { name: "Docker", type: "shipped" },
      { name: "CI/CD", type: "shipped" },
    ],
  },
  {
    label: "UI/UX",
    tags: [
      { name: "Tailwind CSS", type: "comfortable" },
      { name: "Shadcn UI", type: "comfortable" },
      { name: "Framer Motion", type: "comfortable" },
      { name: "Material UI", type: "comfortable" },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
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
    company: "Need Technosoft Pvt. Ltd.",
    year: "2025",
    bullets: [
      "Developed full-stack features including a user-facing dashboard and backend data processing endpoints using Node.js and Express; optimized database queries and introduced request caching to improve API performance on high-traffic routes.",
      "Migrated 10+ legacy UI components to responsive Tailwind CSS layouts and collaborated in an agile team through code reviews and weekly sprints.",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Sc. in Computer Science and Information Technology (B.Sc. CSIT)",
  institution: "Mahendra Morang Adarsha Multiple Campus,TU,Biratnagar,Nepal",
  years: "2021 – 2026",
  core: ["Distributed Computing", "Data Structure & Algorithms", "Artificial Intelligence", "Databases", "OS", "Networking", "Software Engineering"],
  note: "Deep study of foundational CS principles. Built final-year projects merging academic theory with real-world product thinking, specifically in the FinTech space.",
};

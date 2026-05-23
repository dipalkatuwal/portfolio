export const PROJECTS = [
   {
    key: "nepse",
    slug: "nepse-sage",
    title: "NepseSage",
    sub: "Next.js 15 · Express.js · MongoDB · OpenAI · Framer Motion",
    desc: "Professional-grade clinical analysis platform for the Nepal Stock Exchange — institutional-quality portfolio intelligence, AI-driven behavioral insights, and real-time market data for retail investors.",
    details: [
      "Monorepo with Next.js 15 App Router frontend and Express.js/Node.js backend, both in TypeScript",
      "OpenAI-powered Sage AI for symbol-level technical analysis, support/resistance detection, and NEPSE sentiment aggregation",
      "Proprietary 'Discipline Score' system with a Behavior Lab that logs emotional state during trades and auto-flags cognitive biases like FOMO and Revenge Trading",
      "JWT + Bcryptjs authentication, MongoDB (Mongoose 9) persistence, and node-cron background jobs for scheduled market data tasks",
    ],
    tags: ["Next.js 15", "TypeScript", "Express.js", "Node.js", "MongoDB", "OpenAI API", "Framer Motion", "Recharts", "Shadcn UI", "Tailwind CSS 4", "JWT Auth", "Zod"],
    github: "https://github.com/dipalkatuwal/NepseSage",
    liveDemo: "https://nepsesage.vercel.app/market",
    bgClass: "bg-nepse",
    badge: "Open Source",
    visLabel: "01 / NepseSage",
    overview: "NepseSage AI is a full-stack, professional-grade market analysis platform purpose-built for Nepal Stock Exchange (NEPSE) investors. Built on a 'Clinical Analyst' philosophy, it combines a Next.js 15 App Router frontend with an Express.js/Node.js backend and MongoDB to deliver institutional-caliber tools — real-time portfolio tracking, AI-powered symbol analysis, behavioral psychology insights, and risk-free strategy simulation — to retail investors who previously had none of this.",
    problemSolved: "Nepali retail investors are forced to make high-stakes decisions with inadequate data, zero behavioral guardrails, and no professional tooling. NepseSage closes that gap — bringing institutional-grade portfolio analytics, an AI analyst engine, and a dedicated trading psychology layer to anyone with a NEPSE account.",
    features: [
      { title: "Clinical Dashboard", description: "Mission control for investors. Tracks real-time portfolio value and P&L, surfaces a proprietary 'Discipline Score', and shows live Portfolio Beta alongside volatility ratings — all in one high-density view." },
      { title: "Sage AI Engine", description: "OpenAI-powered analytical core at /sage-ai. Performs technical analysis for NEPSE symbols (NICA, NTC, etc.) — detecting support/resistance levels, interpreting indicators, and aggregating market sentiment signals." },
      { title: "Behavior Lab & Journal", description: "The trading psychologist at /journal. Logs emotional state during every trade, runs automatic pattern recognition to identify FOMO and Revenge Trading behaviors, and auto-flags 'Red Flag' patterns before they become habits." },
      { title: "Strategy Simulator", description: "Risk-free environment at /simulator for testing strategies with real NEPSE market data and virtual capital — validate approaches before committing real money." }
    ],
    architecture: "Structured as a monorepo with two isolated workspaces: /server (Express.js, controllers, Mongoose models for User/Portfolio/Journal, JWT middleware, node-cron background jobs, OpenAI service integration) and /web-app (Next.js 15 App Router, Shadcn/Radix UI components, AuthContext, custom hooks, Zod schema validation). The backend exposes REST endpoints consumed by the frontend via NEXT_PUBLIC_API_URL.",
    designSystem: "Built around a bespoke 'Clinical Navy' design language: OKLCH-based color tokens for mathematically perfect light/dark transitions, hardware-accelerated micro-interactions via Framer Motion, Recharts for financial data visualization, and a dual-typography system using Space Grotesk (headings/impact) paired with DM Sans (data-dense utility readouts). Styled with Tailwind CSS 4.",
    languages: [
      { name: "TypeScript", percentage: 83.6, color: "#9b89e8" },
      { name: "JavaScript", percentage: 14.7, color: "#c8a96e" },
      { name: "CSS", percentage: 1.7, color: "#6ecaa8" }
    ],
    archTags: ["Monorepo", "Next.js 15 App Router", "Server Components", "REST API", "JWT + Bcryptjs", "Mongoose ODM", "node-cron Jobs", "OpenAI SDK", "Zod Validation", "OKLCH Color System", "Shadcn UI", "Framer Motion"]
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
    github: "https://github.com/dipalkatuwal/PasalBot",
    liveDemo: "https://pasalbot.vercel.app",
    bgClass: "bg-pasal",
    
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
    github: "https://github.com/dipalkatuwal/nepse-prediction-portal",
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
    key: "nepalisaga",
    slug: "nepali-saga",
    title: "NepaliSaga",
    sub: "Next.js 15 · TypeScript · Tailwind CSS · App Router",
    desc: "A production-grade Nepali digital news portal with a smart scroll-aware header, live financial widgets, and a premium editorial experience built for real media business use.",
    details: [
      "Scroll-aware sticky header with hysteresis logic — collapses on scroll, smoothly expands near the footer with tuned cubic-bezier transitions",
      "Live financial widgets for NEPSE ticker, Forex rates, Bullion prices, and Markets data table — purpose-built for Nepali readers",
      "Dynamic article routing with Next.js App Router, custom 404 page, reading progress bar, and skeleton loading states",
      "Component-driven architecture with custom hooks (useScrollAware, useReadingProgress, useNEPSE) cleanly separating logic from UI",
    ],
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "App Router", "Lucide React", "Vercel"],
    github: "https://github.com/dipalkatuwal/NepaliSaga",
    liveDemo: "https://nepalisaga.vercel.app/",
    bgClass: "bg-nepalisaga",
    badge: "Open Source",
    visLabel: "04 / NepaliSaga",
    overview: "NepaliSaga is a production-grade digital news portal built for Nepal's media landscape. It delivers a premium editorial experience combining smart UI interactions, real-time financial data widgets relevant to Nepali readers, and a fully responsive component system — architected as a foundation for a real media business.",
    problemSolved: "Nepal lacks modern, performant digital news platforms built with current frontend standards. NepaliSaga brings institutional-quality frontend engineering — smooth animations, financial data widgets, and scalable component architecture — to Nepali journalism.",
    features: [
      { title: "Smart Scroll-Aware Header", description: "Sticky header with hysteresis logic that collapses past the masthead and smoothly re-expands near the footer — preventing flicker at scroll thresholds using carefully tuned cubic-bezier curves." },
      { title: "Financial Widgets Suite", description: "Live NEPSE ticker, Forex exchange rates, Bullion (gold/silver) prices, and a full Markets data table — all purpose-built for the Nepali investor readership." },
      { title: "Editorial Content System", description: "Hero story layout, story cards with category tags and read time, compact card grid, and a full article view with rich typography and dynamic slug-based routing." },
      { title: "Engagement Features", description: "Reading progress bar, poll widget, trending sidebar, newsletter signup, ad banner placements, dark mode toggle, and mobile navigation drawer." }
    ],
    architecture: "Next.js 15 App Router with nested layouts for consistent header/footer across all pages. Components are separated into layout, home, article, widgets, shared, and navigation concerns. Custom hooks isolate scroll, reading progress, and market data logic. TypeScript interfaces define the data layer for articles, markets, and ads.",
    designSystem: "Premium editorial aesthetic with a warm off-white base, serif masthead typography, and a red accent system. Tailwind CSS utility classes combined with custom typography styles in a dedicated CSS layer. Smooth Framer-style transitions using native CSS cubic-bezier curves without additional dependencies.",
    languages: [
      { name: "TypeScript", percentage: 96.2, color: "#9b89e8" },
      { name: "CSS", percentage: 3.8, color: "#6ecaa8" }
    ],
    archTags: ["Next.js 15 App Router", "Server Components", "Dynamic Routes", "Custom Hooks", "Hysteresis Scroll Logic", "ISR-Ready", "Vercel Deployment"]
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
    company: "Self-Employed",
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

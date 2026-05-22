import Image from "next/image";
import dipalImage from "@/assets/dipal.jpg";

const socialLinks = [
  {
    href: "https://github.com/dipalkatuwal",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    name: "GitHub",
  },
  {
    href: "https://linkedin.com/in/dipalkatuwal",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    name: "LinkedIn",
  },
  {
    href: "/resume.pdf",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    name: "Resume",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero-profile"
      className="relative overflow-hidden border-b border-rule bg-white text-mid min-h-screen lg:min-h-[85vh] flex flex-col justify-between py-12 md:py-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.012) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.012) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Ambient Background Geometry */}
      <div className="absolute top-[8%] right-[8%] w-[480px] h-[480px] pointer-events-none hidden lg:block">
        <div className="absolute inset-0 rounded-full border border-lines/40" />
        <div className="absolute inset-[48px] rounded-full border border-lines/30" />
        <div className="absolute inset-[96px] rounded-full border border-lines/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.01)_0%,transparent_70%)]" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1040px] w-full mx-auto px-6 flex-grow flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 w-full items-center">

          {/* Left Block */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 md:space-y-6 w-full max-w-[520px] mx-auto lg:mx-0 animate-fade-up">
            
            {/* Mobile Profile Frame */}
            <div className="lg:hidden relative w-[105px] h-[105px] sm:w-[125px] sm:h-[125px] rounded-full border border-lines bg-white p-1 shadow-sm">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src={dipalImage}
                  alt="Dipal Katuwal Profile Portrait"
                  width={125}
                  height={125}
                  priority
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Badge + Availability Layout */}
            <div className="flex flex-col items-center lg:items-start space-y-3 w-full">
              <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                <span className="inline-flex rounded border border-[rgba(26,107,154,0.15)] bg-[rgba(26,107,154,0.03)] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[.18em] text-accent font-semibold">
                  Full Stack Developer
                </span>
                <span className="inline-flex items-center gap-1.5 rounded border border-[rgba(74,222,128,0.25)] bg-[rgba(74,222,128,0.04)] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[.12em] text-emerald-600 font-semibold">
                  <span className="avail-dot" style={{ width: 6, height: 6 }} />
                  Available
                </span>
              </div>

              {/* Mobile Social Actions */}
              <div className="flex items-center gap-2 lg:hidden">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-50/50 border border-lines text-[10px] font-mono font-medium text-mid hover:text-ink hover:bg-white transition-all"
                    title={social.name}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Title Block */}
            <div className="space-y-3.5 pt-0.5">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold tracking-tight text-ink leading-[1.14]">
                Hello, I&apos;m <span className="text-ink">Dipal Katuwal</span>
              </h1>
              <p className="text-[14px] md:text-[15px] text-mid leading-[1.68] font-normal">
                A computer science fellow and full-stack developer dedicated to end-to-end web applications, ML-powered tools, and GenAI-integrated workflows.
              </p>
            </div>
          </div>

          {/* Right Block: Diagram View Node Grid */}
          <div className="hidden lg:relative lg:flex lg:items-center lg:justify-end w-full h-[280px] select-none">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 360 280" fill="none">
              <path d="M 40 60 L 150 140" stroke="rgba(15,23,42,0.06)" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 40 140 L 150 140" stroke="rgba(15,23,42,0.06)" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 40 220 L 150 140" stroke="rgba(15,23,42,0.06)" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 150 140 L 250 140" stroke="rgba(15,23,42,0.08)" strokeWidth="1.2" strokeDasharray="3 3" />
            </svg>

            {/* Social Intersect Nodes */}
            <div className="absolute left-3 flex flex-col gap-4 z-10">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[46px] h-[46px] rounded-xl bg-white border border-lines flex flex-col items-center justify-center shadow-sm hover:border-neutral-400 hover:-translate-y-0.5 transition-all duration-200 group"
                  title={social.name}
                >
                  <span className="text-mid group-hover:text-ink transition-colors">{social.icon}</span>
                  <span className="text-[8px] font-mono tracking-wider text-muted font-bold mt-0.5 uppercase">{social.name}</span>
                </a>
              ))}
            </div>

            {/* Core Display Node */}
            <div className="absolute right-0 w-[145px] h-[145px] rounded-xl bg-white border border-lines p-1 shadow-[0_12px_28px_rgba(15,23,42,0.04)] group overflow-hidden">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <Image
                  src={dipalImage}
                  alt="Dipal Katuwal Portrait Graphics"
                  width={145}
                  height={145}
                  priority
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent/80" />
            </div>
          </div>

        </div>
      </div>

      {/* Summary Profile Dashboard Block */}
      <div className="w-full max-w-[1040px] mx-auto px-6 mt-10 lg:mt-2 relative z-20">
        <div className="w-full bg-white border border-lines rounded-xl p-6 md:p-8 shadow-[0_12px_30px_rgba(15,23,42,0.02)] relative overflow-hidden group">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto space-y-4">
            
            <div className="w-9 h-9 rounded-lg bg-neutral-50 border border-lines flex items-center justify-center text-muted group-hover:text-ink transition-colors shadow-sm">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>

            <h3 className="text-[15px] md:text-[17px] font-medium tracking-tight text-ink leading-relaxed">
              Taking ownership of feature lifecycles, collaborating across layers, and engineering clean, modular software systems.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 pt-4 w-full border-t border-lines/80 text-[12.5px] leading-relaxed text-mid">
              <p className="text-center md:text-left animate-fade-up [animation-delay:0.15s] opacity-0 [animation-fill-mode:forwards] bg-neutral-50/40 p-3.5 rounded-lg border border-lines/40 md:bg-transparent md:border-none md:p-0">
                I&apos;m skilled in systems design, robust backend architectures, database optimization, and simplifying complex software.
              </p>
              <p className="text-center md:text-left animate-fade-up [animation-delay:0.28s] opacity-0 [animation-fill-mode:forwards] bg-neutral-50/40 p-3.5 rounded-lg border border-lines/40 md:bg-transparent md:border-none md:p-0">
                When not coding, I&apos;m usually hunting down a solid cup of tea, out on a long walk, or editing videos.
              </p>
            </div>

            <div className="pt-2 w-full flex justify-center">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 w-max px-5 py-2.5 bg-accent text-white rounded-lg text-[11px] font-mono font-bold tracking-wider hover:bg-accent/95 active:scale-[0.98] transition-all"
                style={{ color: "#ffffff" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                VIEW PROJECTS
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

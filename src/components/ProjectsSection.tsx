"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";

const GitHubIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-60px 0px -40px 0px" }
    );
    ref.current.querySelectorAll(".rv").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const mainProjects = PROJECTS.slice(0, 4);
  const portfolioProject = PROJECTS[4];

  return (
    <>
      <section id="projects" className="border-t border-rule" ref={ref}>
        <div className="max-w-[1040px] mx-auto px-6 py-20">
          <p className="rv font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-muted mb-3">
            Projects
          </p>

          <div className="mt-11 grid gap-[18px] sm:grid-cols-2">
            {mainProjects.map((project, i) => (
              <div
                key={project.key}
                className={`rv rv-${(i % 2) + 2} group flex cursor-pointer flex-col overflow-hidden rounded-[14px] border border-rule bg-white shadow-none transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_18px_44px_rgba(28,28,28,.08)]`}
                onClick={() => setActiveProject(project as Project)}
              >
                {/* Visual banner */}
                <div className={`${project.bgClass} relative flex h-[180px] items-center justify-center overflow-hidden`}>
                  <span className="absolute left-3 top-3 rounded-[20px] bg-black/30 px-3 py-1 text-[10px] font-mono tracking-[.06em] text-white/70 backdrop-blur-[4px]">
                    {project.visLabel}
                  </span>
                  <span className="relative z-10 text-[34px] font-playfair italic text-white transition-transform duration-300 group-hover:-translate-y-[3px] [text-shadow:0_1px_16px_rgba(28,28,28,.25)]">
                    {project.title.split(" ")[0]}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 p-5">
                  <div className="mb-1 text-[20px] font-playfair text-ink">{project.title}</div>
                  <div className="mb-2 font-mono text-[10px] tracking-[.05em] text-ink3">{project.sub}</div>
                  <p className="text-[12px] leading-[1.65] text-mid">{project.desc}</p>
                </div>

                {/* Footer */}
                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-1.5 border-t border-lines px-5 pb-3.5 pt-2.5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[.04em] text-accent transition-all duration-150">
                    View details →
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.badge && (
                      <span className="rounded-[6px] border border-lines bg-white px-2.5 py-1 text-[10px] font-mono text-muted hover:bg-lines/30 hover:border-rule">
                        {project.badge}
                      </span>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-[6px] border border-lines bg-white px-2.5 py-1 text-[10px] font-mono text-muted transition-all duration-150 hover:border-accent hover:text-accent hover:bg-accent/5"
                      >
                        <GitHubIcon /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Portfolio card — full width */}
            <div
              className="rv rv-2 group col-span-full flex cursor-pointer flex-col overflow-hidden rounded-[14px] border border-rule bg-white transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_18px_44px_rgba(28,28,28,.08)]"
              onClick={() => setActiveProject(portfolioProject as Project)}
            >
              <div className={`${portfolioProject.bgClass} relative flex h-[140px] items-center justify-center overflow-hidden`}>
                <span className="absolute left-3 top-3 rounded-[20px] bg-black/30 px-3 py-1 text-[10px] font-mono tracking-[.06em] text-white/70 backdrop-blur-[4px]">
                  {portfolioProject.visLabel}
                </span>
                <span className="relative z-10 text-[34px] font-playfair italic text-white transition-transform duration-300 group-hover:-translate-y-[3px] [text-shadow:0_1px_16px_rgba(28,28,28,.25)]">
                  Portfolio Site
                </span>
                <span className="absolute right-3 top-3 animate-blink font-vt323 text-[13px] tracking-[2px] text-white/60">
                  ★ YOU ARE HERE ★
                </span>
              </div>

              <div className="p-5 pt-0">
                <div className="mb-1 text-[20px] font-playfair text-ink">Portfolio Site</div>
                <div className="mb-2 font-mono text-[10px] tracking-[.05em] text-ink3">{portfolioProject.sub}</div>
                <p className="text-[12px] leading-[1.65] text-mid">The site you're looking at right now. Built from scratch with a warm editorial aesthetic.</p>
              </div>

              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-1.5 border-t border-lines px-5 pb-3.5 pt-2.5">
                <span className="font-mono text-[11px] tracking-[.04em] text-accent">View details →</span>
                <span className="rounded-[6px] border border-lines bg-white px-2.5 py-1 text-[10px] font-mono text-muted hover:bg-lines/30 hover:border-rule">
                  👁 You're here
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

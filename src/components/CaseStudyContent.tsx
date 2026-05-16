"use client";

import { Project } from "@/types";
import { useEffect, useRef } from "react";
import Link from "next/link";

const GitHubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
  </svg>
);

export default function CaseStudyContent({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

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
      { rootMargin: "-40px 0px" }
    );
    ref.current.querySelectorAll(".rv").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto max-w-[1100px] px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="rv flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted mb-12">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
        <span>/</span>
        <span className="text-ink3">{project.title}</span>
      </nav>

      <article className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-0 rounded-2xl border border-rule overflow-hidden bg-white shadow-none transition-all duration-300">
        {/* Sidebar */}
        <aside className="border-r border-rule bg-white p-8 md:p-10 flex flex-col gap-8">
          <div className="rv">
            <p className="font-mono text-[10px] tracking-[.2em] text-muted uppercase mb-4">
              {project.visLabel}
            </p>
            <h1 className="font-playfair text-[32px] font-bold leading-none text-ink mb-2">
              {project.title}
            </h1>
            <p className="font-mono text-[11px] italic text-ink3 leading-relaxed">
              {project.sub}
            </p>
          </div>

          <div className="rv rv-2 space-y-2">
            <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-3">Stack</p>
            {project.tags.map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-[11px] font-mono text-mid">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {tag}
              </div>
            ))}
          </div>

          <div className="rv rv-3 flex flex-col gap-3 pt-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-rule font-mono text-[10px] uppercase tracking-widest text-muted hover:text-ink hover:border-ink3 transition-all"
              >
                <GitHubIcon /> View Source
              </a>
            )}
            {project.isLiveDemo && project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-accent text-white font-mono text-[10px] uppercase tracking-widest hover:bg-accent/90 transition-all shadow-md"
              >
                <ExternalLinkIcon /> Live Demo
              </a>
            )}
          </div>

          {project.languages && (
            <div className="rv rv-4 pt-6">
              <p className="font-mono text-[10px] tracking-widest text-muted uppercase mb-4">Languages</p>
              <div className="flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full bg-lines">
                {project.languages.map((lang) => (
                  <div 
                    key={lang.name} 
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {project.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 font-mono text-[9px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: lang.color }} />
                    {lang.name} {lang.percentage}%
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-12">
          <section className="rv">
            <h3 className="font-mono text-[10px] tracking-[.2em] text-accent uppercase mb-4">Overview</h3>
            <p className="text-[14px] leading-[1.8] text-mid">
              {project.overview || project.desc}
            </p>
          </section>

          {project.problemSolved && (
            <section className="rv rv-2">
              <h3 className="font-mono text-[10px] tracking-[.2em] text-accent uppercase mb-4">Problem Solved</h3>
              <div className="rounded-xl border-l-4 border-accent bg-lines/30 p-6">
                <p className="font-playfair italic text-[15px] text-ink3 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            </section>
          )}

          {project.features && (
            <section className="rv rv-3">
              <h3 className="font-mono text-[10px] tracking-[.2em] text-accent uppercase mb-6">Key Modules</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div key={feature.title} className="p-5 rounded-xl border border-rule bg-white hover:border-lines transition-colors">
                    <h4 className="text-[13px] font-bold text-ink mb-2">{feature.title}</h4>
                    <p className="text-[11.5px] leading-relaxed text-muted">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.architecture && (
            <section className="rv rv-4">
              <h3 className="font-mono text-[10px] tracking-[.2em] text-accent uppercase mb-4">Technical Architecture</h3>
              <p className="text-[14px] leading-[1.8] text-mid mb-6">
                {project.architecture}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.archTags?.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-md border border-rule bg-lines/20 font-mono text-[9px] text-ink3">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.designSystem && (
            <section className="rv rv-5">
              <h3 className="font-mono text-[10px] tracking-[.2em] text-accent uppercase mb-4">Design Language</h3>
              <p className="text-[14px] leading-[1.8] text-mid">
                {project.designSystem}
              </p>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}

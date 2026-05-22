"use client";

import Link from "next/link";
import { Project } from "@/types";

const GitHubIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isLarge = project.key === "portfolio";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex flex-col overflow-hidden rounded-[14px] border border-rule bg-white shadow-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:no-underline hover:shadow-[0_20px_48px_rgba(28,28,28,.1)] hover:border-lines ${
        isLarge ? "col-span-full" : ""
      }`}
    >
      {/* Visual banner */}
      <div className={`${project.bgClass} relative flex ${isLarge ? "h-[140px]" : "h-[180px]"} items-center justify-center overflow-hidden`}>
        <span className="absolute left-3 top-3 rounded-[20px] bg-black/30 px-3 py-1 text-[10px] font-mono tracking-[.06em] text-white/70 backdrop-blur-[4px] transition-opacity duration-300 group-hover:opacity-90">
          {project.visLabel}
        </span>
        <span className="relative z-10 text-[34px] font-playfair italic text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[4px] group-hover:scale-[1.02] [text-shadow:0_1px_16px_rgba(28,28,28,.25)]">
          {isLarge ? "Portfolio Site" : project.title.split(" ")[0]}
        </span>
        {project.yourehere && (
          <span className="absolute right-3 top-3 animate-blink font-vt323 text-[13px] tracking-[2px] text-white/60">
            ★ YOU ARE HERE ★
          </span>
        )}
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
          
          {project.github && (
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.github, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center gap-1.5 rounded-[6px] border border-lines bg-white px-2.5 py-1 text-[10px] font-mono text-muted transition-all duration-150 hover:border-accent hover:text-accent hover:bg-accent/5"
            >
              <GitHubIcon /> Source
            </div>
          )}
          {project.liveDemo && (
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveDemo, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center gap-1.5 rounded-[6px] bg-accent px-2.5 py-1 text-[10px] font-mono text-white transition-all duration-200 hover:bg-accent/90 shadow-sm hover:shadow-[0_2px_8px_rgba(26,107,154,0.25)]"
            >
              <ExternalLinkIcon /> Live
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

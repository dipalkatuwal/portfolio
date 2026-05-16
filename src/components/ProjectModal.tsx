"use client";

import { useEffect } from "react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <div
      className={`fixed inset-0 bg-[rgba(28,28,28,.6)] backdrop-blur-[6px] z-[100] flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 pointer-events-none ${
        project ? "opacity-100 pointer-events-all" : ""
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {project && (
        <div className="bg-white border border-rule rounded-[20px] max-w-[560px] w-full max-h-[90vh] overflow-y-auto relative translate-y-6 transition-transform duration-300 cubic-bezier(.22,1,.36,1)">
          {/* Visual header */}
          <div className={`${project.bgClass} relative flex h-[180px] items-center justify-center overflow-hidden rounded-t-[20px]`}>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/30 bg-black/40 text-white transition-all duration-150 hover:bg-black/70"
            >
              ✕
            </button>
            <span className="relative z-10 text-[34px] font-playfair italic text-white [text-shadow:0_1px_16px_rgba(28,28,28,.25)]">
              {project.title}
            </span>
            {project.yourehere && (
              <span className="absolute right-3 top-3 animate-blink font-vt323 text-[13px] tracking-[2px] text-white/60">
                ★ YOU ARE HERE ★
              </span>
            )}
          </div>

          {/* Body */}
          <div className="px-7 py-7">
            <div className="mb-1 text-[28px] font-playfair text-ink">{project.title}</div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[.06em] text-ink3">{project.sub}</div>
            <p className="mb-4 text-[13px] leading-[1.7] text-mid">{project.desc}</p>

            <ul className="mb-4 list-none">
              {project.details.map((detail, i) => (
                <li
                  key={i}
                  className={`relative pl-5 ${i < project.details.length - 1 ? "border-b border-lines pb-2.5 pt-2.5" : "pb-2.5 pt-2.5"} text-[12px] leading-[1.6] text-mid`}
                >
                  <span className="absolute left-0 top-2.5 text-[8px] text-muted">◆</span>
                  {detail}
                </li>
              ))}
            </ul>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-[6px] border border-rule bg-white px-2.5 py-1 text-[10px] font-mono text-ink3 hover:bg-lines/30 hover:border-rule">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[8px] border border-rule bg-transparent px-6 py-2.5 text-[12px] font-mono uppercase tracking-[.06em] text-ink3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  → GitHub
                </a>
              )}
              {project.yourehere && (
                <span className="inline-flex items-center gap-1 rounded-[6px] border border-lines bg-white px-2.5 py-1 text-[10px] font-mono text-muted hover:bg-lines/30 hover:border-rule">
                  👁 You're here
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

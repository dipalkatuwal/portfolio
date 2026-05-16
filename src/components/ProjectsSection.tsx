"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);

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

  const featuredProjects = PROJECTS.slice(0, 5);

  return (
    <section id="projects" className="border-t border-rule" ref={ref}>
      <div className="max-w-[1040px] mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-3">
          <p className="rv font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-muted">
            Projects
          </p>
          <Link 
            href="/projects" 
            className="rv font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-accent hover:underline transition-all"
          >
            See all projects →
          </Link>
        </div>

        <div className="mt-11 grid gap-[18px] sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.key} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

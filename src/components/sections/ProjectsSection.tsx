"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "../ui/ProjectCard";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ProjectsSection() {
  const ref = useScrollReveal();

  const featuredProjects = PROJECTS.slice(0, 5);

  return (
    <section id="projects"  ref={ref}>
      <div className="max-w-[1040px] mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-3">
          <p className="rv font-mono text-[13px] font-semibold uppercase tracking-[.2em] text-ink ">
            Projects
          </p>
          <Link
            href="/projects"
            className="rv font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-accent hover:underline transition-all flex-shrink-0"
          >
            See all projects →
          </Link>
        </div>

        <div className="mt-11 grid gap-[18px] sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <div key={project.key} className={`rv rv-${Math.min(i + 1, 5)}`}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

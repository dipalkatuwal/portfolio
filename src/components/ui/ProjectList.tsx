"use client";

import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const ref = useScrollReveal("0px 0px -40px 0px");

  return (
    <div ref={ref as any} className="grid gap-[18px] sm:grid-cols-2">
      {projects.map((project, i) => (
        <div key={project.key} className={`rv rv-${Math.min((i % 2) + 2, 5)}`}>
          <ProjectCard project={project} index={i} />
        </div>
      ))}
    </div>
  );
}

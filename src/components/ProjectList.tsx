"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }: { projects: Project[] }) {
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
      { rootMargin: "0px 0px -40px 0px" }
    );
    // Find all cards inside this container
    ref.current.querySelectorAll(".project-card-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-[18px] sm:grid-cols-2">
      {projects.map((project, i) => (
        <div key={project.key} className={`project-card-reveal rv rv-${(i % 2) + 2}`}>
          <ProjectCard project={project} index={i} />
        </div>
      ))}
    </div>
  );
}

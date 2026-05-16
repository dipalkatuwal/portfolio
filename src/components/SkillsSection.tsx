"use client";

import { useEffect, useRef } from "react";
import { SKILLS } from "@/lib/data";

const tagTypeClasses: Record<string, string> = {
  core: "text-accent border border-accent/20 bg-accent/5 hover:bg-accent/10 hover:border-accent/30",
  shipped: "text-ink3 border border-rule bg-white hover:bg-lines/50 hover:border-rule",
  comfortable: "text-muted border border-lines bg-white hover:bg-lines/30 hover:border-lines",
};

export default function SkillsSection() {
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

  return (
    <section id="skills" className="border-t border-rule" ref={ref}>
      <div className="max-w-[1040px] mx-auto px-6 py-20">
        <p className="rv font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-muted mb-3">
          Arsenals
        </p>

        <div className="rv rv-3 mt-11 overflow-hidden rounded-[20px] border border-rule bg-white">
          {SKILLS.map((row, i) => (
            <div key={row.label} className={`flex flex-col gap-9 sm:flex-row ${i < SKILLS.length - 1 ? "border-b border-lines" : ""} px-7 py-6`}>
              <div className="flex-shrink-0 sm:w-[140px] pt-1 font-mono text-[10px] uppercase tracking-[.12em] text-ink3">
                {row.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {row.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`inline-flex cursor-default rounded-[8px] border px-3 py-1.5 text-[11px] font-mono tracking-[.03em] transition-all duration-150 hover:border-accent hover:text-accent ${tagTypeClasses[tag.type]}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

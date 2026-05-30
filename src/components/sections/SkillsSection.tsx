"use client";

import { SKILLS } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

function SkillTag({ name, type }: { name: string; type: string }) {
  if (type === "highlight") {
    return (
      <span className="inline-flex items-center px-3 py-[6px] rounded-[7px] font-mono text-[12px] font-semibold border border-accent bg-accent text-white cursor-default transition-all hover:-translate-y-px hover:bg-accent/90">
        {name}
      </span>
    );
  }

  if (type === "projectwork") {
    return (
      <span className="inline-flex items-center px-3 py-[6px] rounded-[7px] font-mono text-[12px] border border-dashed border-rule bg-transparent text-ink3 cursor-default transition-all hover:-translate-y-px hover:border-ink/30 hover:text-ink">
        {name}
      </span>
    );
  }

  // type === "core"
  return (
    <span className="inline-flex items-center px-3 py-[6px] rounded-[7px] font-mono text-[12px] border border-rule bg-white text-ink3 cursor-default transition-all hover:-translate-y-px hover:border-ink/30 hover:text-ink">
      {name}
    </span>
  );
}

export default function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref}>
      <div className="max-w-[1040px] mx-auto px-6 py-20">
        <p className="rv font-mono text-[13px] font-semibold uppercase tracking-[.2em] text-ink mb-12 ">
          Tech Arsenal
        </p>

        <div className="rv rv-3 grid grid-cols-1 md:grid-cols-2 gap-px bg-lines border border-lines rounded-[16px] overflow-hidden">
          {SKILLS.map((row) => {
            const mainTags    = row.tags.filter((t) => t.type === "highlight" || t.type === "core");
            const projectTags = row.tags.filter((t) => t.type === "projectwork");

            return (
              <div
                key={row.label}
                className="bg-white px-7 py-7 transition-colors duration-150 hover:bg-bg/40"
              >
                {/* Category label */}
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[.14em] text-muted mb-4">
                  {row.label}
                </p>

                {/* Core + Highlight tags */}
                <div className="flex flex-wrap gap-1.5">
                  {mainTags.map((tag) => (
                    <SkillTag key={tag.name} name={tag.name} type={tag.type} />
                  ))}
                </div>

                {/* Project work divider + tags */}
                {projectTags.length > 0 && (
                  <>
                    <div className="flex items-center gap-2.5 my-4">
                      <div className="flex-1 h-px bg-lines" />
                      <span className="font-mono text-[9px] uppercase tracking-[.12em] text-muted/60">
                        project work
                      </span>
                      <div className="flex-1 h-px bg-lines" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {projectTags.map((tag) => (
                        <SkillTag key={tag.name} name={tag.name} type={tag.type} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

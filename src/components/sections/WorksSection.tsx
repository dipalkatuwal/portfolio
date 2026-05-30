"use client";

import { EXPERIENCE, EDUCATION } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function WorksSection() {
  const ref = useScrollReveal();

  return (
    <section id="works"  ref={ref}>
      <div className="max-w-[1040px] mx-auto px-6 py-20">
        <p className="rv font-mono text-[13px] font-semibold uppercase tracking-[.2em] text-ink mb-3 ">
          Profile Log
        </p>

        <div className="mt-11 grid gap-12 md:grid-cols-2">
          <div className="rv rv-2">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="mb-7">
                <div className="flex items-start justify-between gap-2.5 mb-2.5">
                  <div>
                    <div className="font-playfair text-[19px] text-ink">{exp.role}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[.06em] text-ink3">{exp.company}</div>
                  </div>
                  <span className="flex-shrink-0 rounded-[5px] border border-rule px-2.5 py-1 text-[10px] text-ink3">
                    {exp.year}
                  </span>
                </div>
                <ul className="list-none">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="relative border-b border-lines py-2 pl-6 pr-0 text-[14px] leading-[1.7] text-mid transition-all duration-200 hover:text-ink">
                      <span className="absolute left-0 top-2.5 text-[12px] text-accent">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rv rv-3">
            <div className="rounded-[14px] border border-rule border-l-[4px] border-l-accent bg-white p-6">
              <div className="font-playfair text-[18px] text-ink mb-1">{EDUCATION.degree}</div>
              <div className="mb-1 font-mono text-[11px] text-accent">{EDUCATION.institution}</div>
              <div className="mb-4 font-mono text-[10px] text-ink3">{EDUCATION.years}</div>

              <div className="mb-2 font-mono text-[9px] uppercase tracking-[.12em] text-ink3">Relevant Coursework</div>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {EDUCATION.core.map((tag) => (
                  <span key={tag} className="rounded-[6px] border border-rule bg-white px-2.5 py-1 text-[10px] font-mono text-ink3 hover:bg-lines/30 hover:border-rule">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="border-t border-rule pt-4 text-[13.5px] leading-[1.7] text-mid">
                {EDUCATION.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

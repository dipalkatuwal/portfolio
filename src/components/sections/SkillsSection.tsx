"use client";

import { useEffect, useRef } from "react";
import { SKILLS } from "@/lib/data";
import {
  Code2, FileCode2, Database, Layout, Activity, Atom, Server, Cpu, Globe,
  Brain, Layers, RefreshCcw, LineChart, Table, Grid3x3, Webhook, Lock,
  ShieldCheck, GitBranch, Triangle, Container, Repeat, Wind, Component,
  Move, Square, Terminal
} from "lucide-react";

const iconMap: Record<string, any> = {
  "TypeScript": Code2,
  "JavaScript (ES6+)": FileCode2,
  "Python": Terminal,
  "SQL": Database,
  "HTML/CSS": Layout,
  "Next.js": Activity,
  "React": Atom,
  "Node.js": Server,
  "Express": Cpu,
  "Django REST Framework": Globe,
  "TensorFlow": Brain,
  "Keras": Layers,
  "LSTM Neural Networks": RefreshCcw,
  "Scikit-learn": LineChart,
  "Pandas": Table,
  "NumPy": Grid3x3,
  "MongoDB": Database,
  "PostgreSQL": Database,
  "MySQL": Database,
  "REST APIs": Webhook,
  "JWT": Lock,
  "Zod": ShieldCheck,
  "Git": GitBranch,
  "Vercel": Triangle,
  "Docker": Container,
  "CI/CD": Repeat,
  "Tailwind CSS": Wind,
  "Shadcn UI": Component,
  "Framer Motion": Move,
  "Material UI": Square,
};

const tagClass = "text-ink3 border-rule bg-white hover:bg-lines/50 hover:border-ink/20 flex items-center gap-2";

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
                {row.tags.map((tag) => {
                  const Icon = iconMap[tag.name] || Terminal;
                  return (
                    <span
                      key={tag.name}
                      className={`inline-flex cursor-default rounded-[8px] border px-3 py-1.5 text-[11px] font-mono tracking-[.03em] transition-all duration-150 ${tagClass}`}
                    >
                      <Icon size={14} className="opacity-70" strokeWidth={2} />
                      {tag.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

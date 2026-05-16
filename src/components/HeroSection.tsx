"use client";

import { useState } from "react";
import Image from "next/image";
import dipalImage from "@/assets/dipal.jpg";

const socialLinks = [
  {
    href: "https://github.com/dipalkatuwal",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    name: "GitHub",
    handle: "@dipalkatuwal",
    external: true,
  },
  {
    href: "https://linkedin.com/in/dipalkatuwal",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    name: "LinkedIn",
    handle: "@dipalkatuwal",
    external: true,
  },
];

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dipalkatuwal07@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="hero-profile" className="relative overflow-hidden border-b border-rule bg-white">
      <div className="max-w-[1040px] mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start animate-fade-up">
          <div>
            <div className="relative mb-8 w-48 mx-auto md:w-full md:mx-0">
              <div className="w-full overflow-hidden aspect-square rounded-[28px] border border-lines bg-white shadow-[0_20px_45px_rgba(15,23,42,.07)]">
                <Image
                  src={dipalImage}
                  alt="Dipal Katuwal"
                  width={300}
                  height={300}
                  loading="eager"
                  className="w-full h-full object-cover object-top grayscale-[20%] contrast-[.95] transition duration-300"
                />
              </div>
              <div className="absolute -top-1 -left-1 w-4.5 h-4.5 border-t-2 border-l-2 border-accent rounded-tl-sm" />
              <div className="absolute bottom-3.5 -right-1 w-4.5 h-4.5 border-b-2 border-r-2 border-accent rounded-br-sm" />
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap bottom-[-14px] rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-emerald-700 shadow-[0_20px_45px_rgba(74,222,128,.08)]">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[10px] uppercase tracking-[.12em]">Open to work</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-[18px] border border-lines bg-white px-4 py-3 no-underline transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(15,23,42,.08)]"
                >
                  {social.icon}
                  <div className="flex-1 text-left">
                    <div className="text-sm text-ink font-semibold">{social.name}</div>
                    <div className="text-xs text-muted">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[28px] border border-lines bg-white p-10 shadow-[0_30px_85px_rgba(15,23,42,.08)] lg:max-w-[760px]">
            <div>
              <span className="inline-flex rounded-[8px] border border-[rgba(26,107,154,.3)] bg-[rgba(26,107,154,.1)] px-3 py-1.5 text-[10px] font-mono uppercase tracking-[.1em] text-accent">
                Full Stack Developer
              </span>
            </div>

            <p className="mb-5 border-l-4 border-lines pl-4 text-[22px] md:text-[24px] font-semibold leading-[1.4] text-ink max-w-[700px]">
              Hi, I'm Dipal Katuwal a full-stack developer focusing end-to-end web applications, ML-powered tools, and GenAI-integrated workflows.           </p>

            <div className="space-y-4 text-[14px] leading-[1.9] text-mid">
              <p>
                Proficient in JavaScript and Python across the full stack, with a strong focus on clean architecture and rapid iteration
                using modern AI tooling. Known for taking full ownership of features, collaborating effectively across teams, and
                consistently delivering under tight timelines.              </p>
              {/* <p>
                I&apos;ve shipped products like <span className="text-accent font-semibold">NepseSage</span> — a conversational AI platform making Nepal&apos;s stock market legible for retail investors — and <span className="text-accent font-semibold">PasalBot</span>, a commerce system where you order entirely through natural language.
              </p> */}
              <p>Outside of shipping code, I go deep on systems design, mathematics, and obsessing over how complex tools can be made simpler.</p>
            </div>

            <div className="mt-6 text-[13px] text-mid">
              Let&apos;s connect <span className="text-muted">and build something meaningful together or just a good conversation about tech.</span>
            </div>

            <div className="mt-8 flex flex-col gap-3.5 border-t border-lines pt-6 sm:flex-row sm:items-center sm:flex-wrap">
              <span className="font-mono text-[10px] uppercase tracking-[.1em] text-muted">Reach me →</span>
              <span className="font-mono text-[12px] text-ink3">dipalkatuwal07@gmail.com</span>

              <button
                onClick={copyEmail}
                className={`inline-flex items-center gap-2 rounded-[10px] border px-4 py-2 text-[11px] uppercase tracking-[.06em] font-mono transition duration-150 ${copied ? "border-accent text-accent bg-emerald-50" : "border border-slate-300 bg-white text-ink hover:bg-slate-50"}`}
              >
                {copied ? (
                  <>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    Copy
                  </>
                )}
              </button>

              <a
                href="mailto:dipalkatuwal07@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-[10px] bg-ink px-5 py-2.5 text-[12px] uppercase tracking-[.06em] text-white transition hover:bg-accent"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

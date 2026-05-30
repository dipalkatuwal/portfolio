"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { id: "hero-profile", label: "About",    href: "/#hero-profile" },
  { id: "skills",       label: "Skills",   href: "/#skills"       },
  { id: "projects",     label: "Projects", href: "/#projects"     },
  { id: "works",        label: "Work",     href: "/#works"        },
  { id: "footer",       label: "Contact",  href: "/#footer"       },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId,   setActiveId]   = useState("hero-profile");
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 300;
      if (nearBottom) { setActiveId("footer"); return; }
      let current = navLinks[0].id;
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const activeLink = navLinks.find((l) => l.id === activeId);

  return (
    <>
      {/* ── Desktop nav (unchanged) ── */}
      <nav
        className={`sticky top-0 z-50 hidden md:block transition-all duration-300 ${
          scrolled ? "bg-white/96 backdrop-blur-lg" : "bg-white"
        }`}
        style={{ borderBottom: "1px solid #e4e0d8" }}
      >
        <div className="max-w-[1040px] mx-auto px-6 h-14 relative flex items-center justify-between">
          <Link href="/" className="underline font-playfair italic text-[18px] text-ink leading-none tracking-tight flex-shrink-0">
  Dipal <em className="text-accent">Katuwal.</em>
</Link>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a key={link.id} href={link.href} className="group relative px-6 h-14 flex items-center">
                  <span className={`font-mono text-[10px] uppercase tracking-[.18em] transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-muted group-hover:text-ink3"
                  }`}>
                    {link.label}
                  </span>
                  <span className={`absolute bottom-0 left-6 right-6 h-[2px] bg-accent transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`} style={{ transformOrigin: "left" }} />
                </a>
              );
            })}
          </div>
          <div className="flex-shrink-0 invisible font-playfair italic text-[18px]">Dipal Katuwal.</div>
        </div>
      </nav>

      {/* ── Mobile: sticky top bar ── */}
      <nav
        className={`sticky top-0 z-50 md:hidden transition-all duration-300 ${
          scrolled ? "bg-white/96 backdrop-blur-lg" : "bg-white"
        }`}
        style={{ borderBottom: "1px solid #e4e0d8" }}
      >
        <div className="h-13 px-5 flex items-center justify-between" style={{ height: 52 }}>

          {/* Logo */}
          <Link href="/" className="underline font-playfair italic text-[17px] text-ink leading-none tracking-tight">
  Dipal <em className=" text-accent">Katuwal.</em>
</Link>

          {/* Right side: active section + hamburger */}
          <div className="flex items-center gap-3">
            {/* Current section indicator */}
            <span className="font-mono text-[9px] uppercase tracking-[.18em] text-muted">
              {activeLink?.label ?? ""}
            </span>

            {/* Hamburger / close */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex flex-col gap-[5px] p-1 items-end"
            >
              <span className={`block h-px bg-ink rounded-sm transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
                mobileOpen ? "w-5 translate-y-[6px] rotate-45" : "w-5"
              }`} />
              <span className={`block h-px bg-ink rounded-sm transition-all duration-200 ${
                mobileOpen ? "w-0 opacity-0" : "w-3.5"
              }`} />
              <span className={`block h-px bg-ink rounded-sm transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
                mobileOpen ? "w-5 -translate-y-[6px] -rotate-45" : "w-5"
              }`} />
            </button>
          </div>
        </div>

      </nav>

      {/* ── Mobile: right-side drawer ── */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-64 bg-white flex flex-col md:hidden transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ borderLeft: "1px solid #e4e0d8" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5" style={{ height: 52, borderBottom: "1px solid #e4e0d8" }}>
          <span className="font-mono text-[9px] uppercase tracking-[.18em] text-muted">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex flex-col gap-[5px] p-1 items-end"
          >
            <span className="block w-5 h-px bg-ink rounded-sm transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] translate-y-[6px] rotate-45" />
            <span className="block w-5 h-px bg-ink rounded-sm transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] -translate-y-[2px] -rotate-45" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col px-5 py-4">
          {navLinks.map((link, i) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-baseline gap-3 py-3 transition-all duration-500 ${
                  i < navLinks.length - 1 ? "border-b" : ""
                } ${mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                style={{
                  borderColor: "#e4e0d8",
                  transitionDelay: mobileOpen ? `${80 + i * 50}ms` : "0ms",
                }}
              >
                <span className="font-mono text-[9px] text-muted/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-playfair text-[22px] leading-none tracking-tight transition-colors ${
                  isActive ? "italic text-accent" : "text-ink"
                }`}>
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Social links */}
        <div
          className={`px-5 py-5 flex gap-5 transition-all duration-500 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ borderTop: "1px solid #e4e0d8", transitionDelay: mobileOpen ? "360ms" : "0ms" }}
        >
          <a href="https://github.com/dipalkatuwal"      target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] uppercase tracking-[.14em] text-muted hover:text-accent transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/dipalkatuwal" target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] uppercase tracking-[.14em] text-muted hover:text-accent transition-colors">LinkedIn</a>
          <a href="/resume.pdf"                           target="_blank" className="font-mono text-[9px] uppercase tracking-[.14em] text-muted hover:text-accent transition-colors">Resume</a>
        </div>
      </div>

      {/* ── Backdrop ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-ink/10 backdrop-blur-[2px] transition-opacity duration-400 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}

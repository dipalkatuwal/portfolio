"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const navLinks = [
    { id: "about", label: "About", href: "/#hero-profile" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "projects", label: "Projects", href: "/#projects" },
    { id: "works", label: "Work", href: "/#works" },
    { id: "contact", label: "Contact", href: "#footer" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rule h-[50px] flex items-center">
        <div className="max-w-[1040px] mx-auto px-6 w-full flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="underline font-playfair italic text-lg text-ink tracking-tight"
          >
            Dipal <em className="text-accent">Katuwal.</em>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="inline-block px-3 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-widest text-ink3 hover:text-ink hover:bg-lines transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
            className="md:hidden bg-transparent border border-rule px-2.5 py-1 rounded-lg text-ink3 hover:bg-lines transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest mr-2">Menu</span>
            <span className="text-md">☰</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-ink/40 backdrop-blur-md transition-opacity duration-500 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <aside
        className={`fixed top-0 right-0 z-[101] h-full w-[300px] bg-[#fafaf9] shadow-[0_0_80px_rgba(0,0,0,0.15)] transition-all duration-300 md:hidden ${mobileOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-4 pointer-events-none"
          }`}
      >
        {/* Scrollable Container */}
        <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
          {/* Header */}
          <div className="flex justify-between items-center p-8 sticky top-0 bg-[#fafaf9]/80 backdrop-blur-md z-10">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-[.3em] text-muted mb-1">Navigation</span>
              <span className="font-playfair italic text-xl text-ink">Menu.</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="h-11 w-11 flex items-center justify-center rounded-full border border-rule bg-white text-ink3 hover:text-accent hover:border-accent transition-all duration-300 group"
            >
              <span className="transition-transform group-hover:rotate-90">✕</span>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col justify-center px-8 py-4 min-h-[300px]">
            {navLinks.map((link, i) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center justify-between py-5 border-b border-rule/60 transition-all duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-accent mb-1 opacity-0 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <span className="font-playfair text-[24px] text-ink3 group-hover:text-ink transition-colors">{link.label}</span>
                </div>
                <span className="text-xl text-rule group-hover:text-accent group-hover:translate-x-1 transition-all">→</span>
              </Link>
            ))}
          </nav>


          {/* Footer */}
          <div className="mt-auto p-8 border-t border-rule bg-lines/10">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/dipalkatuwal" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-ink3 hover:text-accent transition-colors">LinkedIn</a>
                <a href="https://github.com/dipalkatuwal" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-ink3 hover:text-accent transition-colors">GitHub</a>
                <a href="/resume.pdf" target="_blank" className="font-mono text-[10px] text-ink3 hover:text-accent transition-colors">Resume</a>
              </div>
              <p className="font-mono text-[9px] text-muted uppercase tracking-[.2em]">
                © 2026 Dipal Katuwal
              </p>
            </div>
          </div>
        </div>
      </aside>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e5e5;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

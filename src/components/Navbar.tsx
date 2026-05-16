"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { id: "about", label: "About", href: "#hero-profile" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "works", label: "Work", href: "#works" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rule h-[70px] flex items-center">
      <div className="max-w-[1040px] mx-auto px-6 w-full flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#hero-profile"
          className="font-playfair italic text-lg text-ink tracking-tight"
        >
          Dipal <em className="text-accent">Katuwal.</em>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="inline-block px-3 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-widest text-ink3 hover:text-ink hover:bg-lines transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:dipalkatuwal07@gmail.com"
            className="inline-flex h-9 items-center justify-center rounded-full bg-ink px-6 font-mono text-[10px] uppercase tracking-widest text-white transition hover:bg-accent"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
          className="md:hidden bg-transparent border border-rule px-2 py-1.5 rounded-md text-ink3"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 p-4 bg-white border-b border-rule shadow-xl flex flex-col gap-2 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg font-mono text-[11px] uppercase tracking-widest text-ink3 hover:text-ink hover:bg-lines transition"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-lines my-1" />
            <a
              href="mailto:dipalkatuwal07@gmail.com"
              className="block px-4 py-3.5 rounded-lg text-center font-mono text-[11px] uppercase tracking-widest text-white bg-ink hover:bg-accent transition"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

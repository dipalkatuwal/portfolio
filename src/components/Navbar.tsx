"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rule">
      <div className="max-w-[1040px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#hero-profile"
          className="font-playfair italic text-lg text-ink tracking-tight"
        >
          Dipal <em className="text-accent">Katuwal.</em>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="inline-block px-3 py-1.5 rounded-md font-mono text-xs uppercase tracking-wide text-ink3 hover:text-ink hover:bg-lines transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

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
          <div className="absolute top-full right-6 mt-2 flex flex-col gap-1 p-2 min-w-[180px] bg-white border border-rule rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg font-mono text-xs uppercase tracking-wide text-ink3 hover:text-ink hover:bg-lines transition"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-lines my-1" />
            <a
              href="mailto:dipalkatuwal07@gmail.com"
              className="block px-3 py-2 rounded-lg text-center font-mono text-xs uppercase tracking-wide text-white bg-ink hover:bg-accent transition"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

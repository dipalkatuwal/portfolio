"use client";

import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dipalkatuwal07@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer id="footer" className="bg-white py-20 px-6">
      <div className="max-w-[1040px] mx-auto text-center">
        {/* Contact Section */}
        <div className="mb-20">
          <h2 className="font-playfair italic text-[42px] text-ink mb-6">
            Let&apos;s connect.
          </h2>
          <p className="font-mono text-[14.5px] text-muted max-w-[500px] mx-auto leading-relaxed mb-10">
            Build something meaningful together or just a good conversation about tech.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[.2em] text-accent">Reach me →</span>
              <div className="flex items-center gap-4 p-2 pl-6 rounded-full border border-rule bg-lines/5">
                <span className="font-mono text-[15px] text-ink">{ "dipalkatuwal07@gmail.com" }</span>
                <button
                  onClick={copyEmail}
                  className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-[11px] uppercase tracking-[.06em] font-mono transition-all duration-300 ${
                    copied 
                      ? "bg-emerald-500 text-white" 
                      : "bg-accent text-white hover:bg-ink"
                  }`}
                >
                  {copied ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <a 
              href="mailto:dipalkatuwal07@gmail.com"
              className="font-mono text-[11px] uppercase tracking-[.2em] text-ink3 hover:text-ink border-b border-ink/20 hover:border-ink transition-all"
            >
              Or send a message directly
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-rule/60 pt-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-playfair italic text-xl text-ink">Dipal Katuwal.</span>
            <p className="font-mono text-[9px] text-muted uppercase tracking-widest">
              Full Stack Developer & AI Explorer
            </p>
          </div>

          <div className="flex gap-8">
            <a href="https://github.com/dipalkatuwal" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-ink3 hover:text-accent transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/dipalkatuwal" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-ink3 hover:text-accent transition-colors">LinkedIn</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-mono text-[10px] text-ink3 uppercase tracking-[.1em]">© 2026</p>
            <p className="font-mono text-[9px] text-muted uppercase tracking-[.2em]">Designed with intention.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

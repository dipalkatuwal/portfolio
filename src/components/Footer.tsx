export default function Footer() {
  return (
    <footer className="text-center border-t border-lines px-4 py-6">
      <div className="mb-1 text-[13px] tracking-[1px]">★ Dipal Katuwal ★</div>
      <div className="mb-1 text-[13px] tracking-[1px]">
        <a href="mailto:dipalkatuwal07@gmail.com" className="text-accent">dipalkatuwal07@gmail.com</a>
        {" | "}
        <a href="https://github.com/dipalkatuwal" target="_blank" rel="noopener noreferrer" className="text-accent">GitHub</a>
        {" | "}
        <a href="https://linkedin.com/in/dipalkatuwal" target="_blank" rel="noopener noreferrer" className="text-accent">LinkedIn</a>
      </div>
      <div className="mt-2 text-[12px] text-ink3">Made with ❤️ + ☕</div>
      <div className="mt-2 font-vt323 text-[15px] tracking-[1px] text-muted">© 2026 Dipal Katuwal. All rights reserved.</div>
    </footer>
  );
}

"use client";

import { useEffect, useRef, RefObject } from "react";

/**
 * Attach to a container element. Every child with class "rv" inside it
 * will animate in via IntersectionObserver (one-shot).
 */
export function useScrollReveal(
  rootMargin = "-60px 0px -40px 0px"
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin }
    );

    el.querySelectorAll(".rv").forEach((child) => observer.observe(child));
    if (el.classList.contains("rv")) observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin]);

  return ref as RefObject<HTMLElement>;
}

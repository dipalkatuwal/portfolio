"use client";

import { useEffect, useRef, RefObject } from "react";

export function useScrollReveal(): RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null);

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
      { rootMargin: "-60px 0px -40px 0px" }
    );

    const rvElements = el.querySelectorAll(".rv");
    rvElements.forEach((el) => observer.observe(el));

    // Also observe the container itself if it has rv class
    if (el.classList.contains("rv")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

// Global scroll reveal setup component
export function useGlobalScrollReveal() {
  useEffect(() => {
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

    document.querySelectorAll(".rv").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

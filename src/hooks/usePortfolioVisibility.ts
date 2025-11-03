"use client";
import { useState, useEffect, useRef } from "react";

export function usePortfolioVisibility() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          } else {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all sections after component mounts
    setTimeout(() => {
      // Observe both [data-section] and [id^='company-'] and [id^='role-'] elements
      const sections = [
        ...Array.from(document.querySelectorAll("[data-section]")),
        ...Array.from(document.querySelectorAll('[id^="company-"]')),
        ...Array.from(document.querySelectorAll('[id^="role-"]')),
      ];
      sections.forEach((section) => {
        if (observerRef.current) {
          observerRef.current.observe(section);
        }
      });
    }, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return { isVisible, visibleSections, observerRef };
}

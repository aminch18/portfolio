"use client";
import { useState, useEffect, useRef } from "react";

export function usePortfolioVisibility() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    // Use more aggressive settings on mobile for better visibility detection
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const threshold = isMobile ? 0.1 : 0.2;
    const rootMargin = isMobile ? "0px 0px -50px 0px" : "0px 0px -100px 0px";
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(sectionId);
              
              // If a company card is visible, keep the parent journey section visible
              if (sectionId.startsWith('company-')) {
                newSet.add('journey');
              }
              // If a role card is visible, keep its parent company visible
              if (sectionId.startsWith('role-')) {
                const companyIndex = sectionId.split('-')[1];
                newSet.add(`company-${companyIndex}`);
              }
              
              return newSet;
            });
          } else {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              
              // Only remove journey section if no company cards are visible
              if (sectionId === 'journey') {
                const hasVisibleCompany = Array.from(newSet).some(id => id.startsWith('company-'));
                if (!hasVisibleCompany) {
                  newSet.delete(sectionId);
                }
              } else {
                newSet.delete(sectionId);
              }
              
              return newSet;
            });
          }
        });
      },
      { threshold, rootMargin }
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

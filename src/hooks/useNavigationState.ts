"use client";
import { useState, useEffect } from "react";

export function useNavigationState() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuPosition, setMenuPosition] = useState<"top" | "bottom">("top");
  const [activeSection, setActiveSection] = useState<string>("home");

  // Magic line menu scroll logic
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Animate menu to bottom if scrolled down > 100px, else top
      setMenuPosition(currentScrollY > 100 ? "bottom" : "top");
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section tracking for active menu item
  useEffect(() => {
    const sectionIds = ["home", "journey", "education", "projects"];
    const handleSectionScroll = () => {
      let found = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  // Detect scroll for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, menuPosition, activeSection };
}

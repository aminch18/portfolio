import React from "react";

interface FloatingNavigationProps {
  menuPosition: "top" | "bottom";
  activeSection: string;
}

export function FloatingNavigation({ menuPosition, activeSection }: FloatingNavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "journey", label: "Journey" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 sm:gap-6 md:gap-8 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl transition-all duration-500
        ${menuPosition === "top" ? "top-4 sm:top-6" : "bottom-4 sm:bottom-6"}
      `}
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-primary)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full transition-all duration-300 ${
            activeSection === item.id
              ? "bg-[var(--bg-secondary)] text-[var(--accent-primary)] shadow-md"
              : "text-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

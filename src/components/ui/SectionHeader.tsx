import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  isVisible: boolean;
}

export function SectionHeader({ title, description, isVisible }: SectionHeaderProps) {
  return (
    <div
      className={`text-center mb-16 transform transition-all duration-1000 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--accent-primary)' }}>
        {title}
      </h2>
      <p className="text-xl text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}

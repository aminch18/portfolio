import React from "react";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  logo: string;
  isVisible: boolean;
  index: number;
}

export function EducationCard({ 
  degree, 
  institution, 
  period, 
  description, 
  logo, 
  isVisible, 
  index 
}: EducationCardProps) {
  return (
    <div
      className={`card backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 relative ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      style={{ animationDelay: `${index * 200}ms`, zIndex: 20 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">{logo}</div>
        <div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            {degree}
          </h3>
          <h4 className="text-lg text-[var(--accent-primary)]">{institution}</h4>
          <p className="text-[var(--text-secondary)]">{period}</p>
        </div>
      </div>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

import React from "react";

interface LanguageCircleProps {
  name: string;
  level: number;
  description: string;
  isVisible: boolean;
  index: number;
}

export function LanguageCircle({ name, level, description, isVisible, index }: LanguageCircleProps) {
  return (
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-3">
        <svg
          className="w-20 h-20 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="lang-track"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={
              typeof window !== 'undefined' && window.innerWidth <= 500
                ? `${2 * Math.PI * 40 * (1 - level / 100)}`
                : isVisible
                  ? `${2 * Math.PI * 40 * (1 - level / 100)}`
                  : `${2 * Math.PI * 40}`
            }
            className="lang-fill transition-all duration-1500"
            style={{ transitionDelay: `${index * 200}ms` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-[var(--text-primary)]">
            {level}%
          </span>
        </div>
      </div>
      <h4 className="text-lg font-semibold text-[var(--text-primary)]">
        {name}
      </h4>
      <p className="text-sm text-[var(--text-secondary)]">{description}</p>
    </div>
  );
}

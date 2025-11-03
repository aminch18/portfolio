import React from "react";
import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  category: string;
  items: { name: string; level: number }[];
  icon: LucideIcon;
  color: string;
  isVisible: boolean;
  index: number;
}

export function SkillCategory({ 
  category, 
  items, 
  icon: Icon, 
  color, 
  isVisible, 
  index 
}: SkillCategoryProps) {
  return (
    <div
      className={`card backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-1000 hover:scale-105 ${
        typeof window !== 'undefined' && window.innerWidth <= 500
          ? "translate-y-0 opacity-100"
          : (isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-4`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
        {category}
      </h3>

      <div className="space-y-3">
        {items.map((skill, idx) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                {skill.name}
              </span>
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                {skill.level}%
              </span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width:
                    typeof window !== 'undefined' && window.innerWidth <= 500
                      ? `${skill.level}%`
                      : isVisible
                        ? `${skill.level}%`
                        : "0%",
                  transitionDelay: `${index * 200 + idx * 100}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

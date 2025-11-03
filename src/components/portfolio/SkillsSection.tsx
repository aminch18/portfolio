import React from "react";
import { Languages } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { SkillCategory } from "./SkillCategory";
import { LanguageCircle } from "./LanguageCircle";
import { skills, languages } from "../../data/profileData";

interface SkillsSectionProps {
  isVisible: (id: string) => boolean;
}

export function SkillsSection({ isVisible }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="relative py-20 px-6"
      data-section="skills"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Skills & Expertise"
          description="Technical proficiency across the full stack"
          isVisible={isVisible("skills")}
        />

        {/* Technical Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 min-h-0 overflow-visible">
          {skills.map((skillGroup, index) => (
            <SkillCategory
              key={index}
              category={skillGroup.category}
              items={skillGroup.items}
              icon={skillGroup.icon}
              color={skillGroup.color}
              isVisible={isVisible("skills")}
              index={index}
            />
          ))}
        </div>

        {/* Languages */}
        <div
          className={`card backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-1000 ${
            typeof window !== 'undefined' && window.innerWidth <= 500
              ? "translate-y-0 opacity-100"
              : (isVisible("skills") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-primary)' }}>
              <Languages className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">Languages</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <LanguageCircle
                key={lang.name}
                name={lang.name}
                level={lang.level}
                description={lang.description}
                isVisible={isVisible("skills")}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

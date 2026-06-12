"use client";
import React from "react";
import { Languages } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { TechRadar } from "./TechRadar";
import { LanguageCircle } from "./LanguageCircle";
import { languages } from "../../data/profileData";

interface SkillsSectionProps {
  isVisible: (id: string) => boolean;
}

export function SkillsSection({ isVisible }: SkillsSectionProps) {
  return (
    <section id="skills" className="relative py-20 px-6" data-section="skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Skills & Expertise"
          description="A tech radar — closer to the center means deeper mastery"
          isVisible={isVisible("skills")}
        />

        {/* Tech Radar */}
        <div className="card rounded-2xl p-6 md:p-10 mb-16">
          <TechRadar isVisible={isVisible("skills")} />
        </div>

        {/* Languages */}
        <div
          className={`card rounded-2xl p-8 transform transition-all duration-1000 ${
            isVisible("skills") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center accent-bg">
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

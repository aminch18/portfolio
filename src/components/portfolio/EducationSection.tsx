import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { EducationCard } from "./EducationCard";
import { education } from "../../data/profileData";

interface EducationSectionProps {
  isVisible: (id: string) => boolean;
}

export function EducationSection({ isVisible }: EducationSectionProps) {
  return (
    <section
      id="education"
      className="relative py-20 px-6 bg-[var(--bg-secondary)]/30 mt-32"
      data-section="education"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Education"
          description="Academic foundation and continuous learning"
          isVisible={isVisible("education")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              description={edu.description}
              logo={edu.logo}
              isVisible={isVisible("education")}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

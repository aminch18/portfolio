import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/profileData";

interface ProjectsSectionProps {
  isVisible: (id: string) => boolean;
}

export function ProjectsSection({ isVisible }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="relative py-20 px-6"
      data-section="projects"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          description="Building scalable systems and innovative solutions"
          isVisible={isVisible("projects")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible("projects")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

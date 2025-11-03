import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown, CheckCircle } from "lucide-react";
import { Project } from "../../data/profileData";

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

export function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    completed: "#10b981",
    "in-progress": "#f59e0b",
    planned: "#6366f1"
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned"
  };

  return (
    <div
      className={`card backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-1000 relative ${
        isExpanded ? "" : "hover:scale-105 cursor-pointer"
      } ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      style={{ animationDelay: `${index * 200}ms`, zIndex: 20 }}
      onClick={() => !isExpanded && setIsExpanded(true)}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-2 py-1 text-xs font-semibold rounded-full"
                style={{
                  backgroundColor: `${statusColors[project.status]}20`,
                  color: statusColors[project.status]
                }}
              >
                {statusLabels[project.status]}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:scale-110 transition-transform"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:scale-110 transition-transform"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-[var(--text-secondary)] mb-4">
          {isExpanded ? project.longDescription : project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      {/* Highlights - Only show when expanded */}
      {isExpanded && (
        <div className="space-y-2 mb-4 mt-4">
          <h4 className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
            Key Highlights
          </h4>
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                {highlight}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Expand/Collapse button */}
      {!isExpanded && (
        <button
          className="text-xs flex items-center gap-1 hover:underline mt-2"
          style={{ color: 'var(--accent-primary)' }}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(true);
          }}
        >
          View details
          <ChevronDown className="w-3 h-3" />
        </button>
      )}
      
      {isExpanded && (
        <button
          className="text-xs flex items-center gap-1 hover:underline mt-2"
          style={{ color: 'var(--accent-primary)' }}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(false);
          }}
        >
          Show less
          <ChevronDown className="w-3 h-3 transform rotate-180" />
        </button>
      )}
    </div>
  );
}

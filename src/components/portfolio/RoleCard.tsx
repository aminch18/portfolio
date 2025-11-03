import React, { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import { Role } from "../../data/profileData";

interface RoleCardProps {
  role: Role;
  roleIndex: number;
  roleDelay: string;
  roleId: string;
  isLastRole: boolean;
  variant?: "mobile" | "desktop";
}

export function RoleCard({ 
  role, 
  roleIndex, 
  roleDelay, 
  roleId, 
  isLastRole,
  variant = "mobile"
}: RoleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (variant === "mobile") {
    return (
      <div
        className={`flex items-start mb-12 ${isLastRole ? 'mb-32 sm:mb-40 md:mb-56 lg:mb-20 xl:mb-12' : ''}`}
        id={roleId}
        data-section={roleId}
      >
        {/* Timeline Dot */}
        <div className="flex flex-col items-center mr-4">
          <div className="w-4 h-4 rounded-full flex items-center justify-center relative" style={{ background: 'var(--accent-primary)' }}>
            <div
              className="absolute left-1/2 top-1/2 w-2 h-2 bg-white rounded-full"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        </div>
        {/* Role Card */}
        <div className="flex-1">
          <div
            className={`card backdrop-blur-sm rounded-xl p-4 transform transition-all duration-500 ${isExpanded ? '' : 'hover:scale-105 cursor-pointer'} translate-x-0 opacity-100`}
            style={{ animationDelay: roleDelay }}
            onClick={() => !isExpanded && setIsExpanded(true)}
          >
            <div className="mb-3">
              <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--accent-primary)' }}>
                {role.title}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {role.period}
              </p>
            </div>
            <div className="space-y-2 mb-4">
              {(isExpanded ? role.achievements : role.achievements.slice(0, 3))
                .map((achievement, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                      {achievement}
                    </span>
                  </div>
                ))}
              {!isExpanded && role.achievements.length > 3 && (
                <button 
                  className="text-xs pl-7 flex items-center gap-1 hover:underline"
                  style={{ color: 'var(--accent-primary)' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(true);
                  }}
                >
                  +{role.achievements.length - 3} more achievements
                  <ChevronDown className="w-3 h-3" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              {(isExpanded ? role.technologies : role.technologies.slice(0, 6))
                .map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              {!isExpanded && role.technologies.length > 6 && (
                <span className="px-2 py-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  +{role.technologies.length - 6} more
                </span>
              )}
            </div>
            {isExpanded && (
              <button
                className="mt-4 text-xs flex items-center gap-1 hover:underline"
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
        </div>
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="w-full lg:w-[28rem] lg:max-w-lg">
      <div
        className={`card backdrop-blur-sm rounded-xl p-4 lg:p-6 transform transition-all duration-500 ${isExpanded ? '' : 'hover:scale-105 cursor-pointer'} translate-x-0 opacity-100`}
        style={{ animationDelay: roleDelay }}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <div className="mb-3">
          <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--accent-primary)' }}>
            {role.title}
          </h4>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {role.period}
          </p>
        </div>
        <div className="space-y-2 mb-4">
          {(isExpanded ? role.achievements : role.achievements.slice(0, 3))
            .map((achievement, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                  {achievement}
                </span>
              </div>
            ))}
          {!isExpanded && role.achievements.length > 3 && (
            <button 
              className="text-xs pl-7 flex items-center gap-1 hover:underline"
              style={{ color: 'var(--accent-primary)' }}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
            >
              +{role.achievements.length - 3} more achievements
              <ChevronDown className="w-3 h-3" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {(isExpanded ? role.technologies : role.technologies.slice(0, 6))
            .map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          {!isExpanded && role.technologies.length > 6 && (
            <span className="px-2 py-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
              +{role.technologies.length - 6} more
            </span>
          )}
        </div>
        {isExpanded && (
          <button
            className="mt-4 text-xs flex items-center gap-1 hover:underline"
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
    </div>
  );
}

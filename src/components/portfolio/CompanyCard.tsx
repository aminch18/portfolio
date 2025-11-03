import React from "react";
import { Calendar, MapPin, Users, LucideIcon } from "lucide-react";
import { RoleCard } from "./RoleCard";
import { Company } from "../../data/profileData";

interface CompanyCardProps {
  company: Company;
  index: number;
  isExpanded: boolean;
  isVisible: boolean;
  toggleCompany: (index: number) => void;
}

export function CompanyCard({ 
  company, 
  index, 
  isExpanded, 
  isVisible, 
  toggleCompany 
}: CompanyCardProps) {
  const Icon = company.icon as LucideIcon;
  const isLeft = company.side === "left";
  const delay = `${index * 300}ms`;

  return (
    <div className="relative mb-12 lg:mb-20">
      {/* Company Card Container */}
      <div
        className={`relative flex flex-col lg:flex-row ${
          isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center lg:items-start`}
        id={`company-${index}`}
        data-section={`company-${index}`}
      >
        {/* Timeline Dot - only on desktop */}
        <div className="hidden lg:flex absolute left-1/2 top-0 transform -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-30 transition-all duration-1000" style={{ background: 'var(--accent-primary)' }}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Company Card */}
        <div
          className={`w-full lg:w-5/12 ${
            isLeft ? "lg:pr-8" : "lg:pl-8"
          } px-2 lg:px-0`}
        >
          <div
            className={`card backdrop-blur-sm rounded-2xl p-4 lg:p-6 transform transition-all duration-1000 cursor-pointer relative ${
              isExpanded ? "" : "hover:scale-105"
            } ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ animationDelay: delay, zIndex: 20 }}
            onClick={() => toggleCompany(index)}
          >
            <div className="mb-4">
              <div className="flex items-center gap-4 mb-3">
                {/* Company Logo */}
                <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                  <img
                    src={company.companyLogo}
                    alt={`${company.company} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class='text-xs font-bold text-slate-800'>${company.companyFallback}</span>`;
                        parent.className =
                          "w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0";
                      }
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {company.company}
                  </h3>
                  <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {company.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {company.location}
                    </div>
                  </div>
                </div>
                {/* Expand/Collapse Icon */}
                <div
                  className={`transform transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {company.description}
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <Users className="w-4 h-4" />
              <span>
                {company.roles.length} position
                {company.roles.length > 1 ? "s" : ""}
              </span>
              <span style={{ color: 'var(--accent-primary)' }}>
                • Click to {isExpanded ? "collapse" : "expand"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Roles Section - Expanded View */}
      {isExpanded && (
        <>
          {/* Mobile version */}
          <div className="block lg:hidden mt-8 px-2">
            <div className="space-y-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5" style={{ background: 'var(--accent-primary)' }}></div>
              {company.roles.map((role, roleIndex) => {
                const roleDelay = `${(roleIndex + 1) * 200}ms`;
                const roleId = `role-${index}-${roleIndex}`;
                const isLastRole = roleIndex === company.roles.length - 1;
                return (
                  <RoleCard
                    key={roleIndex}
                    role={role}
                    roleIndex={roleIndex}
                    roleDelay={roleDelay}
                    roleId={roleId}
                    isLastRole={isLastRole}
                    variant="mobile"
                  />
                );
              })}
            </div>
          </div>
          
          {/* Desktop version */}
          <div className="hidden lg:block mt-12">
            {company.roles.map((role, roleIndex) => {
              const roleDelay = `${(roleIndex + 1) * 200}ms`;
              const roleId = `role-${index}-${roleIndex}`;
              return (
                <div
                  key={roleIndex}
                  id={roleId}
                  data-section={roleId}
                  className={`relative flex flex-col lg:flex-row ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center lg:items-start mb-12`}
                >
                  {/* Role Timeline Dot */}
                  <div
                    className="hidden lg:flex absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full items-center justify-center z-10 transition-all duration-500"
                    style={{
                      animationDelay: roleDelay,
                      background: 'var(--accent-primary)'
                    }}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 w-2 h-2 bg-white rounded-full"
                      style={{ transform: "translate(-50%, -50%)" }}
                    ></div>
                  </div>
                  
                  {/* Role Card positioned on the side */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      isLeft ? "lg:pr-8" : "lg:pl-8"
                    }`}
                  >
                    <RoleCard
                      role={role}
                      roleIndex={roleIndex}
                      roleDelay={roleDelay}
                      roleId={roleId}
                      isLastRole={false}
                      variant="desktop"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

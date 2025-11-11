"use client";
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { EducationCard } from "./EducationCard";
import { Award } from "lucide-react";
import { useI18n } from "../../i18n/provider";
import { getEducationJourneyNote, getEducation, getCertificates } from "../../data/profileDataTranslations";

interface EducationSectionProps {
  isVisible: (id: string) => boolean;
}

export function EducationSection({ isVisible }: EducationSectionProps) {
  const { t, locale } = useI18n();
  const journeyNote = getEducationJourneyNote(locale);
  const education = getEducation(locale);
  const certificates = getCertificates(locale);
  
  return (
    <section
      id="education"
      className="relative py-20 px-6 bg-[var(--bg-secondary)]/30 mt-32"
      data-section="education"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={t('education.title')}
          description={t('education.description')}
          isVisible={isVisible("education")}
        />

        {/* Personal Education Journey Note - Subtitle */}
        <div className={`mb-8 -mt-8 transform transition-all duration-500 ${
          isVisible("education")
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`} style={{ zIndex: 20 }}>
          <div className="relative max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent rounded-lg px-8 py-4 border-l-2 border-[var(--accent-primary)]">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic">
                {journeyNote}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              description={edu.description}
              logo={edu.logo}
              status={edu.status}
              isVisible={isVisible("education")}
              index={index}
            />
          ))}
        </div>

        {/* Certificates Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-[var(--accent-primary)]" />
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">
              {t('education.certificates')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`card backdrop-blur-sm rounded-xl p-5 transform transition-all duration-500 hover:scale-105 ${
                  isVisible("education")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${(education.length + index) * 100}ms`, zIndex: 20 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  {cert.logo ? (
                    <div className="w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-white">
                      <img 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <Award className="w-12 h-12 p-2 text-[var(--accent-primary)] flex-shrink-0 bg-[var(--accent-primary)]/10 rounded" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-bold text-[var(--text-primary)] leading-tight mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-[var(--accent-primary)] font-semibold">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-[var(--text-secondary)] mt-2 font-mono break-all">
                        {cert.credentialId}
                      </p>
                    )}
                    {cert.status && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                        {cert.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

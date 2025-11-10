"use client";
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { CompanyCard } from "./CompanyCard";
import { useI18n } from "../../i18n/provider";
import { getEngineeringJourney } from "../../data/profileDataTranslations";

interface JourneySectionProps {
  isVisible: (id: string) => boolean;
  expandedCompanies: Set<number>;
  toggleCompany: (index: number) => void;
}

export function JourneySection({ 
  isVisible, 
  expandedCompanies, 
  toggleCompany 
}: JourneySectionProps) {
  const { t, locale } = useI18n();
  const engineeringJourney = getEngineeringJourney(locale);
  
  return (
    <section
      id="journey"
      className="relative py-20 px-6 mb-32"
      data-section="journey"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={t('journey.title')}
          description={t('journey.description')}
          isVisible={isVisible("journey")}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - only on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full rounded-full" style={{ background: 'var(--accent-primary)' }}></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {engineeringJourney.map((company, index) => (
              <CompanyCard
                key={index}
                company={company}
                index={index}
                isExpanded={expandedCompanies.has(index)}
                isVisible={isVisible(`company-${index}`)}
                toggleCompany={toggleCompany}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

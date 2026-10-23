"use client";

import React from 'react';
import { ArrowUpRight, ChevronDown, GitBranch } from 'lucide-react';
import { useI18n } from '../../i18n/provider';
import { getEngineeringJourney } from '../../data/profileDataTranslations';
import { brandCopy } from '../../data/brandCopy';
import { CompanyLogo } from './CompanyLogo';

const yearMarkers = ['2026', '2022', '2019', '2018'];
const paths = [
  ['eMobility', 'Lidl Connect', 'Backend & Platforms'],
  ['Capterra', 'GetApp', 'Software Advice'],
  ['Lidl Plus', 'Alerts', 'Azure'],
  ['Full-stack', '.NET', 'React'],
];

export function CareerTimeline({ onOpenCase }: { onOpenCase: (index: number) => void }) {
  const { locale } = useI18n();
  const c = brandCopy[locale];
  const journey = getEngineeringJourney(locale);
  const now = { en: 'NOW', es: 'AHORA', ca: 'ARA' }[locale];
  const expand = { en: 'Explore this chapter', es: 'Explora esta etapa', ca: 'Explora aquesta etapa' }[locale];

  return <ol className="engineering-timeline">
    {journey.map((company, index) => {
      const Icon = company.icon;
      return <li className={`timeline-entry ${index % 2 ? 'entry-right' : 'entry-left'}`} key={company.company}>
        <span className="timeline-junction" aria-hidden="true"><Icon size={17} strokeWidth={1.5}/></span>
        <aside className="timeline-year" aria-hidden="true"><span className="timeline-year-number">{yearMarkers[index]}</span><div className="timeline-path">{paths[index].map((path, i) => <React.Fragment key={path}>{i > 0 && <span className="path-connector">↳</span>}<span>{path}</span></React.Fragment>)}</div>{index === 0 && <span className="timeline-now"><span className="signal-dot"/>{now}</span>}</aside>
        <article className="timeline-company">
          <details open={index === 0}>
            <summary className="timeline-company-summary">
              <div className="timeline-company-meta"><span className="eyebrow">{company.period}</span><span className="timeline-company-toggle"><ChevronDown size={17}/></span></div>
              <div className="timeline-company-heading"><CompanyLogo src={company.companyLogo} fallback={company.companyFallback}/><div><h3>{company.company.replace(' - SCRM Lidl Digital Hub', '')}</h3><span className="timeline-company-location">{company.location}</span></div></div>
              <p>{company.description}</p>
              <span className="timeline-expand-hint">{expand}<span>+</span></span>
            </summary>
            <div className="timeline-roles">
              {company.roles.map((role, roleIndex) => {
                const caseIndex = index === 0 ? role.title.includes('Lidl Connect') ? 1 : role.title.includes('eMobility') ? 0 : null : index === 1 && roleIndex === 1 ? 2 : index === 2 && roleIndex === 0 ? 3 : null;
                return <details key={role.title} className="timeline-role" open={index === 0 && roleIndex === 0}>
                  <summary><span className="role-branch" aria-hidden="true"><GitBranch size={13}/></span><div><span className="timeline-role-date">{role.period}</span><h4>{role.title}</h4></div><ChevronDown className="role-chevron" size={14}/></summary>
                  <div className="timeline-role-content"><ul>{role.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}</ul><div className="timeline-role-stack">{role.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>{caseIndex !== null && <button type="button" className="text-link timeline-case-link" onClick={() => onOpenCase(caseIndex)}>{c.explore}<ArrowUpRight size={15}/></button>}</div>
                </details>;
              })}
            </div>
          </details>
        </article>
      </li>;
    })}
    <li className="timeline-origin" aria-hidden="true"><span>⌘</span><span>2018 / {locale === 'en' ? 'FIRST STEPS' : locale === 'es' ? 'PRIMEROS PASOS' : 'PRIMERS PASSOS'}</span></li>
  </ol>;
}

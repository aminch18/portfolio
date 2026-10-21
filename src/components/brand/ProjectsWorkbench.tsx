"use client";

import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { useI18n } from '../../i18n/provider';
import { brandCopy } from '../../data/brandCopy';
import { WyrdProject } from './WyrdProject';
import { PersonalProjects } from './PersonalProjects';
import { CompanyLogo } from './CompanyLogo';
import { engineeringJourney } from '../../data/profileData';

const projectCompanies = [engineeringJourney[0], engineeringJourney[0], engineeringJourney[1], engineeringJourney[2]];

const projectDetails = {
  en: {
    label: 'PROFESSIONAL PROJECTS',
    hint: 'Select a project to see my contribution.',
    contribution: 'WHAT I WORKED ON',
    deliverables: 'DELIVERABLES & RESPONSIBILITIES',
    read: 'Read the technical decisions',
    private: 'Professional work · source code is not public',
    projects: [
      { name: 'eMobility', subtitle: 'Lidl Plus & Kaufland', scope: 'Product back-office & operations', items: ['First product back-office', 'Operations hub with role-based access', 'Billing refactor & architectural decisions', 'Telemetry, integration tests & ETLs'] },
      { name: 'Lidl Connect', subtitle: 'Schwarz Digits', scope: 'Operations SaaS architecture & integrations', items: ['Operational requirements & PRD', 'SaaS architecture and implementation handover', 'Sagas, Outbox & RabbitMQ integrations', 'Load & performance testing'] },
      { name: 'Reviews Platform', subtitle: 'Gartner Digital Markets', scope: 'Scoring, moderation & event pipelines', items: ['Decoupled review scoring engine', 'Review moderation tooling in Next.js', 'Kafka pipelines distributing review insights', 'Cross-team architecture & mentoring'] },
      {"name":"Lidl Plus Alerts","subtitle":"Plain Concepts · Lidl Plus","scope":"Monolith-to-cloud migration","items":["Alerts domain moved to microservices","Upgrade from .NET Core 3.1 to .NET 6","Full data migration","CQRS / DDD and Azure event integrations"]},
    ],
    labLabel: 'PERSONAL PROJECT / IN PROGRESS', labText: 'A learning project in Go: exploring rate-limiting algorithms, shared Redis state and concurrency.', labAction: 'View repository',
  },
  es: {
    label: 'PROYECTOS PROFESIONALES', hint: 'Elige un proyecto para ver mi aportación.', contribution: 'EN QUÉ HE TRABAJADO', deliverables: 'ENTREGABLES Y RESPONSABILIDADES', read: 'Leer las decisiones técnicas', private: 'Trabajo profesional · el código no es público',
    projects: [
      { name: 'eMobility', subtitle: 'Lidl Plus y Kaufland', scope: 'Back-office de producto y operaciones', items: ['Primer back-office de producto', 'Hub de operaciones con acceso por rol', 'Refactor de facturación y decisiones de arquitectura', 'Telemetría, pruebas de integración y ETLs'] },
      { name: 'Lidl Connect', subtitle: 'Schwarz Digits', scope: 'Arquitectura del SaaS de operaciones e integraciones', items: ['Necesidades de operación y PRD', 'Arquitectura del SaaS y traspaso para implementación', 'Integraciones con Sagas, Outbox y RabbitMQ', 'Pruebas de carga y rendimiento'] },
      { name: 'Reviews Platform', subtitle: 'Gartner Digital Markets', scope: 'Puntuación, moderación y pipelines de eventos', items: ['Motor de puntuación de reseñas desacoplado', 'Herramientas de moderación en Next.js', 'Pipelines de Kafka para distribuir información', 'Arquitectura entre equipos y acompañamiento técnico'] },
      {"name":"Alertas de Lidl Plus","subtitle":"Plain Concepts · Lidl Plus","scope":"Migración del monolito a servicios cloud","items":["Dominio de alertas migrado a microservicios","Actualización de .NET Core 3.1 a .NET 6","Migración completa de datos","CQRS / DDD e integraciones de eventos en Azure"]},
    ],
    labLabel: 'PROYECTO PERSONAL / EN DESARROLLO', labText: 'Un proyecto de aprendizaje en Go: explorar algoritmos de limitación de peticiones, estado compartido en Redis y concurrencia.', labAction: 'Ver repositorio',
  },
  ca: {
    label: 'PROJECTES PROFESSIONALS', hint: 'Tria un projecte per veure la meva aportació.', contribution: 'EN QUÈ HE TREBALLAT', deliverables: 'LLIURABLES I RESPONSABILITATS', read: 'Llegir les decisions tècniques', private: 'Treball professional · el codi no és públic',
    projects: [
      { name: 'eMobility', subtitle: 'Lidl Plus i Kaufland', scope: 'Back-office de producte i operacions', items: ['Primer back-office de producte', 'Hub d’operacions amb accés per rol', 'Refactorització de facturació i decisions d’arquitectura', 'Telemetria, proves d’integració i ETLs'] },
      { name: 'Lidl Connect', subtitle: 'Schwarz Digits', scope: 'Arquitectura del SaaS d’operacions i integracions', items: ['Necessitats d’operació i PRD', 'Arquitectura del SaaS i traspàs per implementar-lo', 'Integracions amb Sagas, Outbox i RabbitMQ', 'Proves de càrrega i rendiment'] },
      { name: 'Reviews Platform', subtitle: 'Gartner Digital Markets', scope: 'Puntuació, moderació i pipelines d’esdeveniments', items: ['Motor de puntuació de ressenyes desacoblat', 'Eines de moderació a Next.js', 'Pipelines de Kafka per distribuir informació', 'Arquitectura entre equips i acompanyament tècnic'] },
      {"name":"Alertes de Lidl Plus","subtitle":"Plain Concepts · Lidl Plus","scope":"Migració del monòlit a serveis cloud","items":["Domini d’alertes migrat a microserveis","Actualització de .NET Core 3.1 a .NET 6","Migració completa de dades","CQRS / DDD i integracions d’esdeveniments a Azure"]},
    ],
    labLabel: 'PROJECTE PERSONAL / EN DESENVOLUPAMENT', labText: 'Un projecte d’aprenentatge en Go: explorar algoritmes de limitació de peticions, estat compartit a Redis i concurrència.', labAction: 'Veure el repositori',
  },
};

export function ProjectsWorkbench({ onOpenCase }: { onOpenCase: (index: number) => void }) {
  const { locale } = useI18n();
  const c = brandCopy[locale];
  const copy = projectDetails[locale];
  const [active, setActive] = useState(0);
  const project = copy.projects[active];
  const study = c.cases[active];

  return <div className="projects-workbench">
    <WyrdProject/>
    <PersonalProjects/>
    <details className="professional-projects" id="professional-projects" open><summary>{copy.label}<ChevronDown size={18}/></summary>

    <div className="workbench-heading"><span className="eyebrow">{copy.label}</span><span>{copy.hint}</span></div>
    <div className="workbench-layout">
      <div className="project-index" role="group" aria-label={copy.label}>
        {copy.projects.map((item,index) => <button type="button" key={item.name} aria-pressed={active===index} aria-controls="project-dossier" className={`project-index-item ${active===index?'selected':''}`} onClick={()=>setActive(index)}><CompanyLogo src={projectCompanies[index].companyLogo} fallback={projectCompanies[index].companyFallback} compact/><span><strong>{item.name}</strong><small>{item.subtitle}</small></span><ArrowRight size={17}/></button>)}
        <p className="project-source-note">{copy.private}</p>
      </div>
      <article className="project-dossier" id="project-dossier" aria-live="polite" aria-atomic="true">
        <div className="dossier-heading"><span className="eyebrow">{study.category}</span><span className="dossier-number">0{active+1}</span></div>
        <h3>{project.name}</h3><p className="project-scope">{project.scope}</p>
        <div className="project-contribution"><span className="eyebrow">{copy.contribution}</span><p>{study.contribution}</p></div>
        <div className="project-deliverables"><span className="eyebrow">{copy.deliverables}</span><ul>{project.items.map(item=><li key={item}><Check size={13}/>{item}</li>)}</ul></div>
        <div className="dossier-bottom"><div className="tag-list">{study.tags.map(tag=><span key={tag}>{tag}</span>)}</div><button type="button" className="text-link" onClick={()=>onOpenCase(active)}>{copy.read}<ArrowUpRight size={17}/></button></div>
      </article>
    </div>

    </details>
  </div>;
}

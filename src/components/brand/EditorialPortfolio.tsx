"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowDownLeft, ArrowRight, ArrowUpRight, Braces, ChevronDown, Github, Layers3, Linkedin, Network, Radio, X } from 'lucide-react';
import { useI18n } from '../../i18n/provider';
import { brandCopy } from '../../data/brandCopy';
import { profile } from '../../data/profileData';
import { getCertificates, getEducation, getLanguages } from '../../data/profileDataTranslations';
import { ContactForm } from '../portfolio/ContactForm';
import { CareerTimeline } from './CareerTimeline';
import { ProjectsWorkbench } from './ProjectsWorkbench';
import { ProjectDirectory } from './ProjectDirectory';
import { SiteHeader } from './SiteHeader';
import { Publications } from './Publications';

const layerIcons = [Layers3, Braces, Radio, Network];

function Lines({ text }: { text: string }) {
  return <>{text.split('\n').map((line, index) => <React.Fragment key={line}>{index > 0 && <br />}{line}</React.Fragment>)}</>;
}

function CaseDialog({ index, onClose }: { index: number | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { locale } = useI18n();
  const c = brandCopy[locale];
  const study = index === null ? null : c.cases[index];
  useEffect(() => {
    const dialog = dialogRef.current;
    if (index === null || !dialog) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => { dialog.close(); document.body.style.overflow = overflow; };
  }, [index]);
  return <dialog ref={dialogRef} className="case-dialog" aria-labelledby="case-dialog-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {study && <div className="case-dialog-inner"><button className="dialog-close" type="button" aria-label={c.close} onClick={onClose}><X size={23}/></button><span className="eyebrow">{study.company}</span><h2 id="case-dialog-title"><Lines text={study.title}/></h2><p className="dialog-intro">{study.intro}</p><div className="tag-list">{study.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="case-dialog-sections">{[study.challenge,study.decisions,study.contribution].map((text,i) => <section key={i}><span className="eyebrow">0{i+1} / {c.caseLabels[i]}</span><p>{text}</p></section>)}</div><button type="button" className="text-link" onClick={onClose}>{c.close}<ArrowDownLeft size={17}/></button></div>}
  </dialog>;
}

export default function EditorialPortfolio() {
  const { locale } = useI18n();
  const c = brandCopy[locale];
  const [caseIndex,setCaseIndex] = useState<number|null>(null);
  const [contactOpen,setContactOpen] = useState(false);
  const education = getEducation(locale);
  const certificates = getCertificates(locale);
  const languages = getLanguages(locale);
  const photo = `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}${profile.photo}`;

  return <div className="brand-portfolio">
    <a href="#home" className="skip-link">{c.skip}</a>
    <SiteHeader/>

    <section id="home" className="brand-hero brand-shell" aria-labelledby="hero-title">
      <div className="hero-kicker"><span><span className="tiny-cross">+</span> {c.role}</span><span>BARCELONA, ES <span className="tiny-cross">↗</span></span></div>
      <div className="hero-layout"><div className="hero-copy"><h1 id="hero-title" className="personal-hero-title">Amin<br/>Chouaibi<span className="name-period">.</span></h1><p className="hero-specialism">{c.specialism}</p><p className="hero-intro">{c.intro}</p><div className="hero-actions"><a className="brand-button primary" href="#projects">{c.workCta}<ArrowUpRight size={20}/></a><a className="text-link" href="#writing">{locale==='en'?'Read my writing':locale==='es'?'Leer mis escritos':'Llegir els meus escrits'}<ArrowRight size={18}/></a></div><div className="hero-person"><img src={photo} alt="Amin Chouaibi El Azaar" width="44" height="44"/><div><strong>Amin Chouaibi</strong><span>{c.experience} <span className="person-separator">/</span> {c.location}</span></div></div></div><ProjectDirectory/></div>
      <div className="hero-bottom"><div className="current-work"><span className="eyebrow"><span className="signal-dot"/>{c.current}</span><p>{c.currentText} <Link href="/publications/" className="hero-writing-link">{locale==='en'?'Browse my writing':locale==='es'?'Ver mis escritos':'Veure els meus escrits'} ↗</Link></p></div><a href="#projects" className="scroll-cue"><span>{c.scroll}</span><span className="scroll-circle"><ArrowDown size={18}/></span></a></div>
    </section>



    <section id="projects" className="brand-section brand-shell" aria-labelledby="work-title"><div className="section-intro"><div><span className="eyebrow section-label">{c.workLabel}</span><h2 id="work-title"><Lines text={c.workTitle}/></h2></div><p>{c.workIntro}</p></div>
      <ProjectsWorkbench onOpenCase={setCaseIndex}/>
    </section>


    <Publications featured/>

    <section id="journey" className="brand-section brand-shell timeline-section" aria-labelledby="journey-title"><div className="section-intro"><div><span className="eyebrow section-label">{c.journeyLabel}</span><h2 id="journey-title"><Lines text={c.journeyTitle}/></h2></div><p>{c.journeyIntro}</p></div><CareerTimeline onOpenCase={setCaseIndex}/></section>

    <section id="skills" className="craft-section"><div className="brand-shell brand-section"><div className="section-intro"><div><span className="eyebrow section-label">{c.craftLabel}</span><h2><Lines text={c.craftTitle}/></h2></div><p>{c.craftIntro}</p></div><div className="craft-grid">{c.stacks.map((stack,index)=>{const Icon=layerIcons[index];return <article className="craft-item" key={stack.name}><div className="craft-top"><Icon size={25} strokeWidth={1.4}/><span className="eyebrow">0{index+1}</span></div><h3>{stack.name}</h3><p>{stack.text}</p><div className="craft-tools">{stack.tools.map(tool=><span key={tool}>{tool}</span>)}</div></article>;})}</div></div></section>

    <section id="about" className="brand-section brand-shell about-section" aria-labelledby="about-title"><div className="about-portrait"><img src={photo} alt="Amin Chouaibi El Azaar" width="500" height="600" loading="lazy"/><div className="portrait-caption"><span>AMIN CHOUAIBI EL AZAAR</span><span>BCN ↗</span></div><span className="portrait-corner" aria-hidden="true">+</span></div><div className="about-copy"><span className="eyebrow section-label">{c.aboutLabel}</span><h2 id="about-title"><Lines text={c.aboutTitle}/></h2><p>{c.aboutText}</p><div className="about-details"><details><summary>{c.education}<ChevronDown size={17}/></summary><div className="about-detail-body">{education.map(edu=><div key={edu.institution}><strong>{edu.degree}</strong><span>{edu.institution} · {edu.period}{edu.status?` · ${edu.status}`:''}</span></div>)}</div></details><details><summary>{c.certifications}<ChevronDown size={17}/></summary><div className="about-detail-body">{certificates.map(cert=><div key={cert.name}><strong>{cert.name}</strong><span>{cert.issuer} · {cert.date}</span></div>)}</div></details><details><summary>{c.languages}<ChevronDown size={17}/></summary><div className="about-detail-body">{languages.map(language=><div key={language.name}><strong>{language.name}</strong><span>{language.description}</span></div>)}</div></details></div><div className="about-socials"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16}/>LinkedIn<ArrowUpRight size={14}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/>GitHub<ArrowUpRight size={14}/></a><a href={`mailto:${profile.email}?subject=${encodeURIComponent(c.cv)}`}>{c.cv}<ArrowUpRight size={14}/></a></div></div></section>

    <footer id="contact" className="brand-footer"><div className="brand-shell"><div className="footer-kicker"><span className="eyebrow">{c.contactLabel}</span><span className="footer-asterisk" aria-hidden="true">✳</span></div><h2>{c.contactTitle[0]}<br/><em>{c.contactTitle[1]}</em></h2><div className="footer-contact-row"><p>{c.contactText}</p><button className="brand-button footer-button" type="button" onClick={()=>setContactOpen(true)}>{c.form}<ArrowUpRight size={20}/></button></div><a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22}/></a><div className="footer-bottom"><a href="#home" className="brand-mark">amin<span>.</span></a><span>© {new Date().getFullYear()} Amin Chouaibi</span><span>{c.footer}</span><a href="#home" aria-label={locale==='en'?'Back to top':locale==='es'?'Volver arriba':'Tornar a dalt'}>↑</a></div></div></footer>
    <CaseDialog index={caseIndex} onClose={()=>setCaseIndex(null)}/>
    <ContactForm isOpen={contactOpen} onClose={()=>setContactOpen(false)}/>
  </div>;
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../../i18n/provider';
import { featuredPublicationIds, publications, publicationDestination, publicationHref, Publication } from '../../data/publications';
import { SiteHeader } from './SiteHeader';

const base = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
const copy = {
  en: { label:'02 / WRITING', title:'What I learn,\nwhat I write.', intro:'Code, technology and the people behind it. Experiments and reflections on building software and working together.', archive:'All writing', archiveTitle:'Writing.', archiveIntro:'How software works. How we work together. Two sides of what I write about, with room for code, questions and people.', all:'Everything', technical:'Technical', reflections:'Reflections', technicalIntro:'Implementations, architecture and experiments. Decisions you can examine in code.', reflectionsIntro:'Technology, teams and people. Questions about how we think, relate and build together.', topics:'Technical topics', people:'People & teams', reflection:'Reflection', rate:'Rate limiting', orleans:'Microsoft Orleans', article:'Article', count:'pieces', singular:'piece', back:'Back home', read:'Read on LinkedIn', profile:'All my articles on LinkedIn', selected:'Selected writing', footer:'Code, experiments and things worth sharing.' },
  es: { label:'02 / ESCRITOS', title:'Lo que aprendo,\nlo que comparto.', intro:'Código, tecnología y las personas que hay detrás. Experimentos y reflexiones sobre construir software y trabajar juntos.', archive:'Todos los escritos', archiveTitle:'Escritos.', archiveIntro:'Cómo funciona el software. Cómo trabajamos juntos. Dos caras de lo que escribo, con espacio para el código, las preguntas y las personas.', all:'Todo', technical:'Técnica', reflections:'Reflexiones', technicalIntro:'Implementaciones, arquitectura y experimentos. Decisiones que se pueden examinar en código.', reflectionsIntro:'Tecnología, equipos y personas. Preguntas sobre cómo pensamos, nos relacionamos y construimos juntos.', topics:'Temas técnicos', people:'Personas y equipos', reflection:'Reflexión', rate:'Rate limiting', orleans:'Microsoft Orleans', article:'Artículo', count:'escritos', singular:'escrito', back:'Volver al inicio', read:'Leer en LinkedIn', profile:'Todos mis artículos en LinkedIn', selected:'Una selección de lo que escribo', footer:'Código, experimentos y cosas que merece la pena compartir.' },
  ca: { label:'02 / ESCRITS', title:'El que aprenc,\nel que comparteixo.', intro:'Codi, tecnologia i les persones que hi ha darrere. Experiments i reflexions sobre construir programari i treballar plegats.', archive:'Tots els escrits', archiveTitle:'Escrits.', archiveIntro:'Com funciona el programari. Com treballem plegats. Dues cares del que escric, amb espai per al codi, les preguntes i les persones.', all:'Tot', technical:'Tècnica', reflections:'Reflexions', technicalIntro:'Implementacions, arquitectura i experiments. Decisions que es poden examinar en codi.', reflectionsIntro:'Tecnologia, equips i persones. Preguntes sobre com pensem, ens relacionem i construïm plegats.', topics:'Temes tècnics', people:'Persones i equips', reflection:'Reflexió', rate:'Rate limiting', orleans:'Microsoft Orleans', article:'Article', count:'escrits', singular:'escrit', back:'Tornar a l’inici', read:'Llegir a LinkedIn', profile:'Tots els meus articles a LinkedIn', selected:'Una selecció del que escric', footer:'Codi, experiments i coses que val la pena compartir.' },
};

function PublicationCard({ item }: { item: Publication }) {
  const { locale } = useI18n();
  const c = copy[locale];
  const destination = publicationDestination(item,locale);
  const external = destination.kind === 'external';
  return <article className="publication-card">
    <div className="publication-meta"><span>{item.category==='reflections'?c.reflections:item.series ? `${item.series} / ${item.part}` : c.rate}</span><span lang={destination.language}>{destination.language.toUpperCase()}</span></div>
    <h3><a href={publicationHref(destination)} target={external?'_blank':undefined} rel={external?'noopener noreferrer':undefined}>{item.title[locale]}<ArrowUpRight size={22}/></a></h3>
    <p>{item.summary[locale]}</p>
    <div className="publication-source"><span>{item.category==='reflections'?c.reflection:c.article}</span><span>{external?'LinkedIn':'amin.'}<ArrowUpRight size={13}/></span></div>
  </article>;
}

export function Publications({ featured = false }: { featured?: boolean }) {
  const { locale } = useI18n();
  const c = copy[locale];
  const [category, setCategory] = useState('all');
  const [topic, setTopic] = useState('all');
  const items = featured
    ? featuredPublicationIds.map(id => publications.find(item => item.id === id)!)
    : publications.filter(item => (category === 'all' || item.category === category) && (topic === 'all' || item.topic === topic));
  return <section id="writing" className={`brand-section brand-shell publications-section ${featured ? 'publications-featured' : 'publications-archive'}`} aria-labelledby="writing-title">
    {featured ? <div className="section-intro"><div><span className="eyebrow section-label">{c.label}</span><h2 id="writing-title">{c.title.split('\n').map((line,i)=><span key={line}>{i>0 && <br/>}{line}</span>)}</h2></div><div className="writing-intro"><p>{c.intro}</p><Link className="text-link" href="/publications/">{c.archive}<ArrowRight size={18}/></Link></div></div>
    : <><a className="text-link archive-back" href={`${base}/#home`}><ArrowLeft size={16}/>{c.back}</a><span className="eyebrow section-label">AMIN CHOUAIBI / {c.archiveTitle.replace('.','')}</span><h1 id="writing-title">{c.archiveTitle}</h1><p className="archive-intro">{c.archiveIntro}</p><div className="publication-toolbar"><div className="publication-filters" role="group" aria-label={c.archive}>{[['all',c.all],['technical',c.technical],['reflections',c.reflections]].map(([id,label])=><button type="button" key={id} aria-pressed={category===id} onClick={()=>{setCategory(id);setTopic('all');}}>{label}</button>)}</div><span className="eyebrow publication-count" role="status" aria-live="polite">{items.length} {items.length===1?c.singular:c.count}</span></div>
    {category==='technical' && <div className="publication-topic-filters publication-filters" role="group" aria-label={c.topics}>{[['all',c.all],['rate-limiting',c.rate],['orleans',c.orleans]].map(([id,label])=><button type="button" key={id} aria-pressed={topic===id} onClick={()=>setTopic(id)}>{label}</button>)}</div>}</>}
    {featured ? <div className="publication-grid">{items.map(item=><PublicationCard key={item.id} item={item}/>)}</div>
    : <div className="writing-groups">{(['technical','reflections'] as const).map(group=> {
      const groupItems=items.filter(item=>item.category===group);
      if (!groupItems.length) return null;
      return <section className="writing-group" key={group} aria-labelledby={`writing-${group}`}><div className="writing-group-heading"><h2 id={`writing-${group}`}>{c[group]}</h2><p>{group==='technical'?c.technicalIntro:c.reflectionsIntro}</p></div><div className={`publication-grid ${groupItems.length===1?'publication-grid-single':''}`}>{groupItems.map(item=><PublicationCard key={item.id} item={item}/>)}</div></section>;
    })}</div>}
    {!featured && <a className="text-link archive-profile" href="https://www.linkedin.com/in/amin-chouaibi-el-azaar-223942160/recent-activity/articles/" target="_blank" rel="noopener noreferrer">{c.profile}<ArrowUpRight size={17}/></a>}
  </section>;
}

export function PublicationsPage() {
  const { locale } = useI18n();
  const c = copy[locale];
  return <div className="brand-portfolio"><a href="#writing" className="skip-link">{c.archive}</a><SiteHeader archive/><main><Publications/></main><footer className="publication-page-footer brand-shell"><a href={`${base}/#home`} className="brand-mark">amin<span className="brand-period">.</span></a><p>{c.footer}</p><a className="text-link" href={`${base}/#contact`}>{locale==='en'?'Let’s talk':locale==='es'?'Hablemos':'Parlem'}<ArrowUpRight size={16}/></a></footer></div>;
}

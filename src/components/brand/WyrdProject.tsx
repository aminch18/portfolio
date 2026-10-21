"use client";

import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github } from 'lucide-react';
import { useI18n } from '../../i18n/provider';
import samples from '../../data/wyrdSamples.json';
import highlighted from '../../data/wyrdHighlighted.json';

const copy = {
  en: {
    label:'PERSONAL PROJECT / OPEN SOURCE',title:'Wyrd',subtitle:'Deterministic event-driven processes for .NET.',
    intro:'A framework I’m building to keep business decisions visible while the runtime handles retries, compensation and idempotency.',
    points:['Pure domain decisions and declarative sagas','Compile-time checks with Roslyn analyzers','Skuld: reproducible failure simulation'],
    state:'Preview · in-memory runtime available; durable runtime in development.',
    code:'Explore the code',docs:'Documentation',process:'The process',test:'The failure test',sample:'REAL CODE FROM THE SHOP SAMPLE',copy:'Copy code',copied:'Copied',source:'View source',note:'The test configuration shown explores 5,000 scenarios with injected failures, duplicates and reordered messages. No simulation is running on this page.',
  },
  es: {
    label:'PROYECTO PERSONAL / OPEN SOURCE',title:'Wyrd',subtitle:'Procesos orientados a eventos, deterministas, para .NET.',
    intro:'Un framework que estoy construyendo para mantener visibles las decisiones de negocio mientras el runtime se ocupa de reintentos, compensaciones e idempotencia.',
    points:['Decisiones de dominio puras y sagas declarativas','Comprobaciones en compilación con analizadores Roslyn','Skuld: simulación de fallos reproducible'],
    state:'Preview · runtime en memoria disponible; runtime duradero en desarrollo.',
    code:'Explorar el código',docs:'Documentación',process:'El proceso',test:'La prueba de fallos',sample:'CÓDIGO REAL DEL EJEMPLO SHOP',copy:'Copiar código',copied:'Copiado',source:'Ver el archivo',note:'Esta configuración del test explora 5.000 escenarios con fallos, duplicados y mensajes reordenados. Esta página no ejecuta la simulación.',
  },
  ca: {
    label:'PROJECTE PERSONAL / OPEN SOURCE',title:'Wyrd',subtitle:'Processos orientats a esdeveniments, deterministes, per a .NET.',
    intro:'Un framework que estic construint per mantenir visibles les decisions de negoci mentre el runtime s’ocupa dels reintents, les compensacions i la idempotència.',
    points:['Decisions de domini pures i sagues declaratives','Comprovacions en compilació amb analitzadors Roslyn','Skuld: simulació de fallades reproduïble'],
    state:'Preview · runtime en memòria disponible; runtime durador en desenvolupament.',
    code:'Explora el codi',docs:'Documentació',process:'El procés',test:'La prova de fallades',sample:'CODI REAL DE L’EXEMPLE SHOP',copy:'Copiar el codi',copied:'Copiat',source:'Veure el fitxer',note:'Aquesta configuració del test explora 5.000 escenaris amb fallades, duplicats i missatges reordenats. Aquesta pàgina no executa la simulació.',
  },
};

export function WyrdProject() {
  const { locale } = useI18n();
  const c = copy[locale];
  const [active,setActive] = useState<'process'|'test'>('process');
  const [copied,setCopied] = useState(false);
  const code = samples[active];
  const basePath = process.env.NODE_ENV==='production'?'/portfolio':'';
  const source = active==='process'?'samples/Shop/Fulfillment/OrderFulfillment.cs':'samples/Shop.Tests/SkuldSpecs.cs';
  const copyCode = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); } catch { setCopied(false); }
  };
  return <article className="wyrd-project" id="project-wyrd">
    <div className="wyrd-project-copy"><span className="eyebrow">{c.label}</span><img className="wyrd-project-logo" src={`${basePath}/projects/wyrd-logo.png`} width="300" height="130" alt="Wyrd" loading="lazy"/><h3>{c.title}</h3><p className="wyrd-subtitle">{c.subtitle}</p><p className="wyrd-intro">{c.intro}</p><ul>{c.points.map(point=><li key={point}><Check size={13}/>{point}</li>)}</ul><div className="tag-list"><span>.NET 10</span><span>C# 14</span><span>Roslyn</span><span>MIT</span></div><div className="wyrd-project-links"><a href="https://github.com/aminch18/wyrd" className="brand-button primary" target="_blank" rel="noopener noreferrer"><Github size={16}/>{c.code}<ArrowUpRight size={16}/></a><a href="https://aminch18.github.io/wyrd/" className="text-link" target="_blank" rel="noopener noreferrer">{c.docs}<ArrowUpRight size={16}/></a></div><p className="wyrd-status"><span className="signal-dot"/>{c.state}</p></div>
    <div className="wyrd-code-panel"><div className="wyrd-code-heading"><span className="eyebrow">{c.sample}</span><span>C#</span></div><div className="wyrd-code-tabs" role="group" aria-label={c.sample}><button type="button" aria-pressed={active==='process'} onClick={()=>{setActive('process');setCopied(false);}}>{c.process}</button><button type="button" aria-pressed={active==='test'} onClick={()=>{setActive('test');setCopied(false);}}>{c.test}</button><button type="button" className="copy-code" onClick={copyCode} aria-label={copied?c.copied:c.copy} title={copied?c.copied:c.copy}>{copied?<Check size={14}/>:<Copy size={14}/>}</button></div><div className="code-file-path">{source}</div><pre className="wyrd-code" tabIndex={0} aria-label={source}><code>{highlighted[active].map((line,index)=><span className="source-code-line" key={index}><span className="source-line-number" aria-hidden="true">{index+1}</span>{line.map((token,i)=><span key={i} style={{color:token.color}}>{token.content}</span>)}{'\n'}</span>)}</code></pre><div className="wyrd-code-footer">{active==='test' && <p>{c.note}</p>}<a href={`https://github.com/aminch18/wyrd/blob/main/${source}`} target="_blank" rel="noopener noreferrer">{c.source}<ArrowUpRight size={13}/></a><span role="status" className="sr-only">{copied?c.copied:''}</span></div></div>
  </article>;
}

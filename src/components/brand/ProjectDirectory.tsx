"use client";

import { ArrowDownRight } from 'lucide-react';
import { useI18n } from '../../i18n/provider';

const copy={
  en:{title:'MY OWN PROJECTS',hint:'Code, experiments and things I write.',items:[['Wyrd','Event-driven processes for .NET','.NET / C#'],['Rate Limiter Lab','Five algorithms, the same load','Go / k6'],['TelcoLab','Building and questioning virtual actors','Orleans / .NET']]},
  es:{title:'MIS PROYECTOS',hint:'Código, experimentos y cosas que escribo.',items:[['Wyrd','Procesos orientados a eventos en .NET','.NET / C#'],['Rate Limiter Lab','Cinco algoritmos, la misma carga','Go / k6'],['TelcoLab','Construir y cuestionar los actores virtuales','Orleans / .NET']]},
  ca:{title:'ELS MEUS PROJECTES',hint:'Codi, experiments i coses que escric.',items:[['Wyrd','Processos orientats a esdeveniments en .NET','.NET / C#'],['Rate Limiter Lab','Cinc algoritmes, la mateixa càrrega','Go / k6'],['TelcoLab','Construir i qüestionar els actors virtuals','Orleans / .NET']]},
};
const ids=['project-wyrd','project-ratelimiter','project-telcolab'];

export function ProjectDirectory(){
  const {locale}=useI18n();const c=copy[locale];
  return <aside className="project-directory"><div className="directory-heading"><span className="eyebrow">{c.title}</span><span>01—03</span></div>{c.items.map(([name,description,stack],index)=><a className="directory-project" href={`#${ids[index]}`} key={name}><span className="directory-number">0{index+1}</span><div><h2>{name}</h2><p>{description}</p><span>{stack}</span></div><ArrowDownRight size={20}/></a>)}<p className="directory-footer">{c.hint}</p></aside>;
}

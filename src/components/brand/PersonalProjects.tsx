"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import { useI18n } from '../../i18n/provider';
import { telcoPublications, publicationDestination, publicationHref } from '../../data/publications';

const measurements = [
  { name:'Token Bucket',steady:13.7,burst:13.9,concurrent:40.2,memory:'O(1)' },
  { name:'Fixed Window',steady:11.9,burst:19.9,concurrent:76.6,memory:'O(1)' },
  { name:'Leaky Bucket',steady:24.0,burst:23.4,concurrent:89.9,memory:'O(1)' },
  { name:'Sliding Log',steady:40.2,burst:206.6,concurrent:106.8,memory:'O(n)' },
  { name:'Sliding Counter',steady:18.6,burst:18.1,concurrent:84.7,memory:'O(1)' },
];
const copy = {
  en:{
    labLabel:'PERSONAL PROJECT / GO',labTitle:'Rate Limiter Lab',labIntro:'A production spike took down a reverse proxy and left me with a question: what actually happens inside a rate limiter? I built five algorithms from scratch and put them under the same load.',
    labDetails:'HTTP gateway, Go load generator, race tests, k6 and kind. Shared state with Redis is the next step.',metrics:['Steady','Burst','Concurrent'],algorithm:'Algorithm',memory:'Memory',source:'Published benchmarks · Intel i7-13700F · Go 1.22. Lower ns/op is better.',code:'Code',results:'Results & methodology',labArticle:'Read the article on LinkedIn',
    telcoLabel:'PERSONAL PROJECT / CODE + ARTICLES',telcoTitle:'TelcoLab',telcoSubtitle:'One workflow. Two architectures.',telcoIntro:'I rebuilt number porting with Microsoft Orleans to compare virtual actors with a classic queue-driven architecture. Then I wrote about what I learned, including where Orleans is the wrong choice.',
    telcoTopics:'Grains, streams, Postgres, transactions and observability with OpenTelemetry.',read:'All articles on LinkedIn',series:'Explore the article series',articleNote:'Read the series on LinkedIn. Articles in English and Spanish.',
    titles:['Actors vs queues: the starting point','Building the workflow with grains','From direct calls to Orleans Streams','Clustering and storage on Postgres','Atomic operations across grains','Seeing the cluster with .NET Aspire','The architecture reckoning at scale','The receipts: a decade at Halo scale'],
  },
  es:{
    labLabel:'PROYECTO PERSONAL / GO',labTitle:'Rate Limiter Lab',labIntro:'Un pico de tráfico tumbó un reverse proxy en producción y me dejó una pregunta: ¿qué pasa dentro de un rate limiter? Implementé cinco algoritmos desde cero y los sometí a la misma carga.',
    labDetails:'Gateway HTTP, generador de carga en Go, pruebas de concurrencia, k6 y kind. El estado compartido con Redis es el siguiente paso.',metrics:['Carga estable','Ráfaga','Concurrencia'],algorithm:'Algoritmo',memory:'Memoria',source:'Benchmarks publicados · Intel i7-13700F · Go 1.22. Menos ns/op es mejor.',code:'Código',results:'Resultados y metodología',labArticle:'Leer el artículo en LinkedIn',
    telcoLabel:'PROYECTO PERSONAL / CÓDIGO + ARTÍCULOS',telcoTitle:'TelcoLab',telcoSubtitle:'Un flujo. Dos arquitecturas.',telcoIntro:'Reconstruí la portabilidad de números con Microsoft Orleans para comparar los actores virtuales con una arquitectura clásica de colas. Después escribí lo que aprendí, incluido cuándo no elegir Orleans.',
    telcoTopics:'Grains, streams, Postgres, transacciones y observabilidad con OpenTelemetry.',read:'Todos los artículos en LinkedIn',series:'Explorar la serie de artículos',articleNote:'Lee la serie en LinkedIn. Artículos en inglés y español.',
    titles:['Actores vs. colas: el punto de partida','Construir el flujo con grains','De llamadas directas a Orleans Streams','Clustering y almacenamiento en Postgres','Operaciones atómicas entre grains','Ver el clúster con .NET Aspire','El balance de arquitectura a escala','Las pruebas: una década a escala Halo'],
  },
  ca:{
    labLabel:'PROJECTE PERSONAL / GO',labTitle:'Rate Limiter Lab',labIntro:'Un pic de trànsit va fer caure un reverse proxy en producció i em va deixar una pregunta: què passa dins d’un rate limiter? Vaig implementar cinc algoritmes des de zero i els vaig sotmetre a la mateixa càrrega.',
    labDetails:'Gateway HTTP, generador de càrrega en Go, proves de concurrència, k6 i kind. L’estat compartit amb Redis és el pas següent.',metrics:['Càrrega estable','Ràfega','Concurrència'],algorithm:'Algoritme',memory:'Memòria',source:'Benchmarks publicats · Intel i7-13700F · Go 1.22. Menys ns/op és millor.',code:'Codi',results:'Resultats i metodologia',labArticle:'Llegir l’article a LinkedIn',
    telcoLabel:'PROJECTE PERSONAL / CODI + ARTICLES',telcoTitle:'TelcoLab',telcoSubtitle:'Un flux. Dues arquitectures.',telcoIntro:'Vaig reconstruir la portabilitat de números amb Microsoft Orleans per comparar els actors virtuals amb una arquitectura clàssica de cues. Després vaig escriure el que vaig aprendre, inclòs quan no triar Orleans.',
    telcoTopics:'Grains, streams, Postgres, transaccions i observabilitat amb OpenTelemetry.',read:'Tots els articles a LinkedIn',series:'Explora la sèrie d’articles',articleNote:'Llegeix la sèrie a LinkedIn. Articles en anglès i castellà.',
    titles:['Actors vs. cues: el punt de partida','Construir el flux amb grains','De crides directes a Orleans Streams','Clustering i emmagatzematge a Postgres','Operacions atòmiques entre grains','Veure el clúster amb .NET Aspire','El balanç d’arquitectura a escala','Les proves: una dècada a escala Halo'],
  },
};

export function PersonalProjects() {
  const { locale } = useI18n();
  const c=copy[locale];
  const [metric,setMetric]=useState<'steady'|'burst'|'concurrent'>('steady');
  const linkedin='https://www.linkedin.com/in/amin-chouaibi-el-azaar-223942160/recent-activity/articles/';
  return <div className="personal-projects-grid">
    <article className="rate-lab-project" id="project-ratelimiter"><span className="eyebrow">{c.labLabel}</span><h3>{c.labTitle}</h3><p className="personal-project-intro">{c.labIntro}</p><div className="tag-list"><span>Go</span><span>k6</span><span>Kubernetes / kind</span><span>Prometheus</span></div><div className="benchmark-panel"><div className="benchmark-controls" role="group" aria-label={c.results}>{(['steady','burst','concurrent'] as const).map((key,i)=><button type="button" key={key} aria-pressed={metric===key} onClick={()=>setMetric(key)}>{c.metrics[i]}</button>)}</div><table className="benchmark-table"><caption className="sr-only">{c.metrics[['steady','burst','concurrent'].indexOf(metric)]} · ns/op</caption><thead><tr><th scope="col">{c.algorithm}</th><th scope="col">ns/op</th><th scope="col">{c.memory}</th></tr></thead><tbody>{measurements.map(row=><tr key={row.name}><th scope="row">{row.name}</th><td>{row[metric].toFixed(1)}</td><td>{row.memory}</td></tr>)}</tbody></table><p className="benchmark-provenance">{c.source}</p></div><p className="personal-project-notes">{c.labDetails}</p><div className="personal-project-links"><a href="https://github.com/aminch18/rate-limiter-labs" target="_blank" rel="noopener noreferrer"><Github size={15}/>{c.code}<ArrowUpRight size={14}/></a><a href="https://github.com/aminch18/rate-limiter-labs/tree/main/benchmarks/results" target="_blank" rel="noopener noreferrer">{c.results}<ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/pulse/when-gateway-fell-over-what-i-learned-building-rate-amin-63cae/" target="_blank" rel="noopener noreferrer">{c.labArticle}<ArrowUpRight size={14}/></a></div></article>
    <article className="telcolab-project" id="project-telcolab"><span className="eyebrow">{c.telcoLabel}</span><h3>{c.telcoTitle}</h3><p className="telco-subtitle">{c.telcoSubtitle}</p><p className="personal-project-intro">{c.telcoIntro}</p><div className="tag-list"><span>Microsoft Orleans</span><span>OpenTelemetry</span><span>PostgreSQL</span></div><p className="personal-project-notes">{c.telcoTopics}</p><details className="orleans-series"><summary>{c.series}<ChevronDown size={16}/></summary><ol>{telcoPublications.map(article=><li key={article.id}><a href={publicationHref(publicationDestination(article,locale))} target="_blank" rel="noopener noreferrer"><span>{article.part}</span><strong>{article.title[locale]}{article.part==='02' && locale==='en' && <small className="article-source-language">ES</small>}{article.part==='01' && locale!=='en' && <small className="article-source-language">EN</small>}</strong><ArrowUpRight size={13}/></a></li>)}</ol><p>{c.articleNote}</p></details><div className="personal-project-links"><a href="https://github.com/aminch18/TelcoLab" target="_blank" rel="noopener noreferrer"><Github size={15}/>{c.code}<ArrowUpRight size={14}/></a><a href={linkedin} target="_blank" rel="noopener noreferrer">{c.read}<ArrowUpRight size={14}/></a></div></article>
  </div>;
}

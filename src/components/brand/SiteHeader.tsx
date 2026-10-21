"use client";

import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { useI18n } from '../../i18n/provider';
import { Locale, locales } from '../../i18n/config';

const sections = ['projects', 'writing', 'journey', 'skills', 'about'];
const labels = {
  en: ['Projects', 'Writing', 'Journey', 'Approach', 'About'],
  es: ['Proyectos', 'Escritos', 'Trayectoria', 'Enfoque', 'Sobre mí'],
  ca: ['Projectes', 'Escrits', 'Trajectòria', 'Enfocament', 'Sobre mi'],
};
const copy = {
  en: { nav:'Main navigation', language:'Language', theme:'Switch color theme', menu:'Open navigation', contact:'Let’s talk', home:'Amin Chouaibi — Home' },
  es: { nav:'Navegación principal', language:'Idioma', theme:'Cambiar tema de color', menu:'Abrir navegación', contact:'Hablemos', home:'Amin Chouaibi — Inicio' },
  ca: { nav:'Navegació principal', language:'Idioma', theme:'Canviar el tema de color', menu:'Obrir navegació', contact:'Parlem', home:'Amin Chouaibi — Inici' },
};
const base = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export function SiteHeader({ archive = false }: { archive?: boolean }) {
  const { locale, setLocale } = useI18n();
  const c = copy[locale];
  const [theme, setTheme] = useState<'dark'|'light'>('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(archive ? 'writing' : '');

  useEffect(() => {
    let initial: 'dark'|'light' = 'dark';
    try { if (localStorage.getItem('portfolio-theme') === 'light') initial = 'light'; } catch {}
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    if (archive) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin:'-15% 0px -55% 0px', threshold:0 });
    sections.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [archive]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);

  const home = archive ? `${base}/` : '';
  return <header className="brand-header"><div className="brand-shell header-inner">
    <a href={`${home}#home`} className="brand-mark" aria-label={c.home}>amin<span className="brand-period">.</span><span className="brand-mark-slash">/</span><span className="brand-mark-sub">software<br/>engineer</span></a>
    <nav className={`brand-nav ${menuOpen ? 'is-open' : ''}`} aria-label={c.nav} id="brand-navigation">
      {sections.map((id,index) => <a key={id} href={archive && id==='writing' ? '#writing' : `${home}#${id}`} aria-current={active === id ? (archive ? 'page' : 'location') : undefined} onClick={() => setMenuOpen(false)}><span className="nav-index">0{index+1}</span>{labels[locale][index]}</a>)}
    </nav>
    <div className="header-controls"><label className="locale-control"><span className="sr-only">{c.language}</span><select aria-label={c.language} value={locale} onChange={e => setLocale(e.target.value as Locale)}>{locales.map(l => <option key={l} value={l} lang={l}>{l.toUpperCase()}</option>)}</select><ChevronDown size={12} aria-hidden="true"/></label><button type="button" className="theme-control" aria-label={c.theme} onClick={() => {const next=theme==='dark'?'light':'dark';setTheme(next);document.documentElement.dataset.theme=next;try{localStorage.setItem('portfolio-theme',next);}catch{}}}>{theme==='dark'?<Sun size={17}/>:<Moon size={17}/>}</button><a href={`${home}#contact`} className="header-contact">{c.contact}<ArrowUpRight size={15}/></a><button type="button" className="mobile-menu-control" aria-label={c.menu} aria-expanded={menuOpen} aria-controls="brand-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen?<X size={22}/>:<Menu size={22}/>}</button></div>
  </div></header>;
}

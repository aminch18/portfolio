"use client";

import { useState } from 'react';

export function CompanyLogo({ src, fallback, compact = false }: { src: string; fallback: string; compact?: boolean }) {
  const [failed, setFailed] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  const path = src.startsWith('/') ? `${basePath}${src}` : src;
  return <span className={`company-logo ${compact ? 'company-logo-compact' : ''}`} data-contrast={src.includes('schwarz-digits') ? 'dark' : 'light'} aria-hidden="true">
    {src && !failed ? <img src={path} alt="" width="100" height="44" onError={() => setFailed(true)}/> : <span>{fallback}</span>}
  </span>;
}

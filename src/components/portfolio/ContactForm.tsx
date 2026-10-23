"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle, X } from 'lucide-react';
import { useI18n } from '../../i18n/provider';
import { brandCopy } from '../../data/brandCopy';
import { profile } from '../../data/profileData';

interface ContactFormProps { isOpen: boolean; onClose: () => void; initialSubject?: string; }

export function ContactForm({ isOpen, onClose, initialSubject = '' }: ContactFormProps) {
  const { locale, t } = useI18n();
  const c = brandCopy[locale];
  const dialog = useRef<HTMLDialogElement>(null);
  const request = useRef<AbortController | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  useEffect(() => {
    if (!isOpen || !dialog.current) return;
    const element = dialog.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setStatus('idle');
    setFormData(previous=>({...previous,subject:initialSubject}));
    element.showModal();
    return () => { element.close(); request.current?.abort(); document.body.style.overflow = overflow; };
  }, [isOpen, initialSubject]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('loading');
    request.current = new AbortController();
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: request.current.signal,
        body: JSON.stringify({ access_key: '8ba2b294-ca61-4772-985e-5054e37c3ba3', ...formData }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else setStatus('error');
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError')) setStatus('error');
    }
  };

  return <dialog ref={dialog} className="contact-dialog" aria-labelledby="contact-form-title" onCancel={onClose} onClick={event => { if(event.target === event.currentTarget) onClose(); }}>
    <div className="contact-dialog-inner"><button type="button" className="dialog-close" onClick={onClose} aria-label={c.close}><X size={22}/></button><span className="eyebrow">{c.contactLabel}</span><h2 id="contact-form-title">{c.contactCta}</h2><p className="contact-form-intro">{c.contactText}</p>
    <div role="status" aria-live="polite">{status === 'success' && <div className="form-success"><CheckCircle size={23}/><p>{t('contact.successMessage')}</p></div>}{status === 'error' && <p className="form-error">{t('contact.errorMessage')} <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>}</div>
    {status !== 'success' && <form onSubmit={handleSubmit} className="brand-contact-form"><div className="contact-input-row"><label htmlFor="contact-name">{t('contact.name')}<input id="contact-name" name="name" autoComplete="name" required maxLength={150} value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} placeholder={t('contact.namePlaceholder')}/></label><label htmlFor="contact-email">{t('contact.email')}<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} placeholder={t('contact.emailPlaceholder')}/></label></div><label htmlFor="contact-subject">{t('contact.subject')}<input id="contact-subject" name="subject" required maxLength={250} value={formData.subject} onChange={e=>setFormData({...formData,subject:e.target.value})} placeholder={t('contact.subjectPlaceholder')}/></label><label htmlFor="contact-message">{t('contact.message')}<textarea id="contact-message" name="message" required rows={5} maxLength={8000} value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})} placeholder={t('contact.messagePlaceholder')}/></label><button className="brand-button primary" type="submit" disabled={status==='loading'}>{status==='loading'?t('contact.sending'):t('contact.send')}<ArrowUpRight size={18}/></button></form>}
    </div>
  </dialog>;
}

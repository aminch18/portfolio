"use client";
import React, { useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { useI18n } from "../../i18n/provider";

export function FooterCTA() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const { t } = useI18n();

  return (
    <>
      <section className="relative py-20 px-6 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card backdrop-blur-sm rounded-3xl p-12">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6" 
            style={{ color: 'var(--accent-primary)' }}
          >
            {t('footer.title')}
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            {t('footer.description')}
          </p>

          <button
            onClick={() => setIsContactFormOpen(true)}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl mx-auto" 
            style={{
              background: 'var(--accent-primary)',
              color: '#ffffff'
            }}
          >
            <Mail className="w-5 h-5" style={{ color: '#ffffff' }} />
            <span style={{ color: '#ffffff' }}>{t('footer.getInTouch')}</span>
          </button>
        </div>
      </div>
    </section>

    <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  );
}

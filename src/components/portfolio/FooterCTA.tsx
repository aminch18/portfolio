import React from "react";
import { Mail, ExternalLink } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card backdrop-blur-sm rounded-3xl p-12">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6" 
            style={{ color: 'var(--accent-primary)' }}
          >
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Ready to architect scalable solutions and drive technical
            excellence together?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl" 
              style={{
                background: 'var(--accent-primary)',
                color: '#ffffff'
              }}
            >
              <Mail className="w-5 h-5" style={{ color: '#ffffff' }} />
              <span style={{ color: '#ffffff' }}>Get In Touch</span>
            </button>
            <button 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105" 
              style={{
                border: '2px solid var(--border-primary)',
                background: 'transparent',
                color: 'var(--text-primary)'
              }}
            >
              <ExternalLink className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span style={{ color: 'var(--text-primary)' }}>View Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

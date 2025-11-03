import React from "react";
import { Mail, MapPin, Download, Phone } from "lucide-react";
import { profile } from "../../data/profileData";

interface HeroSectionProps {
  isLoaded: boolean;
}

export function HeroSection({ isLoaded }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${
            isLoaded ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <div className="relative mx-auto w-40 h-40 mt-16 md:mt-0">
            <div className="absolute inset-0 rounded-full animate-pulse" style={{ background: 'var(--accent-primary)', opacity: 0.3 }}></div>
            <div className="absolute inset-2 bg-[var(--bg-primary)] rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={profile.photo} 
                alt={profile.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class='w-full h-full bg-white rounded-full flex items-center justify-center'><span class='text-4xl font-bold text-[var(--accent-primary)]'>AC</span></div>`;
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-[var(--accent-primary)]">
              {profile.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-6">
            {profile.title}
          </h2>

          <div className="flex items-center justify-center gap-6 mb-8 text-[var(--text-secondary)]">
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <MapPin className="w-5 h-5" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <Mail className="w-5 h-5" />
              <span>amin@example.com</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
            Passionate about building scalable backend systems and leading
            technical initiatives that serve
            <span className="text-[var(--accent-primary)] font-semibold"> millions of users </span>
            across enterprise platforms. Expertise in event-driven architectures and
            <span className="text-[var(--accent-primary)] font-semibold"> high-performance systems</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl" 
              style={{
                background: 'var(--accent-primary)',
                color: '#ffffff'
              }}
            >
              <Download className="w-5 h-5" style={{ color: '#ffffff' }} />
              <span style={{ color: '#ffffff' }}>Download CV</span>
            </button>
            <button 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105" 
              style={{
                border: '2px solid var(--border-primary)',
                background: 'transparent',
                color: 'var(--text-primary)'
              }}
            >
              <Phone className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span style={{ color: 'var(--text-primary)' }}>Let's Talk</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { MapPin, FileText, MessageCircle, Linkedin, Github } from "lucide-react";
import { profile } from "../../data/profileData";
import { ContactForm } from "./ContactForm";
import { useI18n } from "../../i18n/provider";
import { getProfileData } from "../../data/profileDataTranslations";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

const ROTATING = [
  "Distributed Systems",
  "Event-Driven Architecture",
  "Kafka · .NET 8/9",
  "Cloud Native",
];

function RotatingWord() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <span
      key={index}
      className="gradient-text font-display font-bold animate-fadeIn"
    >
      {ROTATING[index]}
    </span>
  );
}

interface HeroSectionProps {
  isLoaded: boolean;
}

export function HeroSection({ isLoaded }: HeroSectionProps) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const { locale, t } = useI18n();
  const profileData = getProfileData(locale);

  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  const photoSrc = profile.photo.startsWith("/") ? `${basePath}${profile.photo}` : profile.photo;

  const stats = [
    { value: "8+", label: t("hero.stats.yearsLabel") },
    { value: "60M+", label: t("hero.stats.usersLabel") },
    { value: "100K+", label: t("hero.stats.reviewsLabel") },
  ];

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        {/* Editorial background: gradient blobs + engineering grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="grid-backdrop absolute inset-0 opacity-60" />
          <div
            className="blob w-[40rem] h-[40rem] -top-40 -left-32 animate-gradient"
            style={{ background: "var(--accent-primary)" }}
          />
          <div
            className="blob w-[34rem] h-[34rem] top-1/3 -right-32"
            style={{ background: "var(--accent-tertiary)" }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Profile Image with gradient ring */}
          <div
            className={`mb-10 transform transition-all duration-1000 ${
              isLoaded ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-36 h-36 mt-24 md:mt-20">
              <div className="absolute -inset-1 rounded-full accent-bg animate-gradient glow-shadow" />
              <div className="absolute inset-1 bg-[var(--bg-primary)] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={photoSrc}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: "center 10%" }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class='w-full h-full flex items-center justify-center'><span class='text-4xl font-bold gradient-text'>AC</span></div>`;
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mono text-sm md:text-base tracking-widest uppercase mb-4 inline-block">
              {t("hero.greeting")}
            </p>

            <h1
              className="font-display font-bold leading-[0.95] mb-6 break-words"
              style={{ fontSize: "clamp(2.25rem, 8vw, 6rem)" }}
            >
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <h2 className="text-xl md:text-3xl text-[var(--text-secondary)] mb-2 font-display">
              {profileData.title}
            </h2>
            <div className="text-lg md:text-2xl mb-8 h-8">
              <RotatingWord />
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-[var(--text-secondary)] uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" style={{ color: "var(--accent-primary)" }} />
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                {profileData.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white accent-bg transform transition-all duration-300 hover:scale-105 glow-shadow"
              >
                <FileText className="w-5 h-5" />
                <span>{t("hero.requestCV")}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsContactFormOpen(true)}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid var(--border-strong)",
                  background: "var(--bg-secondary)",
                  color: "var(--text-primary)",
                }}
              >
                <MessageCircle className="w-5 h-5" style={{ color: "var(--accent-primary)" }} />
                <span>{t("hero.letsTalk")}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
                style={{ border: "1px solid var(--border-strong)", background: "var(--bg-secondary)" }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" style={{ color: "var(--accent-primary)" }} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
                style={{ border: "1px solid var(--border-strong)", background: "var(--bg-secondary)" }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" style={{ color: "var(--accent-primary)" }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  );
}

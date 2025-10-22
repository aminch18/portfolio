"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  engineeringJourney,
  education,
  skills,
  languages,
  profile,
} from "../data/profileData";
import {
  Mail,
  Linkedin,
  Github,
  Code,
  Database,
  Cloud,
  Users,
  CheckCircle,
  ExternalLink,
  Zap,
  Rocket,
  Target,
  Languages,
  Phone,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";

const TimelinePortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [expandedCompanies, setExpandedCompanies] = useState<Set<number>>(
    new Set()
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuPosition, setMenuPosition] = useState<"top" | "bottom">("top");
  const [activeSection, setActiveSection] = useState<string>("home");
  const observerRef = useRef<IntersectionObserver | null>(null);
  // Magic line menu scroll logic
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Animate menu to bottom if scrolled down > 100px, else top
      setMenuPosition(currentScrollY > 100 ? "bottom" : "top");
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section tracking for active menu item
  useEffect(() => {
    const sectionIds = ["home", "journey", "education", "skills"];
    const handleSectionScroll = () => {
      let found = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  // Detect scroll for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCompany = (index: number) => {
    setExpandedCompanies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          } else {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all sections after component mounts
    setTimeout(() => {
      // Observe both [data-section] and [id^='company-'] and [id^='role-'] elements
      const sections = [
        ...Array.from(document.querySelectorAll("[data-section]")),
        ...Array.from(document.querySelectorAll('[id^="company-"]')),
        ...Array.from(document.querySelectorAll('[id^="role-"]')),
      ];
      sections.forEach((section) => {
        if (observerRef.current) {
          observerRef.current.observe(section);
        }
      });
    }, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  // All data now imported from profileData.ts

  return (
  <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Hero Section with Special Banner Background */}
      <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6"
      >
        {/* Animated Banner Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-[var(--bg-primary)]"></div>
          {/* Animated Geometric Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-primary)]/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
        </div>

        {/* Floating Navigation Links */}
        <div className="absolute top-8 right-8 flex items-center gap-6">
          {/* Magic Line Menu - Responsive */}
          <div
            className={`fixed left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 sm:gap-6 md:gap-8 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl transition-all duration-500
                ${menuPosition === "top" ? "top-4 sm:top-6" : "bottom-4 sm:bottom-6"}
                bg-[var(--bg-secondary)] border border-[#e3e8ee] shadow-md dark:bg-gradient-to-r dark:from-blue-900/80 dark:via-slate-900/90 dark:to-purple-900/80 dark:border dark:border-blue-500/30 dark:shadow-xl
              `}
          >
            <a
              href="#home"
              className={`font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full transition-all duration-300 ${
                activeSection === "home"
                  ? "bg-[var(--bg-secondary)] text-[var(--accent-primary)] shadow-md"
                  : "text-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              }`}
            >
              Home
            </a>
            <a
              href="#journey"
              className={`font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full transition-all duration-300 ${
                activeSection === "journey"
                  ? "bg-[var(--bg-secondary)] text-[var(--accent-primary)] shadow-md"
                  : "text-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              }`}
            >
              Journey
            </a>
            <a
              href="#education"
              className={`font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full transition-all duration-300 ${
                activeSection === "education"
                  ? "bg-[var(--bg-secondary)] text-[var(--accent-primary)] shadow-md"
                  : "text-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              }`}
            >
              Education
            </a>
            <a
              href="#skills"
              className={`font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full transition-all duration-300 ${
                activeSection === "skills"
                  ? "bg-[var(--bg-secondary)] text-[var(--accent-primary)] shadow-md"
                  : "text-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              }`}
            >
              Skills
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Profile Image */}
          <div
            className={`mb-8 transform transition-all duration-1000 ${
              isLoaded ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-40 h-40 mt-16 md:mt-0">
              <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-[var(--bg-primary)] rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-[var(--accent-primary)]">AC</span>
                </div>
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
                Amin Chouaibi El Azaar
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-6">
              Senior Software Engineer
            </h2>

            <div className="flex items-center justify-center gap-6 mb-8 text-[var(--text-secondary)]">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <MapPin className="w-5 h-5" />
                <span>Barcelona, Spain</span>
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
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Download className="w-5 h-5 text-[var(--accent-primary)] dark:text-white" />
                <span className="text-[var(--accent-primary)] dark:text-white">Download CV</span>
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transform transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5 text-[var(--accent-primary)] dark:text-white" />
                <span className="text-[var(--accent-primary)] dark:text-white">Let's Talk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Journey Timeline */}
      <section
        id="journey"
        className="relative py-20 px-6 mb-32"
        data-section="journey"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible("journey")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Engineering Journey
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              From scaling enterprise platforms to architecting systems that
              serve millions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line - only on desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {engineeringJourney.map((company, index) => {
                const Icon = company.icon;
                const isLeft = company.side === "left";
                const delay = `${index * 200}ms`;
                const isExpanded = expandedCompanies.has(index);
                return (
                  <div key={index} className="relative">
                    {/* Company Card */}
                    <div
                      className={`relative flex flex-col lg:flex-row ${
                        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                      } items-center lg:items-start`}
                      id={`company-${index}`}
                      data-section={`company-${index}`}
                    >
                      {/* Timeline Dot - only on desktop */}
                      <div className="hidden lg:flex absolute left-1/2 top-0 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full items-center justify-center z-30 transition-all duration-1000">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Company Card */}
                      <div
                        className={`w-full lg:w-5/12 ${
                          isLeft ? "lg:pr-8" : "lg:pl-8"
                        } px-2 lg:px-0`}
                      >
                        <div
                          className={`bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-6 transform transition-all duration-1000 hover:border-white/20 cursor-pointer relative z-5 ${
                            isExpanded ? "" : "hover:scale-105"
                          } ${
                            isVisible(`company-${index}`)
                              ? "translate-y-0 opacity-100"
                              : "translate-y-10 opacity-0"
                          }`}
                          style={{ animationDelay: delay }}
                          onClick={() => toggleCompany(index)}
                        >
                          {/* ...existing company card content... */}
                          <div className="mb-4">
                            <div className="flex items-center gap-4 mb-3">
                              {/* Company Logo */}
                              <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                                <img
                                  src={company.companyLogo}
                                  alt={`${company.company} logo`}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.innerHTML = `<span class='text-xs font-bold text-slate-800'>${company.companyFallback}</span>`;
                                      parent.className =
                                        "w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0";
                                    }
                                  }}
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-1">
                                  {company.company}
                                </h3>
                                <div className="flex items-center gap-4 text-slate-400 text-sm">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {company.period}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {company.location}
                                  </div>
                                </div>
                              </div>
                              {/* Expand/Collapse Icon */}
                              <div
                                className={`transform transition-transform duration-300 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              >
                                <svg
                                  className="w-5 h-5 text-slate-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="text-slate-300 mb-4 leading-relaxed">
                            {company.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Users className="w-4 h-4" />
                            <span>
                              {company.roles.length} position
                              {company.roles.length > 1 ? "s" : ""}
                            </span>
                            <span className="text-blue-400">
                              • Click to {isExpanded ? "collapse" : "expand"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Roles */}
                    <div
                      className={`transition-all duration-500 ${
                        isExpanded
                          ? "max-h-screen opacity-100 mt-8 mb-32 sm:mb-40 md:mb-56 lg:mb-20 xl:mb-12"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {/* Per-company timeline for mobile/medium devices - FIXED ALIGNMENT */}
                      <div className="relative block lg:hidden px-2">
                        {/* Vertical timeline line behind all dots/cards */}
                        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full z-0"></div>
                        <div className="relative z-10">
                          {company.roles.map((role, roleIndex) => {
                            const roleDelay = `${(roleIndex + 1) * 200}ms`;
                            const roleId = `role-${index}-${roleIndex}`;
                            return (
                              <div
                                key={roleIndex}
                                className={`flex items-start mb-12 ${roleIndex === company.roles.length - 1 ? 'mb-32 sm:mb-40 md:mb-56 lg:mb-20 xl:mb-12' : ''}`}
                                id={roleId}
                                data-section={roleId}
                              >
                                {/* Timeline Dot */}
                                <div className="flex flex-col items-center mr-4">
                                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center relative">
                                    <div
                                      className="absolute left-1/2 top-1/2 w-2 h-2 bg-white rounded-full"
                                      style={{
                                        transform: "translate(-50%, -50%)",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                {/* Role Card */}
                                <div className="flex-1">
                                  <div
                                    className={`bg-slate-700/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 transform transition-all duration-500 hover:scale-105 hover:border-blue-400/40 translate-x-0 opacity-100`}
                                    style={{ animationDelay: roleDelay }}
                                  >
                                    {/* ...existing role card content... */}
                                    <div className="mb-3">
                                      <h4 className="text-lg font-semibold text-blue-400 mb-1">
                                        {role.title}
                                      </h4>
                                      <p className="text-sm text-slate-400">
                                        {role.period}
                                      </p>
                                    </div>
                                    <div className="space-y-2 mb-4">
                                      {role.achievements
                                        .slice(0, 3)
                                        .map((achievement, idx) => (
                                          <div
                                            key={idx}
                                            className="flex items-start gap-3"
                                          >
                                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">
                                              {achievement}
                                            </span>
                                          </div>
                                        ))}
                                      {role.achievements.length > 3 && (
                                        <div className="text-xs text-slate-400 pl-7">
                                          +{role.achievements.length - 3} more
                                          achievements
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {role.technologies
                                        .slice(0, 6)
                                        .map((tech) => (
                                          <span
                                            key={tech}
                                            className="px-2 py-1 bg-slate-600/30 border border-slate-500/50 rounded-full text-xs text-slate-300"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      {role.technologies.length > 6 && (
                                        <span className="px-2 py-1 text-xs text-slate-400">
                                          +{role.technologies.length - 6} more
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* Desktop version remains unchanged */}
                      <div className="hidden lg:block space-y-12 px-0">
                        {company.roles.map((role, roleIndex) => {
                          const roleDelay = `${(roleIndex + 1) * 200}ms`;
                          const roleId = `role-${index}-${roleIndex}`;
                          return (
                            <div
                              key={roleIndex}
                              id={roleId}
                              data-section={roleId}
                              className="relative z-20"
                            >
                              {/* Role Timeline Dot - only on desktop */}
                              <div
                                className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full items-center justify-center z-25 transition-all duration-500 scale-100 opacity-100"
                                style={{
                                  animationDelay: roleDelay,
                                  top: `${roleIndex * 7}rem`,
                                }}
                              >
                                <div
                                  className="absolute left-1/2 top-1/2 w-2 h-2 bg-white rounded-full"
                                  style={{ transform: "translate(-50%, -50%)" }}
                                ></div>
                              </div>
                              {/* Role Card - left/right on desktop, full width on mobile */}
                              <div
                                className={`flex flex-col lg:flex-row ${
                                  isLeft
                                    ? "lg:justify-start lg:pl-12"
                                    : "lg:justify-end lg:pr-12"
                                } items-center lg:items-start`}
                              >
                                <div className="w-full lg:w-[28rem] lg:max-w-lg">
                                  <div
                                    className={`bg-slate-700/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 lg:p-6 transform transition-all duration-500 hover:scale-105 hover:border-blue-400/40 translate-x-0 opacity-100`}
                                    style={{ animationDelay: roleDelay }}
                                  >
                                    {/* ...existing role card content... */}
                                    <div className="mb-3">
                                      <h4 className="text-lg font-semibold text-blue-400 mb-1">
                                        {role.title}
                                      </h4>
                                      <p className="text-sm text-slate-400">
                                        {role.period}
                                      </p>
                                    </div>
                                    <div className="space-y-2 mb-4">
                                      {role.achievements
                                        .slice(0, 3)
                                        .map((achievement, idx) => (
                                          <div
                                            key={idx}
                                            className="flex items-start gap-3"
                                          >
                                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">
                                              {achievement}
                                            </span>
                                          </div>
                                        ))}
                                      {role.achievements.length > 3 && (
                                        <div className="text-xs text-slate-400 pl-7">
                                          +{role.achievements.length - 3} more
                                          achievements
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {role.technologies
                                        .slice(0, 6)
                                        .map((tech) => (
                                          <span
                                            key={tech}
                                            className="px-2 py-1 bg-slate-600/30 border border-slate-500/50 rounded-full text-xs text-slate-300"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      {role.technologies.length > 6 && (
                                        <span className="px-2 py-1 text-xs text-slate-400">
                                          +{role.technologies.length - 6} more
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative py-20 px-6 bg-[var(--bg-secondary)]/30 mt-32"
        data-section="education"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible("education")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Academic foundation and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                        className={`bg-[var(--bg-secondary)]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform transition-all duration-1000 hover:scale-105 hover:border-white/20 ${
                  isVisible("education")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{edu.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-[var(--accent-primary)]">{edu.institution}</h4>
                    <p className="text-[var(--text-secondary)]">{edu.period}</p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative py-20 px-6 mt-16 sm:mt-20 mb-24 z-10"
        data-section="skills"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform ${typeof window !== 'undefined' && window.innerWidth <= 500 ? 'translate-y-0 opacity-100' : 'transition-all duration-1000 ' + (isVisible("skills") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Technical proficiency across the full engineering stack
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 min-h-0 overflow-visible">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;

              return (
                <div
                  key={index}
                  className={`bg-[var(--bg-secondary)]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform transition-all duration-1000 hover:scale-105 ${
                    typeof window !== 'undefined' && window.innerWidth <= 500
                      ? "translate-y-0 opacity-100"
                      : (isVisible("skills") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    {skillGroup.category}
                  </h3>

                  <div className="space-y-3">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full transform transition-all duration-1500 origin-left`}
                            style={{
                              width:
                                typeof window !== 'undefined' && window.innerWidth <= 500
                                  ? `${skill.level}%`
                                  : isVisible("skills")
                                    ? `${skill.level}%`
                                    : "0%",
                              transitionDelay: `${index * 200 + idx * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages */}
          <div
            className={`bg-[var(--bg-secondary)]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transform transition-all duration-1000 ${
              typeof window !== 'undefined' && window.innerWidth <= 500
                ? "translate-y-0 opacity-100"
                : (isVisible("skills") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">Languages</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((lang, index) => (
                <div key={lang.name} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg
                      className="w-20 h-20 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-slate-700"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={
                          typeof window !== 'undefined' && window.innerWidth <= 500
                            ? `${2 * Math.PI * 40 * (1 - lang.level / 100)}`
                            : isVisible("skills")
                              ? `${2 * Math.PI * 40 * (1 - lang.level / 100)}`
                              : `${2 * Math.PI * 40}`
                        }
                        className="text-yellow-500 transition-all duration-1500"
                        style={{ transitionDelay: `${index * 200}ms` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-[var(--text-primary)]">
                        {lang.level}%
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                    {lang.name}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">{lang.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Ready to architect scalable solutions and drive technical
              excellence together?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Mail className="w-5 h-5 text-[var(--accent-primary)]" />
                <span className="text-[var(--accent-primary)]">Get In Touch</span>
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transform transition-all duration-300 hover:scale-105">
                <ExternalLink className="w-5 h-5 text-[#6c8cbf]" />
                <span className="text-[#6c8cbf]">View Projects</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelinePortfolio;

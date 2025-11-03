"use client";
import React, { useState, useEffect } from "react";
import { usePortfolioVisibility } from "../hooks/usePortfolioVisibility";
import { useNavigationState } from "../hooks/useNavigationState";
import { useCompanyExpansion } from "../hooks/useCompanyExpansion";
import { HeroSection } from "./portfolio/HeroSection";
import { FloatingNavigation } from "./portfolio/FloatingNavigation";
import { JourneySection } from "./portfolio/JourneySection";
import { EducationSection } from "./portfolio/EducationSection";
import { ProjectsSection } from "./portfolio/ProjectsSection";
import { FooterCTA } from "./portfolio/FooterCTA";
import { AnimatedBackground } from "./ui/AnimatedBackground";
import ThemeSwitcher from "./ThemeSwitcher";

const TimelinePortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isVisible } = usePortfolioVisibility();
  const { menuPosition, activeSection } = useNavigationState();
  const { expandedCompanies, toggleCompany } = useCompanyExpansion();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative">
      {/* Global animated background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ThemeSwitcher menuPosition={menuPosition} />
        <FloatingNavigation 
          menuPosition={menuPosition} 
          activeSection={activeSection} 
        />
        
        <HeroSection isLoaded={isLoaded} />
        
        <JourneySection 
          isVisible={isVisible}
          expandedCompanies={expandedCompanies}
          toggleCompany={toggleCompany}
        />
        
        <EducationSection isVisible={isVisible} />
        
        <ProjectsSection isVisible={isVisible} />
        
        <FooterCTA />
      </div>
    </div>
  );
};

export default TimelinePortfolio;

'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
  engineeringJourney,
  education,
  skills,
  expertise,
  languages,
  profile
} from '../data/profileData'
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
  Calendar
} from 'lucide-react'

const TimelinePortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [expandedCompanies, setExpandedCompanies] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const toggleCompany = (index: number) => {
    setExpandedCompanies(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  useEffect(() => {
    setIsLoaded(true)
    
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => {
              const newSet = new Set(prev)
              newSet.add(entry.target.id)
              return newSet
            })
          } else {
            setVisibleSections(prev => {
              const newSet = new Set(prev)
              newSet.delete(entry.target.id)
              return newSet
            })
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe all sections after component mounts
    setTimeout(() => {
      // Observe both [data-section] and [id^='company-'] and [id^='role-'] elements
      const sections = [
        ...Array.from(document.querySelectorAll('[data-section]')),
        ...Array.from(document.querySelectorAll('[id^="company-"]')),
        ...Array.from(document.querySelectorAll('[id^="role-"]'))
      ]
      sections.forEach(section => {
        if (observerRef.current) {
          observerRef.current.observe(section)
        }
      })
    }, 100)
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const isVisible = (sectionId: string) => visibleSections.has(sectionId)

  // All data now imported from profileData.ts

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section with Special Banner Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated Banner Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
          
          {/* Animated Geometric Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating Navigation Links */}
          <div className="absolute top-8 right-8 flex items-center gap-6">
            <a href="#journey" className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105 transform">
              Journey
            </a>
            <a href="#education" className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105 transform">
              Education
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105 transform">
              Skills
            </a>
            <div className="flex items-center gap-3 ml-4">
              <a href="mailto:amin@example.com" className="p-2 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/amin" className="p-2 text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/amin" className="p-2 text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Profile Image */}
          <div className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="relative mx-auto w-40 h-40">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Amin Chouaibi El Azaar
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
              Senior Software Engineer
            </h2>
            
            <div className="flex items-center justify-center gap-6 mb-8 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Barcelona, Spain</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>amin@example.com</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Passionate about building scalable backend systems and leading technical initiatives 
              that serve <span className="text-blue-400 font-semibold">millions of users</span> across 
              enterprise platforms. Expertise in event-driven architectures and 
              <span className="text-purple-400 font-semibold"> high-performance systems</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transform transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5" />
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Journey Timeline */}
      <section id="journey" className="relative py-20 px-6" data-section="journey">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible('journey') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Engineering Journey
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From scaling enterprise platforms to architecting systems that serve millions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {engineeringJourney.map((company, index) => {
                const Icon = company.icon
                const isLeft = company.side === 'left'
                const delay = `${index * 200}ms`
                const isExpanded = expandedCompanies.has(index)
                
                return (
                  <div key={index} className="relative">
                    {/* Company Card */}
                    <div 
                      className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start`}
                      id={`company-${index}`}
                      data-section={`company-${index}`}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-30 transform transition-all duration-1000 ${isVisible(`company-${index}`) || isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                          style={{ animationDelay: delay }}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Company Card */}
                      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'} px-2 md:px-0`}> 
                        <div 
                          className={`bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 transform transition-all duration-1000 hover:border-white/20 cursor-pointer relative z-5 ${isExpanded ? '' : 'hover:scale-105'} ${isVisible(`company-${index}`) ? (isLeft ? 'translate-x-0' : 'translate-x-0') + ' opacity-100' : (isLeft ? '-translate-x-10' : 'translate-x-10') + ' opacity-0'}`}
                          style={{ animationDelay: delay }}
                          onClick={() => toggleCompany(index)}
                        >
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
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.innerHTML = `<span class="text-xs font-bold text-slate-800">${company.companyFallback}</span>`;
                                      parent.className = "w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0";
                                    }
                                  }}
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-1">{company.company}</h3>
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
                              <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-slate-300 mb-4 leading-relaxed">{company.description}</p>
                          
                          {/* Role Count Summary */}
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Users className="w-4 h-4" />
                            <span>{company.roles.length} position{company.roles.length > 1 ? 's' : ''}</span>
                            <span className="text-blue-400">• Click to {isExpanded ? 'collapse' : 'expand'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Roles */}
                    <div className={`transition-all duration-500 ${isExpanded ? 'max-h-screen opacity-100 mt-8 mb-8' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-12 px-2 md:px-4">
                        {company.roles.map((role, roleIndex) => {
                          const roleDelay = `${(roleIndex + 1) * 200}ms`
                          const roleId = `role-${index}-${roleIndex}`;
                          return (
                            <div 
                              key={roleIndex}
                              id={roleId}
                              data-section={roleId}
                              className="relative z-20"
                            >
                              {/* Role Timeline Dot - Properly centered */}
                              <div 
                                className={`absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center z-25 transition-all duration-500 ${isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                                style={{ 
                                  animationDelay: roleDelay,
                                  left: 'calc(50% - 0.75rem)',
                                  top: '1.5rem'
                                }}
                              >
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>

                              {/* Role Card - Positioned on same side as company */}
                              <div className={`flex flex-col md:flex-row ${isLeft ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'} items-center md:items-start`}> 
                                <div className="w-full md:w-[28rem] md:max-w-lg">
                                  <div className={`bg-slate-700/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 md:p-6 transform transition-all duration-500 hover:scale-105 hover:border-blue-400/40 ${isExpanded ? 'translate-x-0 opacity-100' : (isLeft ? '-translate-x-5' : 'translate-x-5') + ' opacity-0'}`}
                                       style={{ animationDelay: roleDelay }}>
                                    
                                    <div className="mb-3">
                                      <h4 className="text-lg font-semibold text-blue-400 mb-1">{role.title}</h4>
                                      <p className="text-sm text-slate-400">{role.period}</p>
                                    </div>
                                    
                                    <div className="space-y-2 mb-4">
                                      {role.achievements.slice(0, 3).map((achievement, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                          <span className="text-slate-300 text-sm">{achievement}</span>
                                        </div>
                                      ))}
                                      {role.achievements.length > 3 && (
                                        <div className="text-xs text-slate-400 pl-7">
                                          +{role.achievements.length - 3} more achievements
                                        </div>
                                      )}
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-1">
                                      {role.technologies.slice(0, 6).map((tech) => (
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
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-6 bg-slate-800/30" data-section="education">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible('education') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-slate-400">
              Academic foundation and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform transition-all duration-1000 hover:scale-105 hover:border-white/20 ${isVisible('education') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{edu.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <h4 className="text-lg text-blue-400">{edu.institution}</h4>
                    <p className="text-slate-400">{edu.period}</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6" data-section="skills">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible('skills') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-400">
              Technical proficiency across the full engineering stack
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              
              return (
                <div 
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform transition-all duration-1000 hover:scale-105 ${isVisible('skills') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                  
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-300">{skill.name}</span>
                          <span className="text-xs text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full transform transition-all duration-1500 origin-left`}
                            style={{ 
                              width: isVisible('skills') ? `${skill.level}%` : '0%',
                              transitionDelay: `${(index * 200) + (idx * 100)}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Languages */}
          <div className={`bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transform transition-all duration-1000 ${isVisible('skills') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Languages</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((lang, index) => (
                <div key={lang.name} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
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
                        strokeDashoffset={isVisible('skills') ? `${2 * Math.PI * 40 * (1 - lang.level / 100)}` : `${2 * Math.PI * 40}`}
                        className="text-yellow-500 transition-all duration-1500"
                        style={{ transitionDelay: `${index * 200}ms` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{lang.level}%</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{lang.name}</h4>
                  <p className="text-sm text-slate-400">{lang.description}</p>
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
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Ready to architect scalable solutions and drive technical excellence together?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Mail className="w-5 h-5" />
                Get In Touch
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transform transition-all duration-300 hover:scale-105">
                <ExternalLink className="w-5 h-5" />
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TimelinePortfolio
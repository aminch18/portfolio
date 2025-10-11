'use client'
import React from 'react'
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react'

interface EducationItem {
  institution: string
  degree: string
  period: string
  status?: string
}

interface CertificationItem {
  name: string
  issuer: string
  year: string
  credential?: string
}

const education: EducationItem[] = [
  {
    institution: "UOC (Universitat Oberta de Catalunya)",
    degree: "Software Engineering (Bachelor)",
    period: "2021 – Present",
    status: "In Progress"
  },
  {
    institution: "Escola Pia Sant Anna, Mataró",
    degree: "HNC in Application Development",
    period: "2017 – 2019",
    status: "Completed"
  },
  {
    institution: "Universitat de Barcelona (UB)",
    degree: "Electrical & Telecom Engineering",
    period: "2015 – 2017",
    status: "Unfinished"
  }
]

const certifications: CertificationItem[] = [
  {
    name: "EF SET English Certificate",
    issuer: "EF Education First",
    year: "2020",
    credential: "71/100 (Proficient)"
  },
  {
    name: "Real-time web applications with SignalR Core",
    issuer: "Udemy",
    year: "2020"
  },
  {
    name: "Hacking for Beginners",
    issuer: "Hackers Academy",
    year: "2021"
  },
  {
    name: ".NET Applications Security & Secure coding training",
    issuer: "Checkmarx",
    year: "2023"
  },
  {
    name: "Security Yellow Belt",
    issuer: "Security Journey",
    year: "2023"
  }
]

const languages = [
  { language: "Spanish", level: "Native" },
  { language: "Catalan", level: "Native" },
  { language: "Moroccan Arabic", level: "Native" },
  { language: "English", level: "Advanced" }
]

const EducationCertifications = () => {
  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Education</span>
            <span className="text-matrix-white"> & Certifications</span>
          </h2>
          <p className="text-matrix-gray text-lg max-w-2xl mx-auto">
            Academic background and professional development journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="skill-card">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-matrix-green" />
              <h3 className="text-xl font-bold text-matrix-cyan">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-matrix-green pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-matrix-white">{edu.degree}</h4>
                    {edu.status && (
                      <span className={`text-xs px-2 py-1 rounded-full font-mono ${
                        edu.status === 'In Progress' 
                          ? 'bg-matrix-green text-matrix-bg' 
                          : edu.status === 'Completed'
                          ? 'bg-matrix-cyan text-matrix-bg'
                          : 'bg-matrix-gray text-matrix-bg'
                      }`}>
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <p className="text-matrix-cyan text-sm mb-1">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-matrix-gray text-sm">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-matrix-green" />
              <h3 className="text-xl font-bold text-matrix-cyan">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-matrix-dark rounded-lg p-4 hover:bg-matrix-surface transition-all duration-300">
                  <h4 className="font-semibold text-matrix-white mb-1">{cert.name}</h4>
                  <p className="text-matrix-green text-sm mb-1">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-matrix-gray text-sm">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.year}</span>
                    </div>
                    {cert.credential && (
                      <span className="text-matrix-cyan text-xs font-mono">
                        {cert.credential}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="glow-text">Languages</span>
          </h3>
        </div>

        <div className="skill-card">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🌍</span>
            <h3 className="text-xl font-bold text-matrix-cyan">Languages</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="text-center p-4 bg-matrix-dark rounded-lg hover:bg-matrix-surface transition-all duration-300">
                <div className="text-lg font-semibold text-matrix-white mb-1">{lang.language}</div>
                <div className="text-sm text-matrix-green font-mono">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationCertifications
'use client'
import React, { useState } from 'react'
import { 
  MapPin, 
  Calendar, 
  Mail, 
  Linkedin, 
  Github,
  ChevronRight,
  Code,
  Database,
  Cloud,
  Users,
  Award,
  Target,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Briefcase
} from 'lucide-react'

const TrustedEngineerPortfolio = () => {
  const [activeSection, setActiveSection] = useState<string>('overview')

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Gartner Digital Markets",
      location: "Barcelona, Spain",
      period: "October 2023 — Present",
      description: "Leading architectural decisions and technical standards across Reviews Platform serving millions of users.",
      highlights: [
        "Lead technical initiatives spanning multiple teams and business metrics",
        "Mentor junior and mid-level engineers, conduct code reviews and interviews", 
        "Define transversal architectural standards across engineering teams",
        "Improve system performance, reliability, and operational efficiency"
      ],
      technologies: ["C#", ".NET 8", "TypeScript", "React", "PostgreSQL", "Kafka", "AWS EKS", "Docker"],
      impact: "Serving millions of users across Capterra, GetApp, and Software Advice"
    },
    {
      title: "Software Advanced Engineer", 
      company: "Gartner Digital Markets",
      location: "Barcelona, Spain",
      period: "May 2022 — October 2023",
      description: "Core member of Reviews Platform team powering multiple marketplaces with reliable insights.",
      highlights: [
        "Designed event-driven pipelines transforming reviews into quality insights",
        "Led refactor of review scoring system into decoupled, resilient architecture", 
        "Built review moderation platform with Next.js/React/TailwindCSS",
        "Implemented gamification systems for high-quality review collection"
      ],
      technologies: ["C#", ".NET 6", "TypeScript", "Next.js", "Angular", "PostgreSQL", "Kafka", "AWS"],
      impact: "Processing millions of reviews daily with enhanced reliability"
    },
    {
      title: "Software Development Engineer",
      company: "Plain Concepts", 
      location: "Barcelona, Spain",
      period: "September 2019 — May 2022",
      description: "Backend developer on Lidl Plus App serving 60+ million users across Europe.",
      highlights: [
        "Migrated monolithic systems to microservices architecture",
        "Implemented CQRS + DDD patterns for critical business domains",
        "Built communication systems impacting millions of daily users", 
        "Integrated Azure services: Functions, Cosmos DB, Event Hub, Service Bus"
      ],
      technologies: [".NET 6", "Azure Functions", "Cosmos DB", "Microservices", "CQRS", "DDD"],
      impact: "Supporting 60+ million European users with high availability"
    }
  ]

  const skills = {
    "Backend Development": {
      technologies: [".NET 8", "C#", "Node.js", "TypeScript", "API Design"],
      experience: "5+ years",
      icon: Code
    },
    "Cloud & Architecture": {
      technologies: ["AWS", "Azure", "Microservices", "Event-driven", "CQRS"],
      experience: "4+ years", 
      icon: Cloud
    },
    "Data & Databases": {
      technologies: ["PostgreSQL", "Cosmos DB", "Redis", "Kafka", "Entity Framework"],
      experience: "5+ years",
      icon: Database
    },
    "Leadership & Mentoring": {
      technologies: ["Code Reviews", "Technical Interviews", "Architecture Standards", "Team Mentoring"],
      experience: "2+ years",
      icon: Users
    }
  }

  const keyMetrics = [
    {
      value: "60M+",
      label: "Users Served",
      description: "Across Lidl Plus and Gartner platforms"
    },
    {
      value: "5+",
      label: "Years Experience", 
      description: "Backend development and architecture"
    },
    {
      value: "15+",
      label: "Microservices",
      description: "Designed and implemented"
    },
    {
      value: "3",
      label: "Major Migrations",
      description: "Monolith to microservices, zero downtime"
    }
  ]

  const principles = [
    {
      title: "Reliability First",
      description: "Building systems that work consistently at scale, with proper monitoring and error handling.",
      icon: CheckCircle
    },
    {
      title: "Clear Communication", 
      description: "Writing clean code, comprehensive documentation, and fostering team understanding.",
      icon: Users
    },
    {
      title: "Continuous Learning",
      description: "Staying current with technology trends while applying proven, stable solutions.",
      icon: TrendingUp
    },
    {
      title: "Business Impact",
      description: "Focusing on solutions that drive real business value and user satisfaction.",
      icon: Target
    }
  ]

  const navigation = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'principles', label: 'Engineering Principles' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">Amin Chouaibi El Azaar</h1>
                <p className="text-xl text-blue-600 font-medium">Senior Software Engineer</p>
                <div className="flex items-center gap-4 text-slate-600 mt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Barcelona, Spain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Gartner Digital Markets</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <a href="mailto:amin.chouaibi@example.com" 
                 className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <a href="#" 
                 className="flex items-center gap-2 px-4 py-2 border border-slate-300 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-md">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="#" 
                 className="flex items-center gap-2 px-4 py-2 border border-slate-300 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-md">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 p-6 sticky top-24">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700 shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeSection === item.id ? 'rotate-90' : ''
                    }`} />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Professional Overview</h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Senior Software Engineer with <strong>5+ years of experience</strong> building scalable backend systems 
                    and leading technical initiatives. Specialized in <strong>event-driven architectures</strong>, 
                    <strong>microservices</strong>, and <strong>performance optimization</strong>. 
                    Proven track record of delivering solutions that serve <strong>millions of users</strong> while 
                    mentoring development teams and establishing technical standards.
                  </p>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {keyMetrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                        <div className="font-semibold text-slate-800 mb-1">{metric.label}</div>
                        <div className="text-sm text-slate-600">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Current Focus</h3>
                  <p className="text-slate-700 leading-relaxed">
                    At Gartner Digital Markets, I'm leading architectural decisions for the Reviews Platform that powers 
                    Capterra, GetApp, and Software Advice. My work involves mentoring engineers, establishing technical 
                    standards, and ensuring our systems can reliably serve millions of users while maintaining high 
                    performance and availability.
                  </p>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Professional Experience</h2>
                {experience.map((job, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
                        <h4 className="text-lg text-blue-600 font-semibold">{job.company}</h4>
                        <div className="flex items-center gap-4 text-slate-600 mt-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="bg-blue-50/50 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-slate-800 mb-2">Key Contributions:</h5>
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-700">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-slate-200 pt-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h5 className="font-semibold text-slate-800 mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="lg:text-right">
                          <div className="text-sm text-slate-600 font-medium">Impact:</div>
                          <div className="text-sm text-blue-600">{job.impact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Technical Expertise</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, data]) => {
                    const Icon = data.icon
                    return (
                      <div key={category} className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800">{category}</h3>
                            <p className="text-sm text-slate-600">{data.experience} experience</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {data.technologies.map((tech) => (
                            <div key={tech} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-slate-700">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Principles Section */}
            {activeSection === 'principles' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Engineering Principles</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {principles.map((principle, index) => {
                    const Icon = principle.icon
                    return (
                      <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-slate-800">{principle.title}</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{principle.description}</p>
                      </div>
                    )
                  })}
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/60 p-8 text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Ready to Collaborate?</h3>
                  <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                    I'm passionate about building reliable, scalable systems and helping teams deliver exceptional results. 
                    Let's discuss how we can work together on your next technical challenge.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:amin.chouaibi@example.com" 
                       className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                      <Mail className="w-4 h-4" />
                      Let's Talk
                    </a>
                    <a href="#" 
                       className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                      View LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedEngineerPortfolio
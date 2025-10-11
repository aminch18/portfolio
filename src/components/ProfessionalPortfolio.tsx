'use client'
import React from 'react'
import { 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Users
} from 'lucide-react'

const ProfessionalPortfolio = () => {
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
      technologies: ["C#", ".NET 8", "TypeScript", "React", "PostgreSQL", "Kafka", "AWS EKS", "Docker"]
    },
    {
      title: "Software Advanced Engineer",
      company: "Gartner Digital Markets",
      location: "Barcelona, Spain", 
      period: "May 2022 — October 2023",
      description: "Core member of Reviews Platform team powering Capterra, GetApp, and Software Advice marketplaces.",
      highlights: [
        "Designed event-driven pipelines transforming reviews into quality insights",
        "Led refactor of review scoring system into decoupled, resilient architecture",
        "Built review moderation platform with Next.js/React/TailwindCSS",
        "Implemented gamification systems for high-quality review collection"
      ],
      technologies: ["C#", ".NET 6", "TypeScript", "Next.js", "Angular", "PostgreSQL", "Kafka", "AWS"]
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
      technologies: [".NET 6", "Azure Functions", "Cosmos DB", "Microservices", "CQRS", "DDD"]
    },
    {
      title: "Junior Developer",
      company: "Pasiona Consulting", 
      location: "Barcelona, Spain",
      period: "May 2018 — September 2019",
      description: "Full-stack development focused on SharePoint Online and Azure Functions.",
      highlights: [
        "Developed SPFx components with React.js and TypeScript",
        "Built Azure Functions as service orchestrators",
        "Applied Test Driven Development and Domain Driven Design",
        "Used Azure DevOps for complete CI/CD workflows"
      ],
      technologies: ["React.js", "TypeScript", "SharePoint SPFx", "Azure Functions", "TDD", "Azure DevOps"]
    }
  ]

  const skills = {
    "Backend Development": [".NET 8", "C#", "Node.js", "TypeScript", "API Design"],
    "Databases": ["PostgreSQL", "Cosmos DB", "Redis", "Entity Framework"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
    "Architecture": ["Microservices", "Event-driven", "CQRS", "DDD", "System Design"],
    "Frontend": ["React", "Next.js", "TypeScript", "TailwindCSS", "Angular"]
  }

  const achievements = [
    {
      title: "Performance Optimization",
      description: "Led API performance improvements reducing response times and enhancing user experience",
      impact: "Improved system reliability for millions of daily users"
    },
    {
      title: "Microservices Migration",
      description: "Successfully migrated monolithic architecture to microservices with zero downtime",
      impact: "Enabled independent team scaling and faster deployment cycles"
    },
    {
      title: "Technical Leadership",
      description: "Mentoring engineers and establishing architectural standards across multiple teams",
      impact: "Improved code quality and development velocity organization-wide"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Amin Chouaibi El Azaar</h1>
              <h2 className="text-xl text-blue-600 font-medium mb-4">Senior Software Engineer</h2>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Barcelona, Spain</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>amin.chouaibi@example.com</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Senior Software Engineer with 5+ years of experience building scalable backend systems and leading technical initiatives. 
              Specialized in event-driven architectures, microservices, and performance optimization. 
              Proven track record of delivering solutions that serve millions of users while mentoring development teams.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <h4 className="text-lg text-blue-600 font-medium">{job.company}</h4>
                    <div className="flex items-center gap-4 text-gray-600 mt-1">
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
                
                <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  {category}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{achievement.description}</p>
                <p className="text-blue-600 font-medium text-sm">{achievement.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-700 mb-6">
            Interested in discussing backend architecture, technical leadership, or potential opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:amin.chouaibi@example.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProfessionalPortfolio
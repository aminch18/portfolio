'use client'
import React from 'react'
import { Calendar, MapPin } from 'lucide-react'

interface Position {
  title: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
}

interface Company {
  name: string
  location: string
  period: string
  positions: Position[]
}

const companies: Company[] = [
  {
    name: "Gartner Digital Markets",
    location: "Barcelona, Spain",
    period: "May 2022 — Present",
    positions: [
      {
        title: "Senior Software Engineer",
        period: "October 2023 — Present",
        description: "Advanced to Senior role within the Reviews Platform team, taking on increased leadership responsibilities and driving architectural decisions. Leading critical projects, mentoring engineers, and establishing technical standards across the organization.",
        highlights: [
          "Leading junior and mid-level engineers, conducting technical interviews and code reviews",
          "Defining and implementing transversal architectural standards across teams",
          "Leading complex initiatives that span multiple teams and impact business metrics",
          "Architecting resilient, scalable solutions for high-traffic distributed systems",
          "Working closely with Product, SEO, and Site teams on strategic initiatives",
          "Leading efforts to improve system performance, reliability, and operational efficiency"
        ],
        technologies: ["C#", ".NET 8", ".NET 9", "TypeScript", "Next.js", "React", "PostgreSQL", "Kafka", "AWS EKS", "OpenSearch", "Docker", "GitHub Actions"]
      },
      {
        title: "Software Advanced Engineer",
        period: "May 2022 — October 2023",
        description: "Member of the Reviews Platform team powering all Gartner Digital Markets marketplaces (Capterra, GetApp, Software Advice). Focused on capturing, processing, and distributing millions of software reviews to generate reliable, actionable insights.",
        highlights: [
          "Designed and maintained pipelines transforming reviews into quality insights",
          "Implemented event-driven architectures with Kafka/Confluent Cloud",
          "Led the refactor of the review scoring system into a decoupled, resilient engine",
          "Developed review forms in Next.js/React/TailwindCSS with JWT authentication",
          "Built gamification systems incentivizing vendors to collect high-quality reviews",
          "Evolved the review moderation platform from Angular to Next.js",
          "Built internal tools for large-scale management of quality, fraud, and duplicate reviews"
        ],
        technologies: ["C#", ".NET 6", "TypeScript", "Angular", "Next.js", "React", "TailwindCSS", "PostgreSQL", "AWS", "Kafka", "Docker", "Datadog", "Splunk"]
      }
    ]
  },
  {
    name: "Plain Concepts",
    location: "Barcelona, Spain", 
    period: "September 2019 — May 2022",
    positions: [
      {
        title: "Software Development Engineer",
        period: "September 2019 — May 2022",
        description: "Working on Lidl Plus App project serving more than 60 million users. High-availability backend system based on microservices, cloud, data analysis, real-time data ingestion, and high security.",
        highlights: [
          "IT Support Consultant (6 months): Built and maintained internal applications for Customer Support",
          "Backend Sr Software Developer (2 years): Migrated monolithic systems to microservices in .NET",
          "Worked on Communications squad implementing user promotion and notification systems", 
          "Designed and led migration of Alerts system from monolith to microservices",
          "Upgraded systems from .NET Core 3.1 to .NET 6",
          "Implemented CQRS + DDD architectures for critical domains",
          "Integrated Azure services: Functions, Cosmos DB, Event Hub, Service Bus, Notification Hub",
          "Developed communication systems directly impacting millions of users"
        ],
        technologies: [".NET 6", "C#", "Azure Functions", "Cosmos DB", "Event Hub", "Service Bus", "AKS", "Terraform", "Azure Pipelines", "CQRS", "DDD"]
      }
    ]
  },
  {
    name: "Pasiona Consulting",
    location: "Barcelona, Spain",
    period: "May 2018 — September 2019", 
    positions: [
      {
        title: "Junior Developer",
        period: "June 2019 — September 2019",
        description: "Worked with expert senior developers on maintainable code and Office 365 platform solutions, focusing on SharePoint Online and Azure Functions development.",
        highlights: [
          "Developed SPFx components with React.js in TypeScript for SharePoint Online",
          "Built Azure Functions operating as orchestrators for different services",
          "Worked with multitasking programming and Test Driven Development methodology",
          "Used Azure DevOps: Azure Boards (SCRUM), Azure Repos (Git Flow), Azure Pipelines (CI/CD)",
          "Obtained and analyzed data to assess system capabilities through brainstorming and retrospectives"
        ],
        technologies: ["React.js", "TypeScript", "SharePoint SPFx", "Azure Functions", "Azure DevOps", "SCRUM", "Git Flow", "TDD"]
      },
      {
        title: "Trainee Developer", 
        period: "May 2018 — June 2019",
        description: "Dual internship program focusing on both Front-end and Back-end development while studying for higher certification. Gained comprehensive experience in full-stack development.",
        highlights: [
          "Backend development with .NET & .NET Core Framework, ASP.NET & ASP.NET Core",
          "Worked with Entity Framework & Entity Framework Core, Bot Framework SDK v3",
          "Learned and applied Domain Driven Design paradigm and Test Driven Development",
          "Published and tracked App Services in Azure, implemented comprehensive unit testing",
          "Frontend development with React.js ES6, TypeScript, HTML5",
          "Used Chrome Developer Tools, npm, yarn & webpack for development workflow"
        ],
        technologies: [".NET Framework", ".NET Core", "ASP.NET Core", "Entity Framework", "React.js", "TypeScript", "HTML5", "Azure App Services", "DDD", "TDD"]
      }
    ]
  }
]

const ExperienceTimeline = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Employment</span>
            <span className="text-matrix-white"> History</span>
          </h2>
          <p className="text-matrix-gray text-lg max-w-2xl mx-auto">
            A journey through backend engineering, platform development, and architectural leadership
          </p>
        </div>

        <div className="space-y-16">
          {companies.map((company, companyIndex) => (
            <div key={companyIndex} className="relative">
              {/* Company Header */}
              <div className="flex items-start gap-6 mb-8">
                {/* Company Logo Placeholder */}
                <div className="w-16 h-16 bg-matrix-surface border border-matrix-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-matrix-green font-bold text-lg">
                    {company.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                
                {/* Company Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-matrix-green mb-2">
                    {company.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-matrix-gray mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{company.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Positions */}
              <div className="space-y-8 ml-22">
                {company.positions.map((position, positionIndex) => (
                  <div key={positionIndex} className="bg-matrix-surface border border-matrix-border rounded-lg p-6 hover:border-matrix-green transition-all duration-300">
                    {/* Position Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-matrix-cyan mb-2">
                        {position.title}
                      </h4>
                      <div className="flex items-center gap-2 text-matrix-gray text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{position.period}</span>
                      </div>
                      <p className="text-matrix-white leading-relaxed">
                        {position.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {position.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-matrix-white flex items-start gap-2">
                            <span className="text-matrix-green mt-1 flex-shrink-0">•</span>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {position.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-matrix-dark border border-matrix-green rounded text-xs text-matrix-green font-mono hover:bg-matrix-green hover:text-matrix-bg transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
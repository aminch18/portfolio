'use client'
import React, { useState } from 'react'
import { 
  Book, 
  Code, 
  Play, 
  Copy, 
  Check, 
  FileText, 
  Shield, 
  Zap, 
  Database,
  Users,
  Settings,
  BarChart3,
  Globe,
  Lock,
  Webhook
} from 'lucide-react'

const APIPortfolio = () => {
  const [activeEndpoint, setActiveEndpoint] = useState<keyof typeof endpoints>('overview')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const endpoints = {
    overview: {
      title: 'Amin Chouaibi El Azaar API',
      description: 'Senior Software Engineer with 5+ years of experience building scalable backend systems',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">🚀 Professional Overview</h3>
            <div className="space-y-3 text-sm">
              <div><strong>Role:</strong> Senior Software Engineer @ Gartner Digital Markets</div>
              <div><strong>Experience:</strong> 5+ years in backend development</div>
              <div><strong>Specialization:</strong> Event-driven architectures, microservices, performance optimization</div>
              <div><strong>Scale:</strong> Systems serving 60M+ users with 30M+ daily requests</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-green-400">✅ Achievements</h4>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>• 94% performance improvement (2.5s → 150ms)</li>
                <li>• 68% cost reduction while handling 10x traffic</li>
                <li>• 99.99% delivery rate for 1B+ notifications</li>
                <li>• Zero-downtime microservices migration</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-400">🛠 Tech Stack</h4>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>• .NET 6, Node.js, TypeScript</li>
                <li>• Kafka, Redis, Cosmos DB</li>
                <li>• Docker, Kubernetes, Azure</li>
                <li>• CQRS, Event Sourcing, DDD</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    experience: {
      title: 'GET /experience',
      description: 'Retrieve professional experience and career progression',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="border-b border-slate-700 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-mono">GET</span>
                <code className="text-blue-400">/api/v1/experience</code>
              </div>
              <p className="text-sm text-slate-400">Returns detailed career history with achievements and impact metrics</p>
            </div>
            
            <div className="p-4">
              <h4 className="text-sm font-semibold mb-2 text-slate-300">Response Example:</h4>
              <div className="relative">
                <pre className="bg-slate-950 p-4 rounded text-xs overflow-x-auto">
{`{
  "currentRole": {
    "title": "Senior Software Engineer",
    "company": "Gartner Digital Markets",
    "duration": "2022 - Present",
    "achievements": [
      "Led API performance optimization reducing response time by 94%",
      "Architected event-driven system handling 30M daily reviews",
      "Implemented CQRS pattern improving query performance to 150ms",
      "Reduced infrastructure costs by $4,500/month (30% reduction)"
    ],
    "technologies": [".NET 6", "Kafka", "Redis", "Cosmos DB", "Docker"]
  },
  "previousRoles": [
    {
      "title": "Software Developer",
      "company": "Plain Concepts",
      "duration": "2019 - 2022",
      "project": "Lidl Plus App (60M+ users)",
      "achievements": [
        "Built notification system with 99.99% delivery rate",
        "Processed 1B+ monthly notifications",
        "Migrated monolith to microservices with zero downtime"
      ]
    }
  ],
  "totalExperience": "5+ years",
  "usersImpacted": "60M+",
  "systemsBuilt": 15
}`}
                </pre>
                <button 
                  onClick={() => copyToClipboard(`{
  "currentRole": {
    "title": "Senior Software Engineer",
    "company": "Gartner Digital Markets",
    "duration": "2022 - Present"
  }
}`, 'experience')}
                  className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded"
                >
                  {copiedCode === 'experience' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    skills: {
      title: 'GET /skills',
      description: 'Retrieve technical skills and proficiency levels',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="border-b border-slate-700 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-mono">GET</span>
                <code className="text-blue-400">/api/v1/skills</code>
              </div>
              <p className="text-sm text-slate-400">Returns categorized technical skills with proficiency levels</p>
            </div>
            
            <div className="p-4">
              <div className="relative">
                <pre className="bg-slate-950 p-4 rounded text-xs overflow-x-auto">
{`{
  "backend": {
    ".NET": { "level": "expert", "years": 5, "projects": 12 },
    "Node.js": { "level": "advanced", "years": 3, "projects": 8 },
    "TypeScript": { "level": "expert", "years": 4, "projects": 15 }
  },
  "databases": {
    "Cosmos DB": { "level": "expert", "scale": "60M+ users" },
    "Redis": { "level": "advanced", "use_case": "caching & sessions" },
    "PostgreSQL": { "level": "intermediate", "projects": 5 }
  },
  "architecture": {
    "Microservices": { "level": "expert", "experience": "15+ services" },
    "Event-driven": { "level": "expert", "throughput": "1B+ events" },
    "CQRS": { "level": "advanced", "performance_gain": "94%" },
    "DDD": { "level": "intermediate", "projects": 3 }
  },
  "devops": {
    "Docker": { "level": "advanced", "containers": "20+ services" },
    "Kubernetes": { "level": "intermediate", "clusters": 3 },
    "Azure": { "level": "expert", "services": "Functions, Service Bus, AKS" }
  }
}`}
                </pre>
                <button 
                  onClick={() => copyToClipboard('curl -X GET /api/v1/skills', 'skills')}
                  className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded"
                >
                  {copiedCode === 'skills' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    projects: {
      title: 'GET /projects',
      description: 'Retrieve portfolio of major projects and their impact',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="border-b border-slate-700 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-mono">GET</span>
                <code className="text-blue-400">/api/v1/projects</code>
              </div>
              <p className="text-sm text-slate-400">Returns major projects with impact metrics and technical details</p>
            </div>
            
            <div className="p-4 space-y-4">
              {[
                {
                  name: "Gartner Reviews Platform",
                  description: "Event-driven review processing system",
                  impact: "30M daily reviews, 94% performance improvement",
                  tech: [".NET 6", "Kafka", "CQRS", "Redis"]
                },
                {
                  name: "Lidl Plus Notifications", 
                  description: "Scalable notification delivery system",
                  impact: "1B+ monthly notifications, 99.99% delivery rate",
                  tech: ["Azure Functions", "Service Bus", "Cosmos DB"]
                },
                {
                  name: "Microservices Migration",
                  description: "Zero-downtime monolith decomposition", 
                  impact: "68% cost reduction, 10x traffic handling",
                  tech: ["Docker", "Kubernetes", "API Gateway"]
                }
              ].map((project, index) => (
                <div key={index} className="bg-slate-950/50 border border-slate-600 rounded p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">{project.name}</h4>
                  <p className="text-sm text-slate-300 mb-2">{project.description}</p>
                  <div className="text-xs text-green-400 mb-2">📈 {project.impact}</div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-800 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    contact: {
      title: 'POST /contact',
      description: 'Send a message or collaboration request',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="border-b border-slate-700 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">POST</span>
                <code className="text-blue-400">/api/v1/contact</code>
              </div>
              <p className="text-sm text-slate-400">Submit contact form or collaboration inquiry</p>
            </div>
            
            <div className="p-4">
              <h4 className="text-sm font-semibold mb-4 text-slate-300">Request Body:</h4>
              <div className="relative mb-4">
                <pre className="bg-slate-950 p-4 rounded text-xs overflow-x-auto">
{`{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "type": "collaboration | job_opportunity | general"
}`}
                </pre>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-950/50 border border-slate-600 rounded p-4">
                  <h5 className="font-semibold text-blue-400 mb-2">📧 Email</h5>
                  <p className="text-sm">amin.chouaibi@example.com</p>
                </div>
                <div className="bg-slate-950/50 border border-slate-600 rounded p-4">
                  <h5 className="font-semibold text-blue-400 mb-2">💼 LinkedIn</h5>
                  <p className="text-sm">linkedin.com/in/amin-chouaibi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const sidebarItems = [
    { id: 'overview' as const, label: 'Overview', icon: Globe },
    { id: 'experience' as const, label: 'Experience', icon: Briefcase },
    { id: 'skills' as const, label: 'Skills', icon: Code },
    { id: 'projects' as const, label: 'Projects', icon: Database },
    { id: 'contact' as const, label: 'Contact', icon: Users }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Book className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold">Amin's API</h1>
              <p className="text-xs text-slate-400">v1.0.0</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveEndpoint(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeEndpoint === item.id 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 space-y-1">
            <div>🚀 Response Time: ~50ms</div>
            <div>📊 Uptime: 99.9%</div>
            <div>🔒 Auth: Bearer Token</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{endpoints[activeEndpoint].title}</h1>
              <p className="text-slate-400">{endpoints[activeEndpoint].description}</p>
            </div>
            
            {endpoints[activeEndpoint].content}
          </div>
        </div>
      </div>
    </div>
  )
}

// Fix missing import
import { Briefcase } from 'lucide-react'

export default APIPortfolio
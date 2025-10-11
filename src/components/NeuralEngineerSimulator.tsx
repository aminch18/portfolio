'use client'
import React, { useState, useEffect } from 'react'
import { 
  Brain, 
  Zap, 
  Network, 
  Code2, 
  Database,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Target,
  GitBranch
} from 'lucide-react'

interface ThoughtProcess {
  id: string
  title: string
  period: string
  company: string
  problem: string
  thoughts: ThoughtStep[]
  solution: string
  realMetrics: {
    challenge: string
    solution: string
    impact: string
    technologies: string[]
  }
}

interface ThoughtStep {
  type: 'analysis' | 'concern' | 'idea' | 'decision'
  text: string
  delay: number
}

const NeuralEngineerSimulator = () => {
  const [activeScenario, setActiveScenario] = useState<number>(0)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [neuralConnections, setNeuralConnections] = useState<Array<{id: number, x: number, y: number, active: boolean}>>([])

  // Generate neural network background
  useEffect(() => {
    const connections = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      active: false
    }))
    setNeuralConnections(connections)
  }, [])

  // Animate neural connections
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralConnections(prev => 
        prev.map(conn => ({
          ...conn,
          active: Math.random() > 0.7
        }))
      )
    }, 800)
    return () => clearInterval(interval)
  }, [])

  // Real scenarios based on your actual experience
  const realScenarios: ThoughtProcess[] = [
    {
      id: 'gartner-performance',
      title: 'Reviews Platform Performance Crisis',
      period: 'October 2023 - Present',
      company: 'Gartner Digital Markets',
      problem: '🚨 Reviews API serving millions of requests became unacceptably slow. Users experiencing 2+ second delays.',
      thoughts: [
        { type: 'analysis', text: 'Analyzing the Reviews Platform - we process millions of reviews daily across Capterra, GetApp, Software Advice', delay: 1800 },
        { type: 'concern', text: 'Current monolithic queries are hitting the database hard. Each review loads user data, comments, ratings separately', delay: 2100 },
        { type: 'analysis', text: 'Looking at our event-driven architecture with Kafka - we can leverage this for better data flow', delay: 1900 },
        { type: 'idea', text: 'What if we implement CQRS pattern? Separate read/write models optimized for different access patterns', delay: 2200 },
        { type: 'decision', text: 'Refactor the review scoring system into a decoupled, resilient engine with materialized views', delay: 1700 },
        { type: 'idea', text: 'Use PostgreSQL materialized views for pre-aggregated review data, refresh via Kafka events', delay: 2000 },
        { type: 'decision', text: 'Implement event-driven pipelines to transform reviews into quality insights in real-time', delay: 1600 }
      ],
      solution: 'Led the refactor of review scoring system into decoupled, resilient engine with CQRS pattern',
      realMetrics: {
        challenge: 'Slow review API affecting millions of users across multiple marketplaces',
        solution: 'Event-driven architecture with CQRS, materialized views, and Kafka pipelines',
        impact: 'Transformed reviews into quality insights for reliable, actionable data',
        technologies: ['C#', '.NET 8', 'PostgreSQL', 'Kafka', 'AWS EKS', 'OpenSearch']
      }
    },
    {
      id: 'lidl-notifications',
      title: 'Lidl Plus Notification Scaling Challenge',
      period: 'September 2019 - May 2022',
      company: 'Plain Concepts',
      problem: '⚡ Need to scale notification system for 60+ million Lidl Plus users with high availability requirements.',
      thoughts: [
        { type: 'analysis', text: 'Lidl Plus has 60+ million users. Current notification system is synchronous and fragile', delay: 1600 },
        { type: 'concern', text: 'If one notification fails, entire batch fails. Not acceptable for this scale', delay: 2000 },
        { type: 'idea', text: 'Microservices architecture! Break down the monolith into specialized services', delay: 1800 },
        { type: 'analysis', text: 'Azure cloud services fit perfectly - Functions for auto-scaling, Service Bus for messaging', delay: 1700 },
        { type: 'decision', text: 'Migrate from monolith to microservices using Azure Functions, Cosmos DB, Event Hub', delay: 1900 },
        { type: 'idea', text: 'CQRS + DDD for critical domains. Each service owns its data and business logic', delay: 2100 },
        { type: 'decision', text: 'Implement promotion and notification systems with event-driven patterns', delay: 1500 }
      ],
      solution: 'Migrated monolithic systems to microservices with Azure cloud services',
      realMetrics: {
        challenge: 'Scale notification system for 60+ million users with high availability',
        solution: 'Microservices migration with Azure Functions, Cosmos DB, CQRS + DDD patterns',
        impact: 'Communication systems directly impacting millions of users',
        technologies: ['.NET 6', 'Azure Functions', 'Cosmos DB', 'Event Hub', 'Service Bus', 'AKS']
      }
    },
    {
      id: 'gartner-modernization',
      title: 'Review Moderation Platform Evolution',
      period: 'May 2022 - October 2023',
      company: 'Gartner Digital Markets',
      problem: '🔄 Legacy Angular review moderation platform needs modernization for better developer experience.',
      thoughts: [
        { type: 'analysis', text: 'Current Angular platform works but development velocity is slow. Need modern stack', delay: 1700 },
        { type: 'idea', text: 'Next.js with React would give us better performance and developer experience', delay: 1900 },
        { type: 'analysis', text: 'We need to handle quality, fraud, and duplicate reviews at scale. TypeScript for type safety', delay: 1800 },
        { type: 'decision', text: 'Evolve the review moderation platform from Angular to Next.js/React/TailwindCSS', delay: 1600 },
        { type: 'idea', text: 'Build internal tools for large-scale review management with modern UI/UX', delay: 2000 },
        { type: 'decision', text: 'Implement JWT authentication and build gamification systems for vendors', delay: 1400 },
        { type: 'analysis', text: 'Enhanced developer experience leads to faster feature delivery and better quality', delay: 1800 }
      ],
      solution: 'Evolved review moderation platform to modern Next.js stack with enhanced tooling',
      realMetrics: {
        challenge: 'Modernize legacy Angular platform for better developer experience',
        solution: 'Migration to Next.js/React/TailwindCSS with modern tooling and gamification',
        impact: 'Enhanced developer experience and operational excellence for review management',
        technologies: ['TypeScript', 'Next.js', 'React', 'TailwindCSS', 'JWT', 'Angular']
      }
    }
  ]

  // Auto-play thoughts
  useEffect(() => {
    if (!isPlaying) return

    const scenario = realScenarios[activeScenario]
    if (currentStep >= scenario.thoughts.length) {
      setIsPlaying(false)
      return
    }

    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1)
    }, scenario.thoughts[currentStep]?.delay || 2000)

    return () => clearTimeout(timer)
  }, [isPlaying, currentStep, activeScenario])

  const startSimulation = (scenarioIndex: number) => {
    setActiveScenario(scenarioIndex)
    setCurrentStep(0)
    setIsPlaying(true)
  }

  const resetSimulation = () => {
    setIsPlaying(false)
    setCurrentStep(0)
  }

  const getThoughtIcon = (type: string) => {
    switch (type) {
      case 'analysis': return <Database className="w-5 h-5 text-cyan-400" />
      case 'concern': return <AlertTriangle className="w-5 h-5 text-amber-400" />
      case 'idea': return <Lightbulb className="w-5 h-5 text-emerald-400" />
      case 'decision': return <CheckCircle className="w-5 h-5 text-violet-400" />
      default: return <Brain className="w-5 h-5" />
    }
  }

  const getThoughtStyle = (type: string) => {
    switch (type) {
      case 'analysis': return 'border-l-4 border-cyan-400 bg-cyan-950/20 shadow-cyan-400/10'
      case 'concern': return 'border-l-4 border-amber-400 bg-amber-950/20 shadow-amber-400/10'
      case 'idea': return 'border-l-4 border-emerald-400 bg-emerald-950/20 shadow-emerald-400/10'
      case 'decision': return 'border-l-4 border-violet-400 bg-violet-950/20 shadow-violet-400/10'
      default: return 'border-l-4 border-slate-400 bg-slate-950/20'
    }
  }

  const currentScenario = realScenarios[activeScenario]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="fixed inset-0 z-0">
        <svg className="w-full h-full opacity-10">
          {neuralConnections.map((conn, i) => {
            const nextConn = neuralConnections[i + 1] || neuralConnections[0]
            return (
              <g key={conn.id}>
                <line
                  x1={`${conn.x}%`}
                  y1={`${conn.y}%`}
                  x2={`${nextConn.x}%`}
                  y2={`${nextConn.y}%`}
                  stroke={conn.active ? "#00ff88" : "#334155"}
                  strokeWidth="1"
                  className="transition-colors duration-300"
                />
                <circle
                  cx={`${conn.x}%`}
                  cy={`${conn.y}%`}
                  r="3"
                  fill={conn.active ? "#00ff88" : "#475569"}
                  className="transition-colors duration-300"
                >
                  {conn.active && (
                    <animate
                      attributeName="r"
                      values="3;8;3"
                      dur="1s"
                      repeatCount="1"
                    />
                  )}
                </circle>
              </g>
            )
          })}
        </svg>
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 p-1">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <Brain className="w-10 h-10 text-emerald-400" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-pulse"></div>
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Neural.exe
              </h1>
              <p className="text-emerald-400 text-lg font-mono">Amin.Chouaibi.Senior.Engineer</p>
              <p className="text-slate-400 text-sm">@GartnerDigitalMarkets</p>
            </div>
          </div>
          <div className="bg-slate-900/50 border border-emerald-400/30 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-slate-300 leading-relaxed">
              Watch the neural pathways of a Senior Software Engineer solving real backend challenges. 
              Each scenario represents actual problems solved across <span className="text-emerald-400">60M+ users</span> and 
              <span className="text-cyan-400"> multiple enterprise platforms</span>.
            </p>
          </div>
        </div>

        {/* Scenario Cards */}
        <div className="max-w-7xl mx-auto mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-emerald-400">
            <Network className="w-6 h-6 inline mr-2" />
            Neural Pathways: Real Engineering Challenges
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {realScenarios.map((scenario, index) => (
              <div
                key={scenario.id}
                className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeScenario === index 
                    ? 'ring-2 ring-emerald-400 shadow-2xl shadow-emerald-400/20' 
                    : 'hover:ring-1 hover:ring-cyan-400/50'
                }`}
                onClick={() => startSimulation(index)}
              >
                <div className="bg-slate-900/30 backdrop-blur border border-slate-700/50 rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className={`w-8 h-8 ${index === 0 ? 'text-emerald-400' : index === 1 ? 'text-cyan-400' : 'text-violet-400'}`} />
                    <div>
                      <h3 className="font-bold text-lg">{scenario.title}</h3>
                      <p className="text-sm text-slate-400">{scenario.company} • {scenario.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">{scenario.problem}</p>
                  
                  <div className="space-y-2">
                    <div className="text-xs text-emerald-400 font-mono">{scenario.realMetrics.challenge}</div>
                    <div className="flex flex-wrap gap-1">
                      {scenario.realMetrics.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs bg-slate-800/50 border border-slate-600 px-2 py-1 rounded text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {scenario.realMetrics.technologies.length > 4 && (
                        <span className="text-xs text-slate-400">+{scenario.realMetrics.technologies.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neural Processing Interface */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/20 backdrop-blur border border-slate-700/50 rounded-xl overflow-hidden">
            {/* Interface Header */}
            <div className="bg-slate-800/50 border-b border-slate-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <h3 className="font-mono text-emerald-400">neural_process_{currentScenario.id}.py</h3>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => startSimulation(activeScenario)}
                    disabled={isPlaying}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 disabled:text-slate-400 rounded text-sm font-medium transition-colors"
                  >
                    {isPlaying ? '◉ Processing...' : '▶ Execute'}
                  </button>
                  <button
                    onClick={resetSimulation}
                    className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded text-sm font-medium transition-colors"
                  >
                    ↻ Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Problem Definition */}
            <div className="p-6 border-b border-slate-700/50">
              <div className="bg-red-950/30 border border-red-400/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-400 font-mono">ERROR_DETECTED</span>
                </div>
                <p className="text-slate-200">{currentScenario.problem}</p>
              </div>
            </div>

            {/* Neural Processing Stream */}
            <div className="p-6 min-h-[400px]">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-5 h-5 text-emerald-400" />
                <span className="font-mono text-emerald-400">neural_processing_stream:</span>
              </div>
              
              <div className="space-y-4">
                {currentScenario.thoughts.slice(0, currentStep).map((thought, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg shadow-lg ${getThoughtStyle(thought.type)} animate-fadeIn`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      {getThoughtIcon(thought.type)}
                      <div className="flex-1">
                        <div className="text-sm font-mono text-slate-400 mb-1">
                          {thought.type.toUpperCase()}_PROCESS #{index + 1}
                        </div>
                        <p className="text-slate-100 leading-relaxed">{thought.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {isPlaying && currentStep < currentScenario.thoughts.length && (
                  <div className="flex items-center gap-4 text-emerald-400 p-4">
                    <Brain className="w-5 h-5 animate-pulse" />
                    <span className="font-mono">neural_processing...</span>
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <div 
                          key={i}
                          className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Solution Output */}
              {currentStep >= currentScenario.thoughts.length && (
                <div className="mt-8 space-y-6 animate-fadeIn">
                  <div className="bg-emerald-950/30 border border-emerald-400/30 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                      <span className="font-bold text-emerald-400 font-mono">SOLUTION_IMPLEMENTED</span>
                    </div>
                    <p className="text-slate-100 text-lg leading-relaxed mb-4">{currentScenario.solution}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-800/30 rounded-lg p-4">
                        <h4 className="text-cyan-400 font-semibold mb-2">Challenge</h4>
                        <p className="text-slate-300 text-sm">{currentScenario.realMetrics.challenge}</p>
                      </div>
                      <div className="bg-slate-800/30 rounded-lg p-4">
                        <h4 className="text-violet-400 font-semibold mb-2">Impact</h4>
                        <p className="text-slate-300 text-sm">{currentScenario.realMetrics.impact}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-amber-400 font-semibold mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentScenario.realMetrics.technologies.map((tech) => (
                          <span key={tech} className="bg-slate-700/50 border border-slate-600 px-3 py-1 rounded text-sm text-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-400 text-sm max-w-2xl mx-auto">
          <p className="border-t border-slate-700 pt-6">
            These simulations represent real engineering challenges solved at <span className="text-emerald-400">Gartner Digital Markets</span> and 
            <span className="text-cyan-400"> Plain Concepts</span>, affecting millions of users and processing billions of events.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default NeuralEngineerSimulator
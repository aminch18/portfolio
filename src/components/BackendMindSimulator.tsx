'use client'
import React, { useState, useEffect } from 'react'
import { 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Zap, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Code,
  Users,
  Timer,
  Target,
  Lightbulb,
  Gauge
} from 'lucide-react'

interface ThoughtProcess {
  id: string
  title: string
  problem: string
  thoughts: ThoughtStep[]
  solution: string
  metrics: {
    beforeAfter: { before: string; after: string; improvement: string }
    scale: string
    impact: string
  }
}

interface ThoughtStep {
  type: 'analysis' | 'concern' | 'idea' | 'decision'
  text: string
  delay: number
}

const BackendMindSimulator = () => {
  const [activeScenario, setActiveScenario] = useState<number>(0)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [brainActivity, setBrainActivity] = useState<number>(0)

  const scenarios: ThoughtProcess[] = [
    {
      id: 'performance',
      title: 'API Performance Crisis',
      problem: '🚨 Alert: API response time spiked to 2.5 seconds. 30M daily users affected.',
      thoughts: [
        { type: 'analysis', text: 'First, check the monitoring dashboard... Latency is concentrated in review retrieval endpoints', delay: 1500 },
        { type: 'concern', text: 'Database queries showing N+1 pattern. Each review is triggering separate user and comment queries', delay: 2000 },
        { type: 'analysis', text: 'Looking at query execution plans... Multiple JOINs and no materialized views', delay: 1800 },
        { type: 'idea', text: 'What if we implement CQRS? Separate read model optimized for these specific queries', delay: 2200 },
        { type: 'decision', text: 'Create materialized view with pre-calculated data: reviews + users + comment stats', delay: 1600 },
        { type: 'idea', text: 'Add Redis caching layer for frequently accessed reviews (80/20 rule)', delay: 1900 },
        { type: 'decision', text: 'Implement query-first approach: design read model specifically for UI needs', delay: 1700 }
      ],
      solution: 'Implemented CQRS pattern with materialized views and Redis caching',
      metrics: {
        beforeAfter: { before: '2.5s', after: '150ms', improvement: '94% faster' },
        scale: '30M daily users',
        impact: 'User experience dramatically improved, bounce rate decreased 23%'
      }
    },
    {
      id: 'scale',
      title: 'Notification System Overload',
      problem: '⚠️ Challenge: Scale from 10M to 1B+ monthly notifications for Lidl Plus users',
      thoughts: [
        { type: 'analysis', text: 'Current system is synchronous... each notification blocks the main thread', delay: 1400 },
        { type: 'concern', text: 'If one notification fails, the entire batch fails. Not resilient enough', delay: 2100 },
        { type: 'idea', text: 'Event-driven architecture! Decouple notification creation from delivery', delay: 1800 },
        { type: 'analysis', text: 'Azure Service Bus can handle millions of messages. Perfect for this scale', delay: 1600 },
        { type: 'decision', text: 'Publish domain events: ReviewCreated, UserSignedUp, PromoAvailable', delay: 1900 },
        { type: 'idea', text: 'Separate handlers for email, push, SMS - each can retry independently', delay: 2000 },
        { type: 'decision', text: 'Add dead letter queues for failed messages. Never lose a notification', delay: 1700 },
        { type: 'analysis', text: 'Azure Functions for auto-scaling. Pay only for what we use', delay: 1500 }
      ],
      solution: 'Built event-driven notification system with Azure Service Bus and Functions',
      metrics: {
        beforeAfter: { before: '10M/month', after: '1B+/month', improvement: '100x scale' },
        scale: '60M+ users',
        impact: '99.99% delivery rate, zero notification losses'
      }
    },
    {
      id: 'architecture',
      title: 'Monolith Migration Decision',
      problem: '🎯 Strategic Goal: Break down monolith to enable team autonomy and faster releases',
      thoughts: [
        { type: 'analysis', text: 'Current monolith: 500K+ lines, 8 teams stepping on each other', delay: 1600 },
        { type: 'concern', text: 'Big bang migration = high risk. Need incremental approach', delay: 1900 },
        { type: 'idea', text: 'Domain-driven design boundaries... Reviews, Users, Notifications are clear domains', delay: 2200 },
        { type: 'decision', text: 'Strangler Fig pattern: gradually extract services while keeping system running', delay: 2000 },
        { type: 'analysis', text: 'Start with Reviews service - most isolated, clear business boundaries', delay: 1700 },
        { type: 'idea', text: 'API Gateway for routing. Gradually redirect endpoints to new services', delay: 1800 },
        { type: 'concern', text: 'Data consistency across services... eventual consistency model needed', delay: 2100 },
        { type: 'decision', text: 'Event sourcing for audit trail. Saga pattern for distributed transactions', delay: 1900 }
      ],
      solution: 'Executed zero-downtime microservices migration using Strangler Fig pattern',
      metrics: {
        beforeAfter: { before: '1 monolith', after: '15 microservices', improvement: '68% cost reduction' },
        scale: 'Handles 10x more traffic',
        impact: 'Team velocity increased 40%, deployment frequency: weekly → daily'
      }
    }
  ]

  // Simulate brain activity
  useEffect(() => {
    const interval = setInterval(() => {
      setBrainActivity(Math.random() * 100)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Auto-play thoughts
  useEffect(() => {
    if (!isPlaying) return

    const scenario = scenarios[activeScenario]
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
      case 'analysis': return <Database className="w-4 h-4 text-blue-400" />
      case 'concern': return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case 'idea': return <Lightbulb className="w-4 h-4 text-green-400" />
      case 'decision': return <CheckCircle className="w-4 h-4 text-purple-400" />
      default: return <Brain className="w-4 h-4" />
    }
  }

  const getThoughtColor = (type: string) => {
    switch (type) {
      case 'analysis': return 'border-blue-400/30 bg-blue-400/5'
      case 'concern': return 'border-yellow-400/30 bg-yellow-400/5'
      case 'idea': return 'border-green-400/30 bg-green-400/5'
      case 'decision': return 'border-purple-400/30 bg-purple-400/5'
      default: return 'border-slate-400/30 bg-slate-400/5'
    }
  }

  const currentScenario = scenarios[activeScenario]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="relative">
              <Brain className="w-16 h-16 text-blue-400" />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur animate-ping opacity-30"></div>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Backend Engineer's Mind
              </h1>
              <p className="text-slate-400 mt-2">Amin Chouaibi El Azaar • Senior Software Engineer</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Step inside the thought process of solving real backend engineering challenges. 
            Watch how problems are analyzed, solutions are crafted, and systems are optimized.
          </p>
        </div>

        {/* Brain Activity Monitor */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold">Neural Activity</span>
              </div>
              <div className="text-xs text-slate-400">Real-time brain simulation</div>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-500 ease-out"
                style={{ width: `${brainActivity}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scenario Selection */}
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Choose a Engineering Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenarios.map((scenario, index) => (
              <button
                key={scenario.id}
                onClick={() => startSimulation(index)}
                className={`p-6 rounded-lg border-2 transition-all hover:scale-105 ${
                  activeScenario === index 
                    ? 'border-purple-400 bg-purple-400/10' 
                    : 'border-slate-700 bg-slate-900/30 hover:border-slate-600'
                }`}
              >
                <h3 className="font-bold text-lg mb-2">{scenario.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{scenario.problem}</p>
                <div className="mt-4 text-xs text-green-400">
                  {scenario.metrics.beforeAfter.improvement} • {scenario.metrics.scale}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Thought Process Simulation */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">{currentScenario.title}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => startSimulation(activeScenario)}
                  disabled={isPlaying}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-slate-600 rounded transition-colors text-sm"
                >
                  {isPlaying ? 'Thinking...' : 'Start Simulation'}
                </button>
                <button
                  onClick={resetSimulation}
                  className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded transition-colors text-sm"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-red-400 mb-2">Problem:</h4>
              <p className="text-slate-300">{currentScenario.problem}</p>
            </div>

            {/* Thought Stream */}
            <div className="space-y-4 mb-6 min-h-[300px]">
              <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Thought Process:
              </h4>
              
              {currentScenario.thoughts.slice(0, currentStep).map((thought, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border ${getThoughtColor(thought.type)} animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    {getThoughtIcon(thought.type)}
                    <div className="flex-1">
                      <p className="text-slate-200 leading-relaxed">{thought.text}</p>
                    </div>
                    <Timer className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
              ))}

              {isPlaying && currentStep < currentScenario.thoughts.length && (
                <div className="flex items-center gap-3 text-slate-400">
                  <Brain className="w-5 h-5 animate-pulse" />
                  <span className="animate-pulse">Processing...</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Solution & Metrics */}
            {currentStep >= currentScenario.thoughts.length && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Solution Implemented:
                  </h4>
                  <p className="text-slate-300">{currentScenario.solution}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      {currentScenario.metrics.beforeAfter.before} → {currentScenario.metrics.beforeAfter.after}
                    </div>
                    <div className="text-sm text-slate-400">Performance</div>
                    <div className="text-xs text-green-400 mt-1">{currentScenario.metrics.beforeAfter.improvement}</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{currentScenario.metrics.scale}</div>
                    <div className="text-sm text-slate-400">Scale</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                    <div className="text-sm text-green-400 font-medium">{currentScenario.metrics.impact}</div>
                    <div className="text-sm text-slate-400">Business Impact</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-400 text-sm">
          <p>This simulation shows real engineering thought processes from actual projects at Gartner and Lidl Plus</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default BackendMindSimulator
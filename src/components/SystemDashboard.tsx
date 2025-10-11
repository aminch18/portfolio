'use client'
import React, { useState, useEffect } from 'react'
import { 
  Activity, 
  Server, 
  Database, 
  Cloud, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu,
  HardDrive,
  Network,
  BarChart3,
  GitBranch,
  Code2,
  Shield
} from 'lucide-react'

const SystemDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedService, setSelectedService] = useState<string | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      name: 'User Service',
      status: 'healthy',
      uptime: '99.9%',
      requests: '2.5M/day',
      latency: '45ms',
      instances: 8,
      tech: 'Node.js + Redis',
      description: 'Handles authentication, user profiles, and session management for 60M+ users'
    },
    {
      name: 'Review Service',
      status: 'healthy',
      uptime: '99.8%',
      requests: '30M/day',
      latency: '50ms',
      instances: 12,
      tech: '.NET 6 + Kafka',
      description: 'Processes 30M daily reviews with event-driven architecture'
    },
    {
      name: 'Notification Service',
      status: 'healthy',
      uptime: '99.99%',
      requests: '1B/month',
      latency: '25ms',
      instances: 15,
      tech: 'Azure Functions',
      description: 'Delivers 1B+ monthly notifications with 99.99% delivery rate'
    },
    {
      name: 'Analytics Engine',
      status: 'warning',
      uptime: '99.5%',
      requests: '500K/day',
      latency: '150ms',
      instances: 6,
      tech: 'Spark + Cosmos',
      description: 'Real-time analytics processing with occasional performance spikes'
    },
    {
      name: 'API Gateway',
      status: 'healthy',
      uptime: '99.95%',
      requests: '50M/day',
      latency: '15ms',
      instances: 20,
      tech: 'Kong + Lua',
      description: 'Central API gateway handling 50M daily requests with rate limiting'
    }
  ]

  const metrics = [
    {
      title: 'Total Requests',
      value: '82.5M',
      change: '+12.3%',
      period: 'today',
      icon: Activity,
      color: 'text-blue-500'
    },
    {
      title: 'Active Users',
      value: '2.1M',
      change: '+8.7%',
      period: 'online now',
      icon: Users,
      color: 'text-green-500'
    },
    {
      title: 'Avg Response Time',
      value: '48ms',
      change: '-15.2%',
      period: 'last hour',
      icon: Clock,
      color: 'text-purple-500'
    },
    {
      title: 'System Uptime',
      value: '99.9%',
      change: '+0.1%',
      period: 'this month',
      icon: Server,
      color: 'text-emerald-500'
    }
  ]

  const achievements = [
    {
      title: 'Performance Optimization',
      description: 'Reduced API response time by 94% (2.5s → 150ms)',
      impact: 'Improved user experience for 30M daily users',
      tech: 'CQRS, Event Sourcing, Redis Caching'
    },
    {
      title: 'Cost Reduction',
      description: 'Optimized infrastructure costs by 68%',
      impact: 'Saved $4,500/month while handling 10x more traffic',
      tech: 'Microservices, Auto-scaling, Resource optimization'
    },
    {
      title: 'Scalability Enhancement',
      description: 'Migrated monolith to microservices with zero downtime',
      impact: 'System now handles 60M+ users seamlessly',
      tech: 'Docker, Kubernetes, Event-driven architecture'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-500 bg-green-500/10'
      case 'warning': return 'text-yellow-500 bg-yellow-500/10'
      case 'error': return 'text-red-500 bg-red-500/10'
      default: return 'text-gray-500 bg-gray-500/10'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return CheckCircle
      case 'warning': return AlertTriangle
      default: return CheckCircle
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-auto">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Amin Chouaibi El Azaar</h1>
                <p className="text-slate-400 text-sm">Senior Software Engineer @ Gartner Digital Markets</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">System Time</div>
              <div className="font-mono text-lg">{currentTime.toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.title} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:bg-slate-900/70 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                  <span className="text-xs text-slate-400">{metric.period}</span>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.title}</div>
                  <div className="text-xs text-green-400">{metric.change}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Services Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Network className="w-6 h-6 text-blue-500" />
              Microservices Architecture
            </h2>
            <div className="text-sm text-slate-400">
              {services.filter(s => s.status === 'healthy').length}/{services.length} services healthy
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((service) => {
              const StatusIcon = getStatusIcon(service.status)
              return (
                <div 
                  key={service.name}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:bg-slate-900/70 transition-all cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.name ? null : service.name)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{service.name}</h3>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(service.status)}`}>
                      <StatusIcon className="w-3 h-3" />
                      {service.status}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Uptime:</span>
                      <span className="text-green-400 font-mono">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Requests:</span>
                      <span className="font-mono">{service.requests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Latency:</span>
                      <span className="font-mono">{service.latency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Instances:</span>
                      <span className="font-mono">{service.instances}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Tech Stack:</div>
                      <div className="text-xs bg-slate-800 px-2 py-1 rounded">{service.tech}</div>
                    </div>
                  </div>

                  {selectedService === service.name && (
                    <div className="mt-3 pt-3 border-t border-slate-800">
                      <p className="text-xs text-slate-300">{service.description}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-500" />
            Key Achievements
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2 text-blue-400">{achievement.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{achievement.description}</p>
                <div className="space-y-2">
                  <div className="text-xs text-slate-400">Impact:</div>
                  <div className="text-sm text-green-400">{achievement.impact}</div>
                  <div className="text-xs text-slate-400 mt-2">Technologies:</div>
                  <div className="text-xs bg-slate-800 px-2 py-1 rounded inline-block">{achievement.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-slate-800">
          <div className="text-slate-400 text-sm">
            This portfolio simulates a real production monitoring dashboard
          </div>
          <div className="text-slate-500 text-xs mt-1">
            Built with Next.js, TypeScript, and TailwindCSS
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemDashboard
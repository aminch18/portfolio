'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Terminal, User, Folder, File, GitBranch, Database, Server, Code, Calendar } from 'lucide-react'

interface Command {
  command: string
  output: React.ReactNode
  timestamp: string
}

interface CommandDefinition {
  name: string
  description: string
  execute: () => React.ReactNode
  aliases?: string[]
}

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [storyMode, setStoryMode] = useState(false)
  const [storyIndex, setStoryIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [currentPath, setCurrentPath] = useState('~')

  // Auto-focus on input
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Career story sequence
  const storySequence = [
    {
      delay: 2000,
      command: '# Starting my journey as a backend engineer...',
      typeSpeed: 80,
      output: (
        <div className="text-matrix-gray text-sm">
          Loading career history...
        </div>
      )
    },
    {
      delay: 1500,
      command: 'cd /career/2018',
      typeSpeed: 60,
      output: null
    },
    {
      delay: 800,
      command: 'ls -la',
      typeSpeed: 40,
      output: (
        <div className="space-y-1 text-sm">
          <div className="text-matrix-cyan">📚 pasiona-consulting/</div>
          <div className="text-matrix-gray">  ├── trainee-developer.md</div>
          <div className="text-matrix-gray">  ├── first-react-components/</div>
          <div className="text-matrix-gray">  ├── azure-functions-learning/</div>
          <div className="text-matrix-gray">  └── promotion-to-junior.log</div>
        </div>
      )
    },
    {
      delay: 2500,
      command: 'git log --oneline --since="2018"',
      typeSpeed: 50,
      output: (
        <div className="space-y-1 text-sm font-mono">
          <div><span className="text-yellow-500">f1a2b3c</span> <span className="text-matrix-green">feat:</span> first SPFx component with React/TypeScript</div>
          <div><span className="text-yellow-500">e4d5c6b</span> <span className="text-matrix-green">learn:</span> TDD and DDD patterns</div>
          <div><span className="text-yellow-500">d7e8f9a</span> <span className="text-matrix-green">promo:</span> trainee → junior developer (1 year growth)</div>
        </div>
      )
    },
    {
      delay: 3000,
      command: 'cd ../2019',
      typeSpeed: 40,
      output: null
    },
    {
      delay: 500,
      command: 'cat plain-concepts/lidl-plus/README.md',
      typeSpeed: 70,
      output: (
        <div className="text-sm space-y-2">
          <div className="text-matrix-cyan font-bold"># Lidl Plus App - 60M+ Users</div>
          <div className="text-matrix-gray">
            🚀 **Challenge**: Build notification system for 60 million European users<br/>
            ⚡ **Tech Stack**: .NET 6, Azure Functions, Cosmos DB, Service Bus<br/>
            🎯 **Achievement**: 99.99% delivery rate, 68% cost reduction<br/>
            📈 **Scale**: 1 billion+ notifications per month
          </div>
        </div>
      )
    },
    {
      delay: 3500,
      command: 'docker ps | grep microservices',
      typeSpeed: 60,
      output: (
        <div className="text-sm font-mono space-y-1">
          <div className="text-matrix-green">CONTAINER ID   STATUS    PORTS     NAMES</div>
          <div>a1b2c3d4e5f6   Up 2 years   8080      user-service</div>
          <div>f6e5d4c3b2a1   Up 2 years   8081      notification-service</div>
          <div>1a2b3c4d5e6f   Up 2 years   8082      promotion-service</div>
          <div className="text-matrix-gray"># Migrated monolith → microservices (zero downtime)</div>
        </div>
      )
    },
    {
      delay: 2800,
      command: 'cd ../2022/gartner',
      typeSpeed: 50,
      output: null
    },
    {
      delay: 800,
      command: 'grep -r "performance" . | head -5',
      typeSpeed: 80,
      output: (
        <div className="text-sm font-mono space-y-1">
          <div>./reviews-platform/optimizations.log:API response time: 200ms → 50ms</div>
          <div>./kafka-implementation/metrics.json:Throughput: 10M → 30M reviews/day</div>
          <div>./cqrs-migration/results.md:Query performance: 2.5s → 150ms (94% improvement)</div>
          <div>./infrastructure/costs.yaml:Monthly savings: $4,500 (30% reduction)</div>
          <div className="text-matrix-cyan"># Senior-level optimizations delivering real business value</div>
        </div>
      )
    },
    {
      delay: 3000,
      command: 'curl -s https://api.gartner.com/reviews/metrics | jq .',
      typeSpeed: 90,
      output: (
        <div className="text-sm font-mono space-y-1">
          <div className="text-matrix-green">{`{`}</div>
          <div className="text-matrix-white">  "daily_reviews": "30000000+",</div>
          <div className="text-matrix-white">  "api_latency_p95": "50ms",</div>
          <div className="text-matrix-white">  "uptime": "99.9%",</div>
          <div className="text-matrix-white">  "architecture": "event-driven",</div>
          <div className="text-matrix-white">  "promotion_date": "2023-10-15",</div>
          <div className="text-matrix-white">  "title": "Senior Software Engineer"</div>
          <div className="text-matrix-green">{`}`}</div>
        </div>
      )
    },
    {
      delay: 2500,
      command: 'echo "Journey complete. Ready for the next challenge!"',
      typeSpeed: 60,
      output: (
        <div className="space-y-3">
          <div className="text-matrix-cyan font-bold">
            🎯 Current Status: Senior Software Engineer @ Gartner Digital Markets
          </div>
          <div className="text-matrix-gray text-sm">
            From trainee to senior in 5 years. Built systems serving 60M+ users.<br/>
            Specialized in event-driven architectures, microservices, and performance optimization.
          </div>
          <div className="text-matrix-green text-sm">
            💡 Type <span className="bg-matrix-dark px-1 rounded">help</span> to explore my experience interactively!
          </div>
        </div>
      )
    }
  ]

  // Auto-playing story effect
  useEffect(() => {
    if (!storyMode || storyIndex >= storySequence.length) return

    const currentStep = storySequence[storyIndex]
    const timer = setTimeout(() => {
      // Add story command to history
      const newEntry: Command = {
        command: currentStep.command,
        output: currentStep.output || null,
        timestamp: new Date().toLocaleTimeString()
      }
      
      setHistory(prev => [...prev, newEntry])
      
      // Update directory if it's a cd command
      if (currentStep.command.startsWith('cd ')) {
        const targetDir = currentStep.command.split(' ')[1]
        if (targetDir === '../2019') {
          setCurrentPath('/career/2019')
        } else if (targetDir === '../2022/gartner') {
          setCurrentPath('/career/2022/gartner')
        } else if (targetDir === '/career/2018') {
          setCurrentPath('/career/2018')
        }
      }
      
      setStoryIndex(prev => prev + 1)
    }, currentStep.delay)

    return () => clearTimeout(timer)
  }, [storyMode, storyIndex, currentPath])

  // Start story after initial load
  useEffect(() => {
    const startStoryTimer = setTimeout(() => {
      setStoryMode(true)
    }, 3000) // Wait 3 seconds after page load

    return () => clearTimeout(startStoryTimer)
  }, [])

  // Stop story when user interacts
  const stopStory = () => {
    if (storyMode) {
      setStoryMode(false)
      // Add a message about switching to interactive mode
      const interactiveEntry: Command = {
        command: '# Interactive mode activated - try typing "help"',
        output: (
          <div className="text-matrix-green text-sm">
            🎮 You can now explore my experience interactively!
          </div>
        ),
        timestamp: new Date().toLocaleTimeString()
      }
      setHistory(prev => [...prev, interactiveEntry])
    }
  }

  // Scroll to bottom when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const typeWriter = (text: string, callback?: () => void) => {
    setIsTyping(true)
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setCurrentInput(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setIsTyping(false)
        if (callback) callback()
      }
    }, 50)
  }

  const commands: CommandDefinition[] = [
    {
      name: 'help',
      description: 'Show available commands',
      execute: () => (
        <div className="space-y-2">
          <div className="text-matrix-cyan font-bold">Available Commands:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div><span className="text-matrix-green">whoami</span> - Show basic info</div>
            <div><span className="text-matrix-green">experience</span> - List work experience</div>
            <div><span className="text-matrix-green">skills</span> - Show technical skills</div>
            <div><span className="text-matrix-green">projects</span> - List notable projects</div>
            <div><span className="text-matrix-green">cat [file]</span> - Display file contents</div>
            <div><span className="text-matrix-green">ls</span> - List directory contents</div>
            <div><span className="text-matrix-green">pwd</span> - Show current directory</div>
            <div><span className="text-matrix-green">cd [dir]</span> - Change directory (use .. to go back, ~ for home)</div>
            <div><span className="text-matrix-green">git log</span> - Show recent achievements</div>
            <div><span className="text-matrix-green">grep [term]</span> - Search experience</div>
            <div><span className="text-matrix-green">metrics</span> - Show performance metrics</div>
            <div><span className="text-matrix-green">contact</span> - Get contact information</div>
            <div><span className="text-matrix-green">clear</span> - Clear terminal</div>
          </div>
          <div className="text-matrix-gray text-xs mt-4">
            💡 Try: <span className="text-matrix-green">cat gartner/reviews-platform.md</span>
          </div>
        </div>
      )
    },
    {
      name: 'whoami',
      description: 'Show basic information',
      execute: () => (
        <div className="space-y-2">
          <div className="text-matrix-cyan text-lg font-bold">Amin Chouaibi El Azaar</div>
          <div className="text-matrix-white">Senior Software Engineer @ Gartner Digital Markets</div>
          <div className="text-matrix-gray">📍 Barcelona, Spain</div>
          <div className="text-matrix-gray">🎯 6+ years building scalable backend systems</div>
          <div className="text-matrix-gray">🚀 Specializing in .NET, microservices, and event-driven architectures</div>
          <div className="text-matrix-gray">💡 Passionate about performance optimization and clean architecture</div>
        </div>
      )
    },
    {
      name: 'ls',
      description: 'List directory contents',
      execute: () => {
        const directories = {
          '~': [
            { name: 'gartner/', type: 'dir', description: 'Current role - Senior Software Engineer' },
            { name: 'plain-concepts/', type: 'dir', description: 'Previous role - Lidl Plus App' },
            { name: 'pasiona/', type: 'dir', description: 'First role - Junior to Senior growth' },
            { name: 'skills.json', type: 'file', description: 'Technical skills and proficiency' },
            { name: 'projects.md', type: 'file', description: 'Notable projects and achievements' },
            { name: 'contact.txt', type: 'file', description: 'Contact information' },
          ],
          'gartner': [
            { name: 'reviews-platform.md', type: 'file', description: 'Event-driven architecture for 10M+ reviews/day' },
            { name: 'performance-optimizations.json', type: 'file', description: 'API response time: 200ms → 50ms' },
            { name: 'microservices/', type: 'dir', description: 'Kafka + CQRS implementation' },
          ],
          'plain-concepts': [
            { name: 'lidl-plus-notifications.md', type: 'file', description: 'Serverless system for 60M+ users' },
            { name: 'microservices-migration.md', type: 'file', description: 'Monolith to microservices journey' },
            { name: 'azure-functions/', type: 'dir', description: 'Serverless implementations' },
          ]
        }

        const currentDir = directories[currentPath as keyof typeof directories] || directories['~']
        
        return (
          <div className="space-y-1">
            {currentDir.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {item.type === 'dir' ? (
                  <Folder className="w-4 h-4 text-matrix-cyan" />
                ) : (
                  <File className="w-4 h-4 text-matrix-white" />
                )}
                <span className={item.type === 'dir' ? 'text-matrix-cyan' : 'text-matrix-white'}>
                  {item.name}
                </span>
                <span className="text-matrix-gray text-sm">- {item.description}</span>
              </div>
            ))}
          </div>
        )
      }
    },
    {
      name: 'pwd',
      description: 'Show current directory',
      execute: () => (
        <div className="text-matrix-white">
          {currentPath === '~' ? '/home/amin' : `/home/amin/${currentPath}`}
        </div>
      )
    },
    {
      name: 'experience',
      description: 'Show work experience',
      execute: () => (
        <div className="space-y-4">
          <div className="border-l-2 border-matrix-green pl-4">
            <div className="text-matrix-cyan font-bold">Senior Software Engineer</div>
            <div className="text-matrix-green">Gartner Digital Markets • May 2022 - Present</div>
            <div className="text-matrix-gray text-sm mt-2">
              • Promoted to Senior (Oct 2023) within Reviews Platform team<br/>
              • Scaled review processing from 10M to 30M+ reviews/day<br/>
              • Reduced API response time by 75% (200ms → 50ms)<br/>
              • Implemented event-driven architecture with Kafka/PostgreSQL<br/>
              • Tech: C#, .NET 8, TypeScript, Next.js, Kafka, PostgreSQL, AWS
            </div>
          </div>
          
          <div className="border-l-2 border-matrix-green pl-4">
            <div className="text-matrix-cyan font-bold">Software Development Engineer</div>
            <div className="text-matrix-green">Plain Concepts (Lidl Plus) • Sep 2019 - May 2022</div>
            <div className="text-matrix-gray text-sm mt-2">
              • Built notification system serving 60M+ users<br/>
              • Migrated monolith to microservices with zero downtime<br/>
              • Implemented CQRS + DDD patterns with Azure Functions<br/>
              • Achieved 99.99% notification delivery rate<br/>
              • Tech: .NET 6, Azure Functions, Cosmos DB, Service Bus, Terraform
            </div>
          </div>

          <div className="border-l-2 border-matrix-green pl-4">
            <div className="text-matrix-cyan font-bold">Junior → Trainee Developer</div>
            <div className="text-matrix-green">Pasiona Consulting • May 2018 - Sep 2019</div>
            <div className="text-matrix-gray text-sm mt-2">
              • Started as trainee, promoted to junior developer<br/>
              • Built SPFx components with React/TypeScript<br/>
              • Learned TDD, DDD, and Azure DevOps practices<br/>
              • Foundation in .NET Core and clean architecture<br/>
              • Tech: .NET Core, React.js, SharePoint SPFx, Azure DevOps
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'skills',
      description: 'Show technical skills',
      execute: () => (
        <div className="space-y-4">
          <div>
            <div className="text-matrix-cyan font-bold mb-2">Backend Development</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span className="text-matrix-green">C# (.NET 6-8)</span>
              <span className="text-matrix-green">ASP.NET Core</span>
              <span className="text-matrix-green">Entity Framework</span>
              <span className="text-matrix-green">PostgreSQL</span>
            </div>
          </div>
          
          <div>
            <div className="text-matrix-cyan font-bold mb-2">Architecture & Patterns</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span className="text-matrix-green">Microservices</span>
              <span className="text-matrix-green">Event-Driven</span>
              <span className="text-matrix-green">CQRS + DDD</span>
              <span className="text-matrix-green">Clean Architecture</span>
            </div>
          </div>
          
          <div>
            <div className="text-matrix-cyan font-bold mb-2">Cloud & DevOps</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span className="text-matrix-green">AWS (EKS, RDS)</span>
              <span className="text-matrix-green">Azure Functions</span>
              <span className="text-matrix-green">Docker/Kubernetes</span>
              <span className="text-matrix-green">Terraform</span>
            </div>
          </div>

          <div>
            <div className="text-matrix-cyan font-bold mb-2">Frontend & Tools</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span className="text-matrix-green">TypeScript</span>
              <span className="text-matrix-green">Next.js/React</span>
              <span className="text-matrix-green">Git/GitHub Actions</span>
              <span className="text-matrix-green">Azure DevOps</span>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'metrics',
      description: 'Show performance metrics',
      execute: () => (
        <div className="space-y-3">
          <div className="text-matrix-cyan font-bold">Performance Impact</div>
          
          <div className="bg-matrix-dark border border-matrix-border rounded p-3">
            <div className="text-matrix-green font-bold">Gartner Reviews Platform</div>
            <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
              <div>API Response Time: <span className="text-matrix-cyan">200ms → 50ms</span></div>
              <div>Throughput: <span className="text-matrix-cyan">10M → 30M reviews/day</span></div>
              <div>Uptime: <span className="text-matrix-cyan">99.5% → 99.9%</span></div>
              <div>Infrastructure Cost: <span className="text-matrix-cyan">-30%</span></div>
            </div>
          </div>

          <div className="bg-matrix-dark border border-matrix-border rounded p-3">
            <div className="text-matrix-green font-bold">Lidl Plus Notifications</div>
            <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
              <div>Users Served: <span className="text-matrix-cyan">60M+</span></div>
              <div>Delivery Rate: <span className="text-matrix-cyan">99.7% → 99.99%</span></div>
              <div>Monthly Volume: <span className="text-matrix-cyan">1B+ notifications</span></div>
              <div>Cost Reduction: <span className="text-matrix-cyan">-68%</span></div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'git',
      description: 'Show recent achievements',
      execute: () => (
        <div className="space-y-2 font-mono text-sm">
          <div className="text-matrix-cyan">Recent commits to career.git:</div>
          <div className="space-y-1">
            <div><span className="text-yellow-500">a7f3d21</span> <span className="text-matrix-green">feat:</span> promoted to Senior Software Engineer at Gartner</div>
            <div><span className="text-yellow-500">b8e4c32</span> <span className="text-matrix-green">perf:</span> optimized review scoring engine (75% faster)</div>
            <div><span className="text-yellow-500">c9f5d43</span> <span className="text-matrix-green">arch:</span> migrated to event-driven microservices</div>
            <div><span className="text-yellow-500">d1a6e54</span> <span className="text-matrix-green">feat:</span> implemented CQRS pattern for read/write separation</div>
            <div><span className="text-yellow-500">e2b7f65</span> <span className="text-matrix-green">refactor:</span> monolith to microservices migration (Lidl Plus)</div>
            <div><span className="text-yellow-500">f3c8g76</span> <span className="text-matrix-green">feat:</span> built serverless notification system (Azure Functions)</div>
          </div>
        </div>
      )
    },
    {
      name: 'contact',
      description: 'Get contact information',
      execute: () => (
        <div className="space-y-2">
          <div className="text-matrix-cyan font-bold">Contact Information</div>
          <div className="space-y-1 text-sm">
            <div>📧 Email: <span className="text-matrix-green">amin.chouaibi@example.com</span></div>
            <div>💼 LinkedIn: <span className="text-matrix-green">linkedin.com/in/amin-chouaibi</span></div>
            <div>🐙 GitHub: <span className="text-matrix-green">github.com/aminch18</span></div>
            <div>📍 Location: <span className="text-matrix-green">Barcelona, Spain</span></div>
            <div>🌐 Timezone: <span className="text-matrix-green">CET (UTC+1)</span></div>
          </div>
        </div>
      )
    },
    {
      name: 'clear',
      description: 'Clear terminal',
      execute: () => {
        setHistory([])
        return null
      }
    }
  ]

  // File contents for 'cat' command
  const files: Record<string, React.ReactNode> = {
    'skills.json': (
      <pre className="text-matrix-green text-sm overflow-x-auto">
{`{
  "backend": {
    "languages": ["C#", "TypeScript", "Python"],
    "frameworks": [".NET 6-8", "ASP.NET Core", "Entity Framework"],
    "databases": ["PostgreSQL", "SQL Server", "Cosmos DB", "OpenSearch"],
    "proficiency": "Expert"
  },
  "architecture": {
    "patterns": ["Microservices", "Event-Driven", "CQRS", "DDD"],
    "messaging": ["Kafka", "Azure Service Bus", "Event Hub"],
    "proficiency": "Advanced"
  },
  "cloud": {
    "aws": ["EKS", "RDS", "Lambda", "API Gateway"],
    "azure": ["Functions", "Cosmos DB", "Service Bus", "AKS"],
    "proficiency": "Advanced"
  },
  "tools": {
    "containerization": ["Docker", "Kubernetes"],
    "iac": ["Terraform", "ARM Templates"],
    "ci_cd": ["GitHub Actions", "Azure Pipelines"],
    "proficiency": "Intermediate"
  }
}`}
      </pre>
    ),
    'projects.md': (
      <div className="text-sm space-y-4">
        <div>
          <div className="text-matrix-cyan font-bold"># Notable Projects</div>
        </div>
        <div>
          <div className="text-matrix-green">## Gartner Reviews Platform Optimization</div>
          <div className="text-matrix-gray">
            - **Challenge**: 10M+ reviews/day causing performance bottlenecks<br/>
            - **Solution**: Event-driven architecture with Kafka + CQRS<br/>
            - **Impact**: 75% faster API responses, 200% throughput increase<br/>
            - **Tech**: C#, .NET 8, Kafka, PostgreSQL, OpenSearch
          </div>
        </div>
        <div>
          <div className="text-matrix-green">## Lidl Plus Notification System</div>
          <div className="text-matrix-gray">
            - **Challenge**: Scale notifications for 60M+ users<br/>
            - **Solution**: Serverless architecture with Azure Functions<br/>
            - **Impact**: 99.99% delivery rate, 68% cost reduction<br/>
            - **Tech**: .NET 6, Azure Functions, Cosmos DB, Service Bus
          </div>
        </div>
      </div>
    ),
    'contact.txt': (
      <div className="text-sm">
        <div className="text-matrix-green">Amin Chouaibi El Azaar</div>
        <div className="text-matrix-gray">Senior Software Engineer</div>
        <div className="text-matrix-gray">Barcelona, Spain</div>
        <div className="text-matrix-gray">---</div>
        <div className="text-matrix-gray">Email: amin.chouaibi@example.com</div>
        <div className="text-matrix-gray">LinkedIn: linkedin.com/in/amin-chouaibi</div>
        <div className="text-matrix-gray">GitHub: github.com/aminch18</div>
      </div>
    ),
    'gartner/reviews-platform.md': (
      <div className="text-sm space-y-3">
        <div className="text-matrix-cyan font-bold"># Reviews Platform Architecture</div>
        <div>
          <div className="text-matrix-green">## Problem</div>
          <div className="text-matrix-gray">
            Processing 10M+ reviews daily with monolithic architecture causing:
            - High API latency (200ms average)
            - Database bottlenecks
            - Deployment coupling
            - Scaling limitations
          </div>
        </div>
        <div>
          <div className="text-matrix-green">## Solution</div>
          <div className="text-matrix-gray">
            Event-driven microservices with:
            - **Kafka** for reliable event streaming
            - **CQRS** pattern for read/write separation  
            - **PostgreSQL** for transactional data
            - **OpenSearch** for analytics and search
            - **Docker/Kubernetes** for orchestration
          </div>
        </div>
        <div>
          <div className="text-matrix-green">## Results</div>
          <div className="text-matrix-gray">
            - API response time: 200ms → 50ms (75% improvement)
            - Throughput: 10M → 30M reviews/day (200% increase)
            - System uptime: 99.5% → 99.9%
            - Infrastructure cost: -30% through optimization
          </div>
        </div>
      </div>
    )
  }

  const handleCommand = (input: string) => {
    // Stop story mode when user starts typing
    stopStory()
    
    const trimmedInput = input.trim()
    const [command, ...args] = trimmedInput.split(' ')
    const timestamp = new Date().toLocaleTimeString()

    // Handle empty command
    if (!trimmedInput) {
      return
    }

    // Handle 'cat' command
    if (command === 'cat' && args.length > 0) {
      const filename = args[0]
      const fileContent = files[filename]
      
      if (fileContent) {
        addToHistory(trimmedInput, fileContent, timestamp)
      } else {
        addToHistory(trimmedInput, <div className="text-red-500">cat: {filename}: No such file or directory</div>, timestamp)
      }
      return
    }

    // Handle 'cd' command  
    if (command === 'cd') {
      if (args.length === 0) {
        // cd with no arguments goes to home
        setCurrentPath('~')
        addToHistory(trimmedInput, null, timestamp)
        return
      }
      
      const targetDir = args[0]
      
      if (targetDir === '~' || targetDir === 'home') {
        setCurrentPath('~')
        addToHistory(trimmedInput, null, timestamp)
      } else if (targetDir === '..' || targetDir === '../') {
        // Go back to parent directory
        if (currentPath !== '~') {
          setCurrentPath('~')
          addToHistory(trimmedInput, null, timestamp)
        } else {
          addToHistory(trimmedInput, <div className="text-matrix-gray">Already at root directory</div>, timestamp)
        }
      } else if (targetDir === '.') {
        // Stay in current directory
        addToHistory(trimmedInput, null, timestamp)
      } else if (['gartner', 'plain-concepts', 'pasiona'].includes(targetDir)) {
        if (currentPath === '~') {
          setCurrentPath(targetDir)
          addToHistory(trimmedInput, null, timestamp)
        } else {
          addToHistory(trimmedInput, <div className="text-red-500">cd: {targetDir}: No such directory</div>, timestamp)
        }
      } else {
        addToHistory(trimmedInput, <div className="text-red-500">cd: {targetDir}: No such directory</div>, timestamp)
      }
      return
    }

    // Handle 'grep' command
    if (command === 'grep' && args.length > 0) {
      const searchTerm = args[0].toLowerCase()
      const results: string[] = []
      
      if (searchTerm.includes('kafka')) results.push('Gartner: Event-driven architecture with Kafka streaming')
      if (searchTerm.includes('azure')) results.push('Lidl Plus: Azure Functions serverless architecture')
      if (searchTerm.includes('microservice')) results.push('Both projects: Microservices migration and implementation')
      if (searchTerm.includes('performance')) results.push('75% API improvement, 99.99% delivery rate achievements')
      if (searchTerm.includes('senior')) results.push('Promoted to Senior Software Engineer at Gartner (Oct 2023)')

      const output = results.length > 0 
        ? <div className="space-y-1">{results.map((result, i) => <div key={i} className="text-matrix-white">{result}</div>)}</div>
        : <div className="text-matrix-gray">No matches found for '{searchTerm}'</div>

      addToHistory(trimmedInput, output, timestamp)
      return
    }

    // Handle regular commands
    const commandDef = commands.find(cmd => 
      cmd.name === command || (cmd.aliases && cmd.aliases.includes(command))
    )

    if (commandDef) {
      const output = commandDef.execute()
      addToHistory(trimmedInput, output, timestamp)
    } else {
      addToHistory(
        trimmedInput, 
        <div className="text-red-500">
          Command '{command}' not found. Type <span className="text-matrix-green">'help'</span> for available commands.
        </div>, 
        timestamp
      )
    }
  }

  const addToHistory = (command: string, output: React.ReactNode, timestamp: string) => {
    setHistory(prev => [...prev, { command, output, timestamp }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim() && !isTyping) {
      handleCommand(currentInput)
      setCurrentInput('')
    }
  }

  const getPrompt = () => {
    return (
      <span>
        <span className="text-matrix-green">amin@portfolio</span>
        <span className="text-matrix-white">:</span>
        <span className="text-matrix-cyan">{currentPath}</span>
        <span className="text-matrix-white">$ </span>
      </span>
    )
  }

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage = (
      <div className="space-y-3">
        <div className="text-matrix-cyan text-xl font-bold">
          Welcome to Amin's Interactive Portfolio Terminal
        </div>
        <div className="text-matrix-gray">
          Senior Software Engineer | Backend Architecture | Event-Driven Systems
        </div>
        <div className="text-matrix-white">
          Type <span className="text-matrix-green">'help'</span> to see available commands or <span className="text-matrix-green">'whoami'</span> to get started.
        </div>
        <div className="text-matrix-gray text-sm">
          💡 Try: <span className="text-matrix-green">experience</span>, <span className="text-matrix-green">cd gartner</span>, <span className="text-matrix-green">ls</span>, or <span className="text-matrix-green">cd ..</span> to go back
        </div>
      </div>
    )
    
    setHistory([{
      command: '',
      output: welcomeMessage,
      timestamp: new Date().toLocaleTimeString()
    }])

    // Auto-type first command suggestion
    setTimeout(() => {
      typeWriter('help')
    }, 2000)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Terminal Header */}
      <div className="bg-gray-800 border-b border-gray-600 px-4 py-2 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Terminal className="w-4 h-4" />
          <span>amin@portfolio: ~/interactive-terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 h-[calc(100vh-60px)] overflow-y-auto"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Command History */}
        <div className="space-y-4">
          {history.map((entry, index) => (
            <div key={index}>
              {entry.command && (
                <div className="flex items-center gap-1">
                  {getPrompt()}
                  <span className="text-white">{entry.command}</span>
                </div>
              )}
              {entry.output && (
                <div className="mt-2 ml-4">
                  {entry.output}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Current Input */}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex items-center gap-1">
            {getPrompt()}
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => !isTyping && setCurrentInput(e.target.value)}
              className="bg-transparent border-none outline-none text-white flex-1 font-mono"
              placeholder=""
              autoComplete="off"
              spellCheck="false"
            />
            <span className="animate-pulse text-white">|</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InteractiveTerminal
'use client'
import React from 'react'
import { Code, Cloud, Database, Wrench, Zap, GitBranch } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

interface Skill {
  name: string
  icon: string
  proficiency: number
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", proficiency: 95 },
      { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", proficiency: 95 },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", proficiency: 90 },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 85 },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 85 },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", proficiency: 80 },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", proficiency: 75 }
    ]
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", proficiency: 90 },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", proficiency: 85 },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", proficiency: 80 },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", proficiency: 85 }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", proficiency: 90 },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", proficiency: 85 },
      { name: "CosmosDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg", proficiency: 75 },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", proficiency: 70 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", proficiency: 80 },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", proficiency: 85 },
      { name: "Azure Pipelines", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg", proficiency: 80 },
      { name: "Datadog", icon: "https://www.datadoghq.com/img/dd_logo_70x75.png", proficiency: 75 }
    ]
  },
  {
    title: "Message Queues",
    icon: <Zap className="w-5 h-5" />,
    skills: [
      { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", proficiency: 85 },
      { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg", proficiency: 75 },
      { name: "Azure Service Bus", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg", proficiency: 80 }
    ]
  },
  {
    title: "Methodologies",
    icon: <GitBranch className="w-5 h-5" />,
    skills: [
      { name: "Agile/Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", proficiency: 90 },
      { name: "TDD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", proficiency: 85 },
      { name: "DDD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", proficiency: 80 },
      { name: "CQRS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", proficiency: 75 }
    ]
  }
]

const TechnicalSkills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Technical</span>
            <span className="text-matrix-white"> Skills</span>
          </h2>
          <p className="text-matrix-gray text-lg max-w-2xl mx-auto">
            Technologies, frameworks, and methodologies I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card group">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-matrix-green">{category.icon}</div>
                <h3 className="text-xl font-bold text-matrix-cyan">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-3 p-3 bg-matrix-dark rounded-lg hover:bg-matrix-surface transition-all duration-300 group/skill"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-6 h-6 group-hover/skill:scale-110 transition-transform duration-200"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-matrix-white truncate">{skill.name}</div>
                      <div className="w-full bg-matrix-border rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-gradient-to-r from-matrix-green to-matrix-cyan h-1.5 rounded-full transition-all duration-500 group-hover/skill:shadow-lg"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
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

export default TechnicalSkills
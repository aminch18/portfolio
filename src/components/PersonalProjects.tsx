'use client'
import React from 'react'
import { Folder, Plus, Code, ExternalLink, Github } from 'lucide-react'

const PersonalProjects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Personal</span>
            <span className="text-matrix-white"> Projects</span>
          </h2>
          <p className="text-matrix-gray text-lg max-w-2xl mx-auto">
            Showcase of personal and side projects demonstrating technical skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Project Cards */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="skill-card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-matrix-green/10 to-matrix-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Folder className="w-5 h-5 text-matrix-green" />
                    <h3 className="text-lg font-bold text-matrix-cyan">Project {index}</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-matrix-dark rounded-full flex items-center justify-center hover:bg-matrix-green hover:text-matrix-bg transition-colors duration-200 cursor-pointer">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 bg-matrix-dark rounded-full flex items-center justify-center hover:bg-matrix-cyan hover:text-matrix-bg transition-colors duration-200 cursor-pointer">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <p className="text-matrix-gray text-sm mb-4 leading-relaxed">
                  This is a placeholder for a future project. The project will showcase advanced backend 
                  engineering skills and modern development practices.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-matrix-dark border border-matrix-green rounded text-xs text-matrix-green font-mono">
                    .NET
                  </span>
                  <span className="px-2 py-1 bg-matrix-dark border border-matrix-cyan rounded text-xs text-matrix-cyan font-mono">
                    React
                  </span>
                  <span className="px-2 py-1 bg-matrix-dark border border-matrix-green rounded text-xs text-matrix-green font-mono">
                    AWS
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-matrix-gray text-xs">
                  <Code className="w-3 h-3" />
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add New Project Card */}
          <div className="skill-card group cursor-pointer border-dashed border-2 border-matrix-gray hover:border-matrix-green transition-all duration-300">
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <div className="w-12 h-12 bg-matrix-dark rounded-full flex items-center justify-center mb-4 group-hover:bg-matrix-green group-hover:text-matrix-bg transition-all duration-300">
                <Plus className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-matrix-gray group-hover:text-matrix-green transition-colors duration-300 mb-2">
                Add New Project
              </h3>
              <p className="text-sm text-matrix-gray">
                Future projects will be added here
              </p>
            </div>
          </div>
        </div>

        {/* Terminal Output Style Message */}
        <div className="mt-12 p-6 bg-matrix-surface border border-matrix-border rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-matrix-green font-mono">amin@portfolio:~/projects$</span>
            <div className="flex-1">
              <p className="text-matrix-white font-mono text-sm">
                echo "Personal projects section is under construction..."
              </p>
              <p className="text-matrix-gray font-mono text-sm mt-2">
                Personal projects section is under construction...
              </p>
              <p className="text-matrix-cyan font-mono text-sm mt-1">
                Stay tuned for exciting projects showcasing full-stack development,
                cloud architecture, and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalProjects
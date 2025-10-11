'use client'
import React, { useState, useEffect } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, Terminal } from 'lucide-react'

const TerminalHero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = 'amin@portfolio:~$ whoami'

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div className="terminal-window w-full max-w-4xl">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
          </div>
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-matrix-green" />
            <span className="text-sm text-matrix-gray">terminal</span>
          </div>
        </div>
        
        <div className="terminal-content">
          <div className="mb-6">
            <span className="terminal-prompt">amin@portfolio</span>
            <span className="text-matrix-white">:</span>
            <span className="terminal-path">~</span>
            <span className="text-matrix-white">$ </span>
            <span className="text-matrix-white">{displayText}</span>
            <span className="animate-terminal-cursor text-matrix-green">|</span>
          </div>
          
          {currentIndex >= fullText.length && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="glow-text">Amin Chouaibi</span>
                  <br />
                  <span className="text-matrix-white">El Azaar</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-matrix-cyan mb-4 font-mono">
                  Backend & Platform Engineer
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-matrix-gray mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Canet de Mar, Barcelona</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>achouaibiudg@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+34 635 069 015</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-matrix-white leading-relaxed text-lg mb-6">
                  Software engineer with <span className="text-matrix-green font-semibold">6+ years of experience</span> building 
                  backend systems and distributed platforms. Specialized in <span className="text-matrix-cyan">.NET, C#, 
                  event-driven architectures, data pipelines</span>, and cloud environments 
                  (<span className="text-matrix-green">AWS & Azure</span>).
                </p>
                <p className="text-matrix-gray leading-relaxed">
                  Passionate about pragmatic architecture, automation, and improving developer experience. 
                  Currently performing at a senior level: leading critical projects, defining architectural 
                  standards, and mentoring other engineers.
                </p>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/amin-chouaibi-el-azaar-223942160" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-matrix-surface border border-matrix-green rounded hover:bg-matrix-green hover:text-matrix-bg transition-all duration-300 glow-text"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/aminch18" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-matrix-surface border border-matrix-cyan rounded hover:bg-matrix-cyan hover:text-matrix-bg transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TerminalHero
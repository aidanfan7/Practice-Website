import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const roadmapData = [
  {
    phase: 1,
    title: 'Foundation',
    color: '#00d4ff',
    timeframe: 'Weeks 1–4',
    steps: [
      { title: 'HTML Fundamentals', desc: 'Structure, semantics, forms, accessibility', link: '/tracks/web-fundamentals', done: false },
      { title: 'CSS & Styling', desc: 'Flexbox, Grid, responsive design, animations', link: '/tracks/web-fundamentals', done: false },
      { title: 'Git & GitHub', desc: 'Version control, branching, pull requests', link: '/tracks/devops', done: false },
    ]
  },
  {
    phase: 2,
    title: 'Core JavaScript',
    color: '#ffd60a',
    timeframe: 'Weeks 5–10',
    steps: [
      { title: 'JS Syntax & Types', desc: 'Variables, functions, control flow', link: '/tracks/javascript', done: false },
      { title: 'DOM & Events', desc: 'Manipulate HTML with JavaScript', link: '/tracks/javascript', done: false },
      { title: 'Async JavaScript', desc: 'Promises, async/await, fetch API', link: '/tracks/javascript', done: false },
      { title: 'First Mini Projects', desc: 'To-do list, weather app, quiz game', link: '/challenges', done: false },
    ]
  },
  {
    phase: 3,
    title: 'Frontend Framework',
    color: '#8b83ff',
    timeframe: 'Weeks 11–15',
    steps: [
      { title: 'React Foundations', desc: 'Components, props, state, hooks', link: '/tracks/react', done: false },
      { title: 'React Router', desc: 'Multi-page navigation in SPA', link: '/tracks/react', done: false },
      { title: 'State Management', desc: 'Context API, useReducer', link: '/tracks/react', done: false },
      { title: 'Build a React App', desc: 'Full working project with API integration', link: '/tracks/react', done: false },
    ]
  },
  {
    phase: 4,
    title: 'Backend & Databases',
    color: '#00ff88',
    timeframe: 'Weeks 16–20',
    steps: [
      { title: 'Node.js & Express', desc: 'Servers, routing, middleware', link: '/tracks/backend', done: false },
      { title: 'REST API Design', desc: 'CRUD, status codes, best practices', link: '/tracks/backend', done: false },
      { title: 'Databases', desc: 'PostgreSQL + MongoDB fundamentals', link: '/tracks/backend', done: false },
      { title: 'Authentication', desc: 'JWT, sessions, bcrypt', link: '/tracks/backend', done: false },
    ]
  },
  {
    phase: 5,
    title: 'Full-Stack & Deploy',
    color: '#ff3d9a',
    timeframe: 'Weeks 21–24',
    steps: [
      { title: 'Connect Frontend ↔ Backend', desc: 'Full-stack data flow, CORS, env vars', link: '/tracks/devops', done: false },
      { title: 'Docker Basics', desc: 'Containerize your app', link: '/tracks/devops', done: false },
      { title: 'CI/CD Pipelines', desc: 'GitHub Actions, automated tests', link: '/tracks/devops', done: false },
      { title: 'Ship Your App', desc: 'Deploy to Vercel, Railway, or Render', link: '/tracks/devops', done: false },
    ]
  }
]

export default function Roadmap() {
  const [progress, setProgress] = useState({})

  const toggle = (phaseIdx, stepIdx) => {
    const key = `${phaseIdx}-${stepIdx}`
    setProgress(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const totalSteps = roadmapData.reduce((acc, p) => acc + p.steps.length, 0)
  const completedSteps = Object.values(progress).filter(Boolean).length
  const pct = Math.round((completedSteps / totalSteps) * 100)

  return (
    <main style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="badge badge-cyan" style={{ marginBottom: 16 }}>🗺️ Learning Roadmap</div>
          <h1 className="section-title" style={{ marginBottom: 12 }}>
            Your path from <span className="gradient-text">zero to full-stack</span>
          </h1>
          <p className="section-subtitle">
            A 24-week structured roadmap. Check off steps as you complete them to track your progress.
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius)', padding: 24, marginBottom: 48,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Overall Progress</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--purple-light)' }}>{pct}%</span>
          </div>
          <div style={{ height: 8, background: 'var(--bg-elevated)', borderRadius: 100, overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 100,
              background: 'linear-gradient(90deg, var(--purple), var(--cyan))',
              width: `${pct}%`, transition: 'width 0.5s ease',
            }} />
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
            {completedSteps} of {totalSteps} milestones completed
          </div>
        </div>

        {/* Phases */}
        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', left: 28, top: 60, bottom: 60,
            width: 2, background: 'var(--border)',
            zIndex: 0,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {roadmapData.map((phase, pi) => (
              <div key={pi} style={{ display: 'flex', gap: 24, position: 'relative' }}>
                {/* Phase marker */}
                <div style={{
                  width: 56, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1,
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: `${phase.color}18`,
                    border: `2px solid ${phase.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 18, color: phase.color,
                    flexShrink: 0,
                  }}>
                    {phase.phase}
                  </div>
                </div>

                {/* Phase content */}
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>{phase.title}</h2>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>⏱ {phase.timeframe}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {phase.steps.map((step, si) => {
                      const key = `${pi}-${si}`
                      const done = progress[key]
                      return (
                        <div key={si} style={{
                          background: done ? `${phase.color}08` : 'var(--bg-card)',
                          border: `1px solid ${done ? phase.color + '30' : 'var(--border)'}`,
                          borderRadius: 'var(--radius)', padding: '16px 20px',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          transition: 'all 0.2s', flexWrap: 'wrap', gap: 8,
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                            <button onClick={() => toggle(pi, si)} style={{
                              width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                              background: done ? phase.color : 'var(--bg-elevated)',
                              border: `2px solid ${done ? phase.color : 'var(--border-light)'}`,
                              cursor: 'pointer', fontSize: 11, color: 'white',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              transition: 'all 0.15s',
                            }}>
                              {done && '✓'}
                            </button>
                            <div>
                              <div style={{
                                fontSize: 14, fontWeight: 600,
                                textDecoration: done ? 'line-through' : 'none',
                                color: done ? 'var(--text-muted)' : 'var(--text)',
                              }}>
                                {step.title}
                              </div>
                              <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>{step.desc}</div>
                            </div>
                          </div>
                          <Link to={step.link} style={{
                            fontSize: 12, padding: '5px 12px',
                            background: `${phase.color}12`,
                            color: phase.color,
                            border: `1px solid ${phase.color}30`,
                            borderRadius: 6, fontWeight: 600,
                            textDecoration: 'none',
                          }}>
                            Go to Track →
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

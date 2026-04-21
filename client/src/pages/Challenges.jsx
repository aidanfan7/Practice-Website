import React, { useState } from 'react'
import { challenges } from '../data/curriculum.js'

const difficultyColors = {
  Easy: { bg: 'rgba(0,255,136,0.08)', border: 'rgba(0,255,136,0.2)', text: '#00ff88' },
  Medium: { bg: 'rgba(255,214,10,0.08)', border: 'rgba(255,214,10,0.2)', text: '#ffd60a' },
  Hard: { bg: 'rgba(255,61,154,0.08)', border: 'rgba(255,61,154,0.2)', text: '#ff3d9a' },
}

function ChallengeModal({ challenge, onClose }) {
  const [code, setCode] = useState(challenge.starterCode)
  const [showSolution, setShowSolution] = useState(false)
  const [output, setOutput] = useState('')

  const runCode = () => {
    try {
      const logs = []
      const mockConsole = { log: (...args) => logs.push(args.join(' ')) }
      const fn = new Function('console', code + '\n// run')
      fn(mockConsole)
      setOutput(logs.join('\n') || '(no output)')
    } catch (e) {
      setOutput('Error: ' + e.message)
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }} onClick={onClose}>
      <div style={{
        width: '100%', maxWidth: 900, maxHeight: '90vh',
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '16px 24px', background: 'var(--bg-elevated)',
          borderBottom: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{challenge.title}</h2>
            <div style={{ display: 'flex', gap: 8 }}>
              {challenge.tags.map(tag => (
                <span key={tag} className="badge badge-purple" style={{ fontSize: 10 }}>{tag}</span>
              ))}
            </div>
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 8, background: 'var(--bg-card)',
            border: '1px solid var(--border)', color: 'var(--text-muted)',
            fontSize: 16, cursor: 'pointer',
          }}>×</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, overflow: 'hidden' }}>
          {/* Problem */}
          <div style={{ padding: 24, borderRight: '1px solid var(--border)', overflow: 'auto' }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--purple-light)', marginBottom: 12 }}>
              Problem
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 20 }}>
              {challenge.description}
            </p>
            {showSolution && (
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--green)', marginBottom: 12 }}>
                  Solution
                </h3>
                <pre style={{
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  borderRadius: 8, padding: 16, fontSize: 12, lineHeight: 1.7,
                  overflow: 'auto', fontFamily: 'var(--mono)', color: 'var(--text)',
                }}>
                  <code>{challenge.solution}</code>
                </pre>
              </div>
            )}
            <button
              onClick={() => setShowSolution(!showSolution)}
              style={{
                marginTop: 12, fontSize: 12, padding: '6px 14px',
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                borderRadius: 6, color: 'var(--text-muted)', cursor: 'pointer',
              }}>
              {showSolution ? 'Hide Solution' : 'Reveal Solution'}
            </button>
          </div>

          {/* Editor */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              padding: '8px 16px', background: 'var(--bg-elevated)',
              borderBottom: '1px solid var(--border)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--mono)' }}>editor.js</span>
              <button onClick={runCode} style={{
                padding: '5px 14px', borderRadius: 6, fontSize: 12, fontWeight: 600,
                background: 'linear-gradient(135deg, var(--purple), var(--purple-dark))',
                color: 'white', border: 'none', cursor: 'pointer',
              }}>
                ▶ Run
              </button>
            </div>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              spellCheck={false}
              style={{
                flex: 1, padding: 16, fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.7,
                background: 'var(--bg)', color: 'var(--text)', border: 'none',
                resize: 'none', outline: 'none', minHeight: 200,
              }}
            />
            {output && (
              <div style={{
                borderTop: '1px solid var(--border)', padding: 16,
                fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)',
                background: 'var(--bg-elevated)', maxHeight: 120, overflow: 'auto',
                whiteSpace: 'pre-wrap',
              }}>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: 4, fontSize: 11 }}>Output:</span>
                {output}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Challenges() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? challenges : challenges.filter(c => c.difficulty === filter)

  return (
    <main style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="badge badge-green" style={{ marginBottom: 16 }}>⚔️ Challenges</div>
          <h1 className="section-title" style={{ marginBottom: 12 }}>
            Sharpen your <span className="gradient-text">coding skills</span>
          </h1>
          <p className="section-subtitle">
            Practice with real-world problems across JavaScript, CSS, Python, and backend development.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {['All', 'Easy', 'Medium', 'Hard'].map(d => (
            <button key={d} onClick={() => setFilter(d)} style={{
              padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 500,
              background: filter === d ? 'var(--purple)' : 'var(--bg-elevated)',
              color: filter === d ? 'white' : 'var(--text-muted)',
              border: filter === d ? '1px solid var(--purple)' : '1px solid var(--border)',
              cursor: 'pointer', transition: 'all 0.15s',
            }}>
              {d}
            </button>
          ))}
        </div>

        {/* Challenges list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map((ch, i) => {
            const dc = difficultyColors[ch.difficulty]
            return (
              <div key={ch.id} onClick={() => setSelected(ch)} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '20px 24px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer', transition: 'all 0.2s',
                flexWrap: 'wrap', gap: 12,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-light)'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text-dim)', minWidth: 28 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{ch.title}</h3>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {ch.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: 11, padding: '2px 8px', borderRadius: 100,
                          background: 'var(--bg-elevated)', color: 'var(--text-muted)',
                          border: '1px solid var(--border)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{ch.track}</span>
                  <span style={{
                    padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600,
                    background: dc.bg, color: dc.text, border: `1px solid ${dc.border}`,
                  }}>
                    {ch.difficulty}
                  </span>
                  <button className="btn btn-primary" style={{ fontSize: 12, padding: '7px 16px' }}>
                    Solve →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selected && <ChallengeModal challenge={selected} onClose={() => setSelected(null)} />}
    </main>
  )
}

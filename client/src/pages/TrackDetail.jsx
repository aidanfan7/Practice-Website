import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { tracks } from '../data/curriculum.js'

const colorMap = {
  cyan: { text: '#00d4ff', bg: 'rgba(0,212,255,0.08)', border: 'rgba(0,212,255,0.2)' },
  yellow: { text: '#ffd60a', bg: 'rgba(255,214,10,0.08)', border: 'rgba(255,214,10,0.2)' },
  purple: { text: '#8b83ff', bg: 'rgba(108,99,255,0.08)', border: 'rgba(108,99,255,0.2)' },
  green: { text: '#00ff88', bg: 'rgba(0,255,136,0.08)', border: 'rgba(0,255,136,0.2)' },
  orange: { text: '#ff6b35', bg: 'rgba(255,107,53,0.08)', border: 'rgba(255,107,53,0.2)' },
  pink: { text: '#ff3d9a', bg: 'rgba(255,61,154,0.08)', border: 'rgba(255,61,154,0.2)' },
}

export default function TrackDetail() {
  const { trackId } = useParams()
  const track = tracks.find(t => t.id === trackId)
  const [openModules, setOpenModules] = useState({})

  if (!track) {
    return (
      <main style={{ paddingTop: 120, textAlign: 'center' }}>
        <h2>Track not found</h2>
        <Link to="/tracks" className="btn btn-primary" style={{ marginTop: 24 }}>← Back to Tracks</Link>
      </main>
    )
  }

  const c = colorMap[track.color] || colorMap.purple
  const toggleModule = (id) => setOpenModules(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <main style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">
        {/* Breadcrumb */}
        <Link to="/tracks" style={{ fontSize: 13, color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
          ← All Tracks
        </Link>

        {/* Hero */}
        <div style={{
          background: c.bg, border: `1px solid ${c.border}`,
          borderRadius: 'var(--radius-lg)', padding: 40, marginBottom: 40,
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 40, marginBottom: 12 }}>{track.icon}</div>
            <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>
              {track.title}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 500 }}>{track.description}</p>
            <div style={{ display: 'flex', gap: 20, marginTop: 20, flexWrap: 'wrap' }}>
              {[
                { icon: '🎯', val: track.level },
                { icon: '⏱', val: track.duration },
                { icon: '📖', val: `${track.lessons} lessons` },
              ].map(({ icon, val }) => (
                <span key={val} style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  {icon} {val}
                </span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{
              fontSize: 48, display: 'block', padding: 16,
              background: c.bg, borderRadius: 16, border: `1px solid ${c.border}`,
            }}>
              {track.icon}
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 32, alignItems: 'start' }}>
          {/* Modules */}
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Curriculum</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {track.modules.map((module, i) => (
                <div key={module.id} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', overflow: 'hidden',
                }}>
                  <button
                    onClick={() => toggleModule(module.id)}
                    style={{
                      width: '100%', padding: '16px 20px',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--text)', fontFamily: 'var(--font)',
                    }}>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>
                      <span style={{ color: c.text, marginRight: 10, fontFamily: 'var(--mono)', fontSize: 13 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {module.title}
                    </span>
                    <span style={{
                      fontSize: 12, color: 'var(--text-muted)',
                      transform: openModules[module.id] ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s',
                    }}>▼</span>
                  </button>

                  {(openModules[module.id] || i === 0) && (
                    <div style={{ borderTop: '1px solid var(--border)' }}>
                      {module.lessons.map((lesson, li) => (
                        <div key={lesson.id} style={{
                          padding: '14px 20px',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          borderBottom: li < module.lessons.length - 1 ? '1px solid var(--border)' : 'none',
                          background: 'var(--bg)',
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                              width: 28, height: 28, borderRadius: '50%',
                              background: lesson.type === 'project' ? c.bg : 'var(--bg-elevated)',
                              border: `1px solid ${lesson.type === 'project' ? c.border : 'var(--border)'}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 11,
                            }}>
                              {lesson.type === 'project' ? '🔨' : '📄'}
                            </div>
                            <div>
                              <div style={{ fontSize: 13, fontWeight: 500 }}>{lesson.title}</div>
                              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                                {lesson.type === 'project' ? 'Project' : 'Lesson'} · {lesson.duration}
                              </div>
                            </div>
                          </div>
                          <Link
                            to={`/lesson/${track.id}/${lesson.id}`}
                            style={{
                              fontSize: 11, padding: '5px 12px', borderRadius: 6,
                              background: c.bg, color: c.text, border: `1px solid ${c.border}`,
                              fontWeight: 600, textDecoration: 'none',
                              transition: 'opacity 0.15s',
                            }}>
                            Start →
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: 24,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Track Overview</h3>
              {[
                { label: 'Level', value: track.level },
                { label: 'Duration', value: track.duration },
                { label: 'Lessons', value: track.lessons },
                { label: 'Modules', value: track.modules.length },
              ].map(({ label, value }) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontSize: 13, padding: '8px 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                  <span style={{ fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: c.bg, border: `1px solid ${c.border}`,
              borderRadius: 'var(--radius)', padding: 20, textAlign: 'center',
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{track.icon}</div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
                Start from the first lesson and work your way through.
              </p>
              <Link to={`/lesson/${track.id}/1`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Begin Track →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

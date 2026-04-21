import React from 'react'
import { Link } from 'react-router-dom'

const colorMap = {
  cyan: { bg: 'rgba(0,212,255,0.08)', border: 'rgba(0,212,255,0.2)', text: '#00d4ff', glow: 'rgba(0,212,255,0.15)' },
  yellow: { bg: 'rgba(255,214,10,0.08)', border: 'rgba(255,214,10,0.2)', text: '#ffd60a', glow: 'rgba(255,214,10,0.15)' },
  purple: { bg: 'rgba(108,99,255,0.08)', border: 'rgba(108,99,255,0.2)', text: '#8b83ff', glow: 'rgba(108,99,255,0.15)' },
  green: { bg: 'rgba(0,255,136,0.08)', border: 'rgba(0,255,136,0.2)', text: '#00ff88', glow: 'rgba(0,255,136,0.15)' },
  orange: { bg: 'rgba(255,107,53,0.08)', border: 'rgba(255,107,53,0.2)', text: '#ff6b35', glow: 'rgba(255,107,53,0.15)' },
  pink: { bg: 'rgba(255,61,154,0.08)', border: 'rgba(255,61,154,0.2)', text: '#ff3d9a', glow: 'rgba(255,61,154,0.15)' },
}

export default function TrackCard({ track }) {
  const c = colorMap[track.color] || colorMap.purple

  return (
    <Link to={`/tracks/${track.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'var(--bg-card)',
        border: `1px solid var(--border)`,
        borderRadius: 'var(--radius-lg)',
        padding: 24,
        transition: 'all 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = c.border
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = `0 8px 32px ${c.glow}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}>
        {/* Icon & Level */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{
            width: 48, height: 48, background: c.bg, borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
            border: `1px solid ${c.border}`,
          }}>
            {track.icon}
          </div>
          <span style={{
            padding: '4px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600,
            background: c.bg, color: c.text, border: `1px solid ${c.border}`,
            letterSpacing: '0.03em',
          }}>
            {track.level}
          </span>
        </div>

        {/* Title & Desc */}
        <div>
          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, color: 'var(--text)' }}>{track.title}</h3>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{track.description}</p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 16, marginTop: 'auto',
          paddingTop: 16, borderTop: '1px solid var(--border)',
        }}>
          {[
            { icon: '📚', val: `${track.lessons} lessons` },
            { icon: '⏱', val: track.duration },
          ].map(({ icon, val }) => (
            <span key={val} style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
              {icon} {val}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

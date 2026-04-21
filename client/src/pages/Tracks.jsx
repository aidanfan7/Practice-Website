import React, { useState } from 'react'
import TrackCard from '../components/TrackCard.jsx'
import { tracks } from '../data/curriculum.js'

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function Tracks() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? tracks
    : tracks.filter(t => t.level.includes(filter))

  return (
    <main style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="badge badge-purple" style={{ marginBottom: 16 }}>📚 All Tracks</div>
          <h1 className="section-title" style={{ marginBottom: 12 }}>
            Choose your <span className="gradient-text">learning path</span>
          </h1>
          <p className="section-subtitle">
            Each track is a complete, self-paced course designed to take you from concept to production.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
          {levels.map(level => (
            <button key={level} onClick={() => setFilter(level)} style={{
              padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 500,
              background: filter === level ? 'var(--purple)' : 'var(--bg-elevated)',
              color: filter === level ? 'white' : 'var(--text-muted)',
              border: filter === level ? '1px solid var(--purple)' : '1px solid var(--border)',
              transition: 'all 0.15s ease',
              cursor: 'pointer',
            }}>
              {level}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {filtered.map(track => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: 80, color: 'var(--text-muted)' }}>
            No tracks match that filter yet.
          </div>
        )}
      </div>
    </main>
  )
}

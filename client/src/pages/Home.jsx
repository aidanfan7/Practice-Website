import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TrackCard from '../components/TrackCard.jsx'
import { tracks } from '../data/curriculum.js'

const stats = [
  { value: '6', label: 'Learning Tracks' },
  { value: '80+', label: 'Lessons' },
  { value: '20+', label: 'Challenges' },
  { value: '100%', label: 'Free Forever' },
]

const features = [
  {
    icon: '🗺️',
    title: 'Structured Roadmaps',
    desc: 'Follow curated learning paths from zero to production-ready developer.',
    color: 'purple',
  },
  {
    icon: '⚔️',
    title: 'Code Challenges',
    desc: 'Sharpen your skills with progressively harder coding problems.',
    color: 'cyan',
  },
  {
    icon: '📖',
    title: 'Interactive Lessons',
    desc: 'Read, code, and quiz — all inside a clean, distraction-free interface.',
    color: 'green',
  },
  {
    icon: '🏗️',
    title: 'Real Projects',
    desc: 'Build actual apps to solidify concepts and grow your portfolio.',
    color: 'orange',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }} className="grid-dots">
        {/* Glow orbs */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 24px' }}>
          <div className="badge badge-purple" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <span>🚀</span> Free Full-Stack Education
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            marginBottom: 24,
          }}>
            Learn to Build.<br />
            <span className="gradient-text">Ship Real Products.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'var(--text-muted)',
            maxWidth: 560,
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}>
            HackPrep is a structured platform for learning web development, backend engineering, and everything in between — built for the next generation of hackers.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tracks" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
              Explore Tracks →
            </Link>
            <Link to="/roadmap" className="btn btn-secondary" style={{ fontSize: 15, padding: '14px 28px' }}>
              View Roadmap
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 40, marginTop: 64,
            flexWrap: 'wrap',
          }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--purple-light)', letterSpacing: '-0.02em' }}>{value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Everything you need to <span className="gradient-text">go from 0 to hired</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              No fluff. No subscriptions. Just structured content that actually gets you building.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {features.map((f, i) => (
              <div key={f.title} className="card" style={{ padding: 24, animationDelay: `${i * 0.1}s` }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, fontSize: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-elevated)', marginBottom: 16,
                  border: '1px solid var(--border)',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Preview */}
      <section style={{ padding: '80px 0', background: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: 8 }}>Learning Tracks</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>Pick a track and dive in — each one builds on the last.</p>
            </div>
            <Link to="/tracks" className="btn btn-ghost" style={{ color: 'var(--purple-light)' }}>
              View all tracks →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {tracks.slice(0, 3).map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* Code Teaser */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48, alignItems: 'center',
          }}>
            <div>
              <div className="badge badge-green" style={{ marginBottom: 20 }}>✦ Challenges</div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Sharpen skills with <span className="gradient-text">real problems</span>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: 28 }}>
                From classic algorithms to real-world frontend and backend challenges. Write code, see results, level up.
              </p>
              <Link to="/challenges" className="btn btn-primary">
                Try a Challenge →
              </Link>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              fontFamily: 'var(--mono)',
            }}>
              {/* Window chrome */}
              <div style={{
                padding: '12px 16px', background: 'var(--bg-elevated)',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c940' }} />
                <span style={{ fontSize: 12, color: 'var(--text-dim)', marginLeft: 8, fontFamily: 'var(--mono)' }}>challenge.js</span>
              </div>
              <pre style={{ padding: 24, fontSize: 13, lineHeight: 1.8, overflow: 'auto', color: 'var(--text)' }}>
                <code>
                  <span style={{ color: '#6b8cff' }}>function</span>{' '}
                  <span style={{ color: '#00ff88' }}>debounce</span>
                  <span style={{ color: '#e8e8f0' }}>(func, wait) {'{'}</span>{'\n'}
                  <span style={{ color: '#e8e8f0' }}>  </span>
                  <span style={{ color: '#6b8cff' }}>let</span>
                  <span style={{ color: '#e8e8f0' }}> timeout;</span>{'\n'}
                  <span style={{ color: '#6b8cff' }}>  return function</span>
                  <span style={{ color: '#e8e8f0' }}>(...args) {'{'}</span>{'\n'}
                  <span style={{ color: '#e8e8f0' }}>    clearTimeout(timeout);</span>{'\n'}
                  <span style={{ color: '#e8e8f0' }}>    timeout = </span>
                  <span style={{ color: '#00d4ff' }}>setTimeout</span>
                  <span style={{ color: '#e8e8f0' }}>({'}'}</span>{'\n'}
                  <span style={{ color: '#e8e8f0' }}>      () </span>
                  <span style={{ color: '#6b8cff' }}>=&gt;</span>
                  <span style={{ color: '#e8e8f0' }}> func(...args), wait);</span>{'\n'}
                  <span style={{ color: '#e8e8f0' }}>  {'}'};</span>{'\n'}
                  <span style={{ color: '#e8e8f0' }}>{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,255,0.08))',
            border: '1px solid rgba(108,99,255,0.25)',
            borderRadius: 24,
            padding: 'clamp(40px, 6vw, 72px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -100, right: -100,
              width: 300, height: 300,
              background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <h2 className="section-title" style={{ marginBottom: 16 }}>Ready to start building?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 32, fontSize: 16 }}>
              Join thousands of learners on the path from beginner to full-stack developer.
            </p>
            <Link to="/tracks" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>
              Get Started — It's Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

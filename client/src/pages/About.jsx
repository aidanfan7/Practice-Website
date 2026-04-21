import React from 'react'
import { Link } from 'react-router-dom'

const founders = [
  {
    name: 'Rohan Sharma',
    role: 'Co-Founder & CEO',
    bio: 'Rohan is a full-stack engineer and educator who built his first web app at 16. After studying computer science, he spent years teaching peers the skills that actually matter in industry — and got tired of the paywalls blocking great education.',
    color: '#6c63ff',
    emoji: '👨‍💻',
    skills: ['Full-Stack Dev', 'System Design', 'Mentorship', 'React & Node'],
    initials: 'RS',
  },
  {
    name: 'Aidan Fan',
    role: 'Co-Founder & CTO',
    bio: 'Aidan is an engineer obsessed with developer tooling and the learning experience. He believes the best way to teach programming is through building real things — not watching videos. HackPrep is the platform he wished existed when he was starting out.',
    color: '#00d4ff',
    emoji: '🧑‍🔬',
    skills: ['Backend Systems', 'DevOps', 'Tooling', 'Python & Go'],
    initials: 'AF',
  }
]

const values = [
  { icon: '🆓', title: 'Free Forever', desc: 'We believe education is a right, not a subscription. Every lesson, challenge, and resource is completely free.' },
  { icon: '🏗️', title: 'Build to Learn', desc: 'Theory alone doesn\'t make you a developer. Every concept is paired with hands-on practice and real projects.' },
  { icon: '🛤️', title: 'Opinionated Paths', desc: 'No analysis paralysis. We give you a clear roadmap so you can focus on learning, not figuring out what to learn.' },
  { icon: '🌍', title: 'For Everyone', desc: 'From absolute beginners to career-switchers — our content meets you where you are.' },
]

export default function About() {
  return (
    <main style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="badge badge-purple" style={{ marginBottom: 20, display: 'inline-flex' }}>✨ Our Story</div>
          <h1 className="section-title" style={{ marginBottom: 16 }}>
            Built by developers, <span className="gradient-text">for developers</span>
          </h1>
          <p style={{ fontSize: 17, color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            HackPrep was born out of frustration — great programming education was either buried behind paywalls or scattered across a hundred different platforms. We built the platform we wanted to learn from.
          </p>
        </div>

        {/* Founders */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>Meet the Founders</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {founders.map(founder => (
              <div key={founder.name} style={{
                background: 'var(--bg-card)',
                border: `1px solid ${founder.color}25`,
                borderRadius: 'var(--radius-lg)',
                padding: 32,
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${founder.color}50`
                e.currentTarget.style.boxShadow = `0 8px 40px ${founder.color}10`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${founder.color}25`
                e.currentTarget.style.boxShadow = 'none'
              }}>
                {/* Avatar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: `${founder.color}18`,
                    border: `2px solid ${founder.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28,
                  }}>
                    {founder.emoji}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>{founder.name}</h3>
                    <span style={{ fontSize: 13, color: founder.color, fontWeight: 600 }}>{founder.role}</span>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 20 }}>
                  {founder.bio}
                </p>

                {/* Skills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {founder.skills.map(skill => (
                    <span key={skill} style={{
                      padding: '4px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600,
                      background: `${founder.color}10`,
                      color: founder.color,
                      border: `1px solid ${founder.color}25`,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,212,255,0.06))',
          border: '1px solid rgba(108,99,255,0.2)',
          borderRadius: 'var(--radius-lg)', padding: 48, marginBottom: 80,
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>
            Our Mission
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
            To make world-class software development education accessible to every person on the planet — regardless of background, location, or financial situation.
          </p>
        </section>

        {/* Values */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>What We Stand For</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {values.map(v => (
              <div key={v.title} className="card" style={{ padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12 }}>Ready to build something?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>
            Start for free. No account required. Just pick a track and begin.
          </p>
          <Link to="/tracks" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
            Start Learning →
          </Link>
        </div>
      </div>
    </main>
  )
}

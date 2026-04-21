import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-card)',
      marginTop: 80,
    }}>
      <div className="container" style={{ padding: '48px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, background: 'linear-gradient(135deg, #6c63ff, #4f46e5)',
                borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 800, color: 'white',
              }}>{'</>'}</div>
              <span style={{ fontWeight: 800, fontSize: 16 }}>Hack<span style={{ color: '#6c63ff' }}>Prep</span></span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Free, structured learning for the next generation of developers.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Learn</h4>
            {['Tracks', 'Challenges', 'Roadmap', 'Projects'].map(item => (
              <Link key={item} to={`/${item.toLowerCase()}`} style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                {item}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Company</h4>
            {[{ label: 'About', path: '/about' }, { label: 'Blog', path: '/blog' }].map(({ label, path }) => (
              <Link key={label} to={path} style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            © 2024 HackPrep. Founded by <span style={{ color: 'var(--purple-light)' }}>Rohan Sharma</span> &amp; <span style={{ color: 'var(--cyan)' }}>Aidan Fan</span>. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>
            Built with ❤️ for developers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}

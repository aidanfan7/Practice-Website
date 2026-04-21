import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(30,30,46,0.8)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 64, gap: 32 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, background: 'linear-gradient(135deg, #6c63ff, #4f46e5)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 800, color: 'white',
          }}>
            {'</>'}
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>
            Hack<span style={{ color: '#6c63ff' }}>Prep</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1, marginLeft: 16 }}
             className="desktop-nav">
          {[
            { path: '/', label: 'Home' },
            { path: '/tracks', label: 'Tracks' },
            { path: '/challenges', label: 'Challenges' },
            { path: '/roadmap', label: 'Roadmap' },
            { path: '/about', label: 'About' },
          ].map(({ path, label }) => (
            <Link key={path} to={path} style={{
              padding: '6px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
              color: isActive(path) ? '#8b83ff' : '#6b6b8a',
              background: isActive(path) ? 'rgba(108,99,255,0.1)' : 'transparent',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => { if (!isActive(path)) e.target.style.color = '#e8e8f0' }}
            onMouseLeave={e => { if (!isActive(path)) e.target.style.color = '#6b6b8a' }}>
              {label}
            </Link>
          ))}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/tracks" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: 13 }}>
            Start Learning
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

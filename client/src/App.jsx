import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Tracks from './pages/Tracks.jsx'
import TrackDetail from './pages/TrackDetail.jsx'
import Lesson from './pages/Lesson.jsx'
import Challenges from './pages/Challenges.jsx'
import Roadmap from './pages/Roadmap.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/tracks/:trackId" element={<TrackDetail />} />
        <Route path="/lesson/:trackId/:lessonId" element={<Lesson />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={
          <main style={{ paddingTop: 160, textAlign: 'center', minHeight: '70vh' }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>404</div>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Page not found.</p>
            <a href="/" className="btn btn-primary">Go Home</a>
          </main>
        } />
      </Routes>
      <Footer />
    </>
  )
}

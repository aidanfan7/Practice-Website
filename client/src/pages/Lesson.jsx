import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { tracks, lessonContent } from '../data/curriculum.js'

function CodeBlock({ code, language, label }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{
      background: 'var(--bg)', border: '1px solid var(--border)',
      borderRadius: 12, overflow: 'hidden', marginBottom: 24,
    }}>
      <div style={{
        padding: '10px 16px', background: 'var(--bg-elevated)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--mono)' }}>
          {label || language}
        </span>
        <button onClick={copy} style={{
          fontSize: 11, padding: '3px 10px', borderRadius: 6,
          background: copied ? 'rgba(0,255,136,0.1)' : 'var(--bg-card)',
          color: copied ? 'var(--green)' : 'var(--text-muted)',
          border: `1px solid ${copied ? 'rgba(0,255,136,0.2)' : 'var(--border)'}`,
          cursor: 'pointer',
        }}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre style={{
        padding: 20, fontSize: 13, lineHeight: 1.8,
        overflow: 'auto', color: 'var(--text)', fontFamily: 'var(--mono)',
        margin: 0,
      }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

function Quiz({ question, options, answer, explanation }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  return (
    <div style={{
      background: 'rgba(108,99,255,0.06)', border: '1px solid rgba(108,99,255,0.2)',
      borderRadius: 12, padding: 24, marginBottom: 24,
    }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--purple-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
        ✦ Knowledge Check
      </div>
      <p style={{ fontWeight: 600, marginBottom: 16, fontSize: 15 }}>{question}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {options.map((opt, i) => {
          const isCorrect = i === answer
          const isSelected = selected === i
          let bg = 'var(--bg-elevated)'
          let border = 'var(--border)'
          let color = 'var(--text)'

          if (revealed) {
            if (isCorrect) { bg = 'rgba(0,255,136,0.1)'; border = 'rgba(0,255,136,0.3)'; color = 'var(--green)' }
            else if (isSelected && !isCorrect) { bg = 'rgba(255,61,154,0.1)'; border = 'rgba(255,61,154,0.3)'; color = 'var(--pink)' }
          } else if (isSelected) {
            bg = 'rgba(108,99,255,0.12)'; border = 'rgba(108,99,255,0.3)'
          }

          return (
            <button key={i} onClick={() => !revealed && setSelected(i)} style={{
              padding: '10px 16px', borderRadius: 8, textAlign: 'left',
              background: bg, border: `1px solid ${border}`, color,
              cursor: revealed ? 'default' : 'pointer',
              fontFamily: 'var(--font)', fontSize: 13, fontWeight: 500,
              transition: 'all 0.15s',
            }}>
              <span style={{ marginRight: 10, fontFamily: 'var(--mono)', opacity: 0.5 }}>{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          )
        })}
      </div>

      {selected !== null && !revealed && (
        <button onClick={() => setRevealed(true)} className="btn btn-primary" style={{ marginTop: 16, fontSize: 13 }}>
          Check Answer
        </button>
      )}

      {revealed && (
        <div style={{
          marginTop: 16, padding: 12, borderRadius: 8,
          background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.2)',
          fontSize: 13, color: 'var(--text-muted)',
        }}>
          <strong style={{ color: 'var(--cyan)' }}>Explanation: </strong>{explanation}
        </div>
      )}
    </div>
  )
}

function Callout({ variant, title, body }) {
  const styles = {
    info: { bg: 'rgba(0,212,255,0.06)', border: 'rgba(0,212,255,0.2)', icon: 'ℹ️', titleColor: 'var(--cyan)' },
    warning: { bg: 'rgba(255,214,10,0.06)', border: 'rgba(255,214,10,0.2)', icon: '⚠️', titleColor: 'var(--yellow)' },
    tip: { bg: 'rgba(0,255,136,0.06)', border: 'rgba(0,255,136,0.2)', icon: '💡', titleColor: 'var(--green)' },
  }
  const s = styles[variant] || styles.info

  return (
    <div style={{
      background: s.bg, border: `1px solid ${s.border}`,
      borderRadius: 12, padding: 20, marginBottom: 24,
    }}>
      <div style={{ fontWeight: 700, fontSize: 14, color: s.titleColor, marginBottom: 6 }}>
        {s.icon} {title}
      </div>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{body}</p>
    </div>
  )
}

export default function Lesson() {
  const { trackId, lessonId } = useParams()
  const track = tracks.find(t => t.id === trackId)

  // Use sample content or a generic lesson
  const content = lessonContent['react-components-jsx']

  if (!track) {
    return (
      <main style={{ paddingTop: 120, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>Track not found.</p>
        <Link to="/tracks" className="btn btn-primary" style={{ marginTop: 16 }}>← Back to Tracks</Link>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
        {/* Sidebar */}
        <aside style={{
          width: 260, flexShrink: 0, borderRight: '1px solid var(--border)',
          padding: '32px 0', position: 'sticky', top: 64, height: 'calc(100vh - 64px)',
          overflow: 'auto', background: 'var(--bg-card)',
        }}>
          <div style={{ padding: '0 20px 16px', borderBottom: '1px solid var(--border)', marginBottom: 16 }}>
            <Link to={`/tracks/${track.id}`} style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              ← {track.title}
            </Link>
          </div>
          {track.modules.map((module, mi) => (
            <div key={module.id} style={{ marginBottom: 8 }}>
              <div style={{ padding: '6px 20px', fontSize: 11, fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {module.title}
              </div>
              {module.lessons.map((lesson) => (
                <Link key={lesson.id} to={`/lesson/${track.id}/${lesson.id}`} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 20px', fontSize: 13,
                  color: String(lesson.id) === lessonId ? 'var(--purple-light)' : 'var(--text-muted)',
                  background: String(lesson.id) === lessonId ? 'rgba(108,99,255,0.08)' : 'transparent',
                  textDecoration: 'none',
                  borderLeft: String(lesson.id) === lessonId ? '2px solid var(--purple)' : '2px solid transparent',
                  transition: 'all 0.15s',
                }}>
                  <span>{lesson.type === 'project' ? '🔨' : '📄'}</span>
                  {lesson.title}
                </Link>
              ))}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div style={{ flex: 1, padding: '40px clamp(24px, 4vw, 64px)', maxWidth: 780 }}>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 24 }}>
            {track.title} → Lesson {lessonId}
          </div>

          <h1 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
            {content.title}
          </h1>
          <div style={{ display: 'flex', gap: 16, marginBottom: 36, fontSize: 13, color: 'var(--text-muted)' }}>
            <span>⏱ {content.duration}</span>
            <span>📚 {content.track}</span>
          </div>

          <div style={{ borderBottom: '1px solid var(--border)', marginBottom: 36 }} />

          {content.content.map((block, i) => {
            if (block.type === 'text') {
              return (
                <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text)', marginBottom: 20 }}
                   dangerouslySetInnerHTML={{ __html: block.body.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`(.*?)`/g, `<code style="font-family:var(--mono);background:var(--bg-elevated);padding:2px 6px;border-radius:4px;font-size:13px;color:var(--purple-light)">$1</code>`).replace(/\n/g, '<br/>') }} />
              )
            }
            if (block.type === 'code') {
              return <CodeBlock key={i} code={block.code} language={block.language} label={block.label} />
            }
            if (block.type === 'callout') {
              return <Callout key={i} variant={block.variant} title={block.title} body={block.body} />
            }
            if (block.type === 'quiz') {
              return <Quiz key={i} {...block} />
            }
            return null
          })}

          {/* Next Lesson */}
          <div style={{
            marginTop: 48, padding: 24, background: 'var(--bg-card)',
            border: '1px solid var(--border)', borderRadius: 'var(--radius)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Next Lesson</div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Props & State</div>
            </div>
            <Link to={`/lesson/${track.id}/${parseInt(lessonId) + 1}`} className="btn btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}>
              Continue →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

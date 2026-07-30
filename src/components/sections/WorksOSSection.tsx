import { useState } from "react"

const projectList = [
  { name: 'IEHP Medical System', role: 'Technical Lead', start: 'Mar 2025', end: 'Now', type: 'Professional' },
  { name: 'Procurement Dashboard', role: 'Full Stack Developer', start: 'Mar 2025', end: 'Now', type: 'Professional' },
  { name: 'Unified CRM', role: 'Full Stack Developer', start: 'Mar 2025', end: 'Now', type: 'Professional' },
  { name: 'Asset Mgmt Dashboard', role: 'Team Lead', start: 'Mar 2025', end: 'Now', type: 'Professional' },
  { name: 'Govt. Case Portal', role: 'Associate Engineer', start: 'Mar 2022', end: 'Feb 2025', type: 'Enterprise' },
  { name: 'Ticket Automation', role: 'Associate Engineer', start: 'Mar 2022', end: 'Feb 2025', type: 'Enterprise' },
]

const GANTT_START = new Date('2021-11-01').getTime()
const GANTT_END   = new Date('2026-07-29').getTime()
const GANTT_SPAN  = GANTT_END - GANTT_START
const today       = new Date().getTime()

function ganttBar(startStr: string, endStr: string | null) {
  const s = Math.max(new Date(startStr).getTime(), GANTT_START)
  const e = endStr ? new Date(endStr).getTime() : today
  const left  = ((s - GANTT_START) / GANTT_SPAN) * 100
  const width = ((Math.min(e, today) - s) / GANTT_SPAN) * 100
  return { left: `${left.toFixed(1)}%`, width: `${Math.max(width, 1.5).toFixed(1)}%` }
}

const todayPct = (((today - GANTT_START) / GANTT_SPAN) * 100).toFixed(1)

const ganttRows = [
  { name: 'Kaizen Que',       start: '2025-03-01', end: null },
  { name: 'iFIX Tech Global', start: '2022-03-01', end: '2025-02-28' },
  { name: 'VEverywhere',      start: '2020-11-01', end: '2021-06-30' },
]

function WorksOSSection() {
  const [open, setOpen] = useState(true)

  return (
    <section id="works-os" className="reveal" style={{ background: 'var(--accent)', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {/* Menu bar */}
      <div style={{ background: 'rgba(20,12,8,0.88)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem', height: 28, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
          <span style={{ width: 18, height: 18, borderRadius: 4, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.6rem' }}>
            <span style={{ color: 'white', fontSize: '0.55rem', fontWeight: 700 }}>R</span>
          </span>
          {['Portfolio', 'File', 'View'].map((m) => (
            <span key={m} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.68rem', padding: '0 0.55rem', cursor: 'default' }}>{m}</span>
          ))}
        </div>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.62rem' }}>
          {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}{' '}
          {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} IST
        </span>
      </div>

      {/* Desktop */}
      <div style={{ flex: 1, padding: '1.5rem', position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        {/* Desktop file */}
        <div style={{ position: 'absolute', left: '1.5rem', bottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
          <div style={{ width: 48, height: 56, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.7)' }}>≡</span>
          </div>
          <span style={{ fontSize: '0.55rem', color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>resume.pdf</span>
        </div>

        {open ? (
          <div style={{ background: 'var(--bg)', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 8, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', width: '100%', maxWidth: 920, animation: 'fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards' }}>
            {/* Window chrome */}
            <div style={{ background: '#ece7dc', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {[{ c: '#ff5f57', fn: () => setOpen(false) }, { c: '#ffbd2e', fn: () => {} }, { c: '#28c840', fn: () => {} }].map((b, i) => (
                <span key={i} onClick={b.fn} style={{ width: 11, height: 11, borderRadius: '50%', background: b.c, cursor: 'pointer', flexShrink: 0 }} />
              ))}
              <span style={{ flex: 1, textAlign: 'center', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>Works</span>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
            </div>

            {/* Project List */}
            <div style={{ borderBottom: '1px solid var(--border)' }}>
              <div style={{ background: '#e8e3d8', padding: '0.45rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>Project List</span>
              </div>
              {projectList.map((p, i) => (
                <div key={p.name} style={{ padding: '0.55rem 1.25rem', borderBottom: i < projectList.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{p.name}</span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ color: 'var(--text-muted)' }}>{p.role}</span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ color: 'var(--text-muted)' }}>{p.start} – {p.end}</span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ color: 'var(--accent)', fontSize: '0.62rem' }}>{p.type}</span>
                </div>
              ))}
            </div>

            {/* Gantt */}
            <div>
              <div style={{ background: '#e8e3d8', padding: '0.45rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>Timeline (from 2021)</span>
              </div>

              {/* Year headers */}
              <div style={{ position: 'relative', paddingLeft: 170, paddingRight: '1.25rem', borderBottom: '1px solid var(--border)', height: 28 }}>
                {['2022', '2023', '2024', '2025', '2026'].map((y) => {
                  const pct = ((new Date(`${y}-01-01`).getTime() - GANTT_START) / GANTT_SPAN) * 100
                  if (pct < 0 || pct > 100) return null
                  return (
                    <span key={y} style={{ position: 'absolute', left: `calc(170px + ${pct.toFixed(1)}%)`, top: '50%', transform: 'translateY(-50%)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                      {y}
                    </span>
                  )
                })}
              </div>

              {/* Rows */}
              {ganttRows.map((p, idx) => {
                const bar = ganttBar(p.start, p.end)
                const isActive = !p.end || new Date(p.end) > new Date()
                return (
                  <div key={p.name} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)', minHeight: 34 }}>
                    <div style={{ width: 170, flexShrink: 0, padding: '0 1.25rem', fontSize: '0.68rem', color: 'var(--text)' }}>{p.name}</div>
                    <div style={{ flex: 1, position: 'relative', height: 34, marginRight: '1.25rem' }}>
                      {/* Today line */}
                      <div style={{ position: 'absolute', left: `${todayPct}%`, top: 0, bottom: 0, width: 1, background: 'rgba(204,74,34,0.25)', zIndex: 2 }} />
                      {/* Bar */}
                      <div style={{ position: 'absolute', left: bar.left, width: bar.width, top: '50%', transform: 'translateY(-50%)', height: 14, borderRadius: 2, background: isActive ? 'rgba(160,130,110,0.75)' : 'rgba(140,118,100,0.45)' }} />
                      {/* Today label on first row */}
                      {idx === 0 && (
                        <span style={{ position: 'absolute', left: `calc(${todayPct}% + 4px)`, top: '50%', transform: 'translateY(-50%)', fontSize: '0.52rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 2, padding: '1px 5px', color: 'var(--text)', whiteSpace: 'nowrap', zIndex: 3 }}>
                          Today
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '40vh' }}>
            <button onClick={() => setOpen(true)} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 8, padding: '0.75rem 1.5rem', color: 'white', fontSize: '0.72rem', cursor: 'pointer', letterSpacing: '0.08em' }}>
              Open Works
            </button>
          </div>
        )}
      </div>

      {/* Dock */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '0.75rem', flexShrink: 0 }}>
        <div style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 14, padding: '0.5rem 0.75rem', display: 'flex', gap: '0.35rem' }}>
          {['⊞', '≡', '✉', '☰', '☐', '⊙', '⚙', '>', '⬡'].map((icon, i) => (
            <div key={i} style={{ width: 36, height: 36, background: 'rgba(80,40,20,0.55)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorksOSSection

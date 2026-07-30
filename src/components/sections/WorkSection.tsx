import { useState } from "react"

const projects = [
  {
    title: 'IEHP MEDICAL SYSTEM',
    year: '2025',
    stack: 'React · Node.js · Gemini Flash 3',
    role: 'Technical Lead',
    desc: 'Built an OCR platform that extracts handwritten medical notes and reports, digitalising them into a centralised dashboard for a US healthcare law firm.',
    accent: '#5a6b4e',
  },
  {
    title: 'PROCUREMENT DASHBOARD',
    year: '2025',
    stack: 'React · Chart.js',
    role: 'Full Stack Developer',
    desc: 'Designed an integrated analytics dashboard that processes uploaded data to calculate and visualise KPIs across quarterly, monthly, and yearly periods for strategic insights.',
    accent: '#4e5a6b',
  },
  {
    title: 'UNIFIED CRM',
    year: '2025',
    stack: 'React · Redux · Python · PostgreSQL · Webhooks',
    role: 'Full Stack Developer',
    desc: 'Integrated Google Ads, Facebook, Dailics, Retell, and webhooks into a unified CRM enabling cost-per-channel analysis and targeted campaign optimisation — generating 200–300 organic leads monthly.',
    accent: '#6b4e5a',
  },
  {
    title: 'ASSET MANAGEMENT DASHBOARD',
    year: '2025',
    stack: 'React · Node.js · PostgreSQL',
    role: 'Software Development Team Lead',
    desc: 'Architected and delivered a dashboard to track 200+ equipment assets and analyse costs, vendors, and employee data across the organisation.',
    accent: '#5a4e6b',
  },
]

function WorkCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${index * 0.1}s`, borderTop: '1px solid var(--border)', padding: '3rem 0' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ flex: '1', minWidth: '240px' }}>
          <h3
            className="font-display"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', fontWeight: 600, color: 'var(--accent)', marginBottom: '1.5rem', lineHeight: 1, transition: 'letter-spacing 0.4s ease', letterSpacing: hovered ? '0.04em' : '-0.01em' }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: '0.78rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '340px', marginBottom: '2rem' }}>{project.desc}</p>
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[['Year', project.year], ['Stack', project.stack], ['Role', project.role]].map(([k, v]) => (
              <div key={k}>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>{k}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--text)' }}>{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mock screen */}
        <div style={{ flex: '1', minWidth: '280px', maxWidth: '460px', transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)', transform: hovered ? 'translateY(-8px)' : 'translateY(0)' }}>
          <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)', background: '#e8e3d8', aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 24, background: 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: 5 }}>
              {['#e05c5c', '#e0b85c', '#5ce07c'].map((c) => (
                <span key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 12, padding: '0 1.5rem' }}>
              <p className="font-display" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)', fontWeight: 700, color: project.accent, letterSpacing: '0.04em', lineHeight: 1.2 }}>
                {project.title}
              </p>
              <p style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.3)', marginTop: '0.4rem', textTransform: 'uppercase' }}>{project.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkSection() {
  return (
    <section id="work" style={{ minHeight: '100vh', padding: '5rem 2.5rem' }}>
      <div className="reveal">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>[Work]</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 600, color: 'var(--text)', lineHeight: 1 }}>
          Selected Projects
        </h2>
      </div>
      <div style={{ marginTop: '3rem' }}>
        {projects.map((p, i) => <WorkCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  )
}

export default WorkSection


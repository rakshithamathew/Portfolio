import { useEffect, useState } from 'react'
import resumePdf from './imports/Rakshitha_M.pdf'

const profileLinks = {
  linkedin: 'https://www.linkedin.com/in/rakshitha-m-b8a909190/',
  github: 'https://github.com/rakshithamathew',
}

/* ─── Scroll reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}

/* ─── Local time ─── */
function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

/* ─── Dot circle ─── */
const DotCircle = ({ onClick }) => (
  <span
    onClick={onClick}
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: onClick ? 'pointer' : 'default' }}
  >
    <span className="circle-btn" style={{ color: 'var(--text)' }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
        <circle cx="5" cy="5" r="3" />
      </svg>
    </span>
  </span>
)

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
function HeroSection({ onNext }) {
  const localTime = useLocalTime()

  return (
    <section id="top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Ticker */}
      <div style={{ backgroundColor: 'var(--accent)', overflow: 'hidden', padding: '6px 0', flexShrink: 0 }}>
        <div className="marquee-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} style={{ color: 'white', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', paddingRight: '4rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
              Open to full-time &amp; freelance opportunities worldwide •
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '3rem 2.5rem 2.5rem', position: 'relative' }}>
        {/* Social — right */}
        <div style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          {[['LinkedIn', profileLinks.linkedin], ['GitHub', profileLinks.github]].map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noreferrer" className="hover-line" style={{ writingMode: 'vertical-rl', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--text-muted)', textDecoration: 'none', textTransform: 'uppercase', transform: 'rotate(180deg)' }}>
              {label}
            </a>
          ))}
        </div>

        {/* Name */}
        <div style={{ marginTop: 'auto' }}>
          <h1
            className="font-display fade-up fluid-text"
            style={{ color: 'var(--accent)', fontWeight: 600, animationDelay: '0.1s', letterSpacing: '-0.02em' }}
          >
            RAKSHITHA M
          </h1>
         

          <div className="h-line" style={{ margin: '1.5rem 0 1rem' }} />

          <div className="fade-up" style={{ animationDelay: '0.25s', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Subtitle */}
            <div>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--text)' }}>
                Software Engineer / Technical Lead
              </p>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.06em', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Based in Bengaluru, India
              </p>
            </div>
 <div style={{ position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-40%)', zIndex: 0, pointerEvents: 'none' }}>
            <p className="font-display" style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', color: 'rgba(26,20,16,0.05)', lineHeight: 1, letterSpacing: '0.05em' }}>
              5+ YEARS
            </p>
          </div>
            {/* Bio */}
            <div style={{ maxWidth: '300px' }}>
              <p style={{ fontSize: '0.78rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Product Engineer with building scalable web platforms and high-volume data applications across GenAI, growth, and product domains.
              </p>
            </div>

            {/* Menu */}
            <div>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>[Menu]</p>
              {[['01', 'About'], ['02', 'Skills'], ['03', 'Work'], ['04', 'Experience'], ['05', 'Recognition'], ['06', 'Contact']].map(([num, label]) => (
                <div key={num} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>{num}</span>
                  <a href={`#${label.toLowerCase()}`} className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none' }}>
                    {label}
                  </a>
                </div>
              ))}
            </div>

            {/* Next Page */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', alignSelf: 'flex-end' }}>
              <DotCircle onClick={onNext} />
              <button onClick={onNext} className="hover-line" style={{ background: 'none', border: 'none', fontSize: '0.72rem', letterSpacing: '0.06em', cursor: 'pointer', color: 'var(--text)', padding: 0 }}>
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   ABOUT
══════════════════════════════════════════ */
function AboutSection() {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2.5rem', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'var(--bg)' }}>
        <div>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text)', textTransform: 'uppercase' }}>RAKSHITHA M</p>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.06em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>SOFTWARE DEVELOPMENT TEAM LEAD / FULL-STACK ENGINEER</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Top', 'About', 'Skills', 'Work', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.04em' }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Watermark */}
      <div style={{ position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-40%)', zIndex: 0, pointerEvents: 'none' }}>
        <p className="font-display" style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', color: 'rgba(26,20,16,0.05)', lineHeight: 1, letterSpacing: '0.05em' }}>
          5+ YEARS
        </p>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 2.5rem', position: 'relative', zIndex: 1 }}>
        <div className="reveal">
          <h2 className="font-display fluid-text" style={{ color: 'var(--accent)', fontWeight: 600, lineHeight: 0.9 }}>
            I'M A<br />
            TECHNICAL<br />
            LEAD &amp; BUILDER
          </h2>
        </div>

        <div className="reveal" style={{ marginTop: '2.5rem', maxWidth: '520px' }}>
          <p style={{ fontSize: '0.82rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
            I lead architecture and delivery for customer-facing and internal products, with a focus on distributed systems, API design, performance, and reliable execution. My recent work spans AI-assisted healthcare records, growth platforms, enterprise workflows, and analytics products used at scale.
          </p>
        </div>

        <div className="reveal" style={{ marginTop: '2rem' }}>
          <a href="#work" className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.06em' }}>
            See my work
          </a>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   SKILLS
══════════════════════════════════════════ */
const skillGroups = [
  {
    num: '01',
    title: 'Front-End',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Axios', 'Redux', 'Cypress', 'JWT', 'OAuth'],
  },
  {
    num: '02',
    title: 'Back-End & Infra',
    tags: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'SQL', 'MySQL', 'WebSockets', 'Docker', 'Kubernetes', 'Azure', 'Nginx', 'CI/CD'],
  },
  {
    num: '03',
    title: 'Languages',
    tags: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    num: '04',
    title: 'Product & Leadership',
    tags: ['System Design', 'API Architecture', 'Micro-frontends', 'Responsive Design', 'Cross-functional Collaboration', 'Product Execution'],
  },
]

function SkillsSection() {
  return (
    <section id="skills" style={{ minHeight: '100vh', padding: '5rem 2.5rem' }}>
      <div className="reveal">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>[Skills]</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 600, color: 'var(--text)', lineHeight: 1 }}>
          What I Work With
        </h2>
      </div>

      <div className="h-line" style={{ margin: '3rem 0' }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem' }}>
        {skillGroups.map((g, i) => (
          <div key={g.num} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <p style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>{g.num}</p>
            <h3 className="font-display" style={{ fontSize: '1.75rem', fontWeight: 500, color: 'var(--text)', marginBottom: '1.25rem' }}>{g.title}</h3>
            <div className="h-line" style={{ marginBottom: '1.25rem' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {g.tags.map((tag) => (
                <span key={tag} style={{ fontSize: '0.65rem', letterSpacing: '0.06em', border: '1px solid var(--border)', borderRadius: 3, padding: '3px 8px', color: 'var(--text-muted)', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   WORK — SELECTED PROJECTS
══════════════════════════════════════════ */
const projects = [
  {
    title: 'VIRTUAL CLOTHES TRY-ON AI',
    year: 'Featured',
    stack: 'React.js · Python · YouCam APIs · Gemini LLM',
    role: 'Hackathon Project',
    desc: 'An AI-driven virtual try-on experience that overlays garments onto user images for realistic outfit visualization.',
    url: 'https://skin-you-cam-ai-frontend.vercel.app/',
    accent: '#5a6b4e',
  },
  {
    title: 'AI JOB AUTOMATION',
    year: 'Featured',
    stack: 'React.js · Python · Apify · Perplexity · Playwright',
    role: 'Full-Stack Developer',
    desc: 'A centralized job tracker with multi-source aggregation, AI matching, cover-letter generation, and compatibility scoring.',
    url: 'https://job-application-automation-kappa.vercel.app/',
    accent: '#4e5a6b',
  },
  {
    title: 'MARKDOWN PRODUCTION APP',
    year: 'Featured',
    stack: 'Next.js · Tailwind CSS',
    role: 'Full-Stack Developer',
    desc: 'A privacy-focused browser-based Markdown viewer with GitHub Flavored Markdown rendering and no document uploads or exposure.',
    url: 'https://markdown-application-hazel.vercel.app/',
    accent: '#6b4e5a',
  },
  {
    title: 'PROCUREMENT DASHBOARD',
    year: 'Featured',
    stack: 'Next.js · Chart.js',
    role: 'Full-Stack Developer',
    desc: 'An integrated analytics dashboard that processes uploaded data and visualizes quarterly, monthly, and yearly procurement KPIs.',
    url: 'https://supply-chain-dashboard-ym3w.vercel.app/',
    accent: '#5a4e6b',
  },
]

function WorkCard({ project, index }) {
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
            {[['Status', project.year], ['Stack', project.stack], ['Role', project.role]].map(([k, v]) => (
              <div key={k}>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>{k}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--text)' }}>{v}</p>
              </div>
            ))}
          </div>
          <a href={project.url} target="_blank" rel="noreferrer" className="hover-line" style={{ fontSize: '0.7rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.06em' }}>
            View live project ↗
          </a>
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

/* ══════════════════════════════════════════
   WORKS OS — project list + Gantt
══════════════════════════════════════════ */
const projectList = [
  { name: 'Healthcare OCR & NLP', role: 'Technical Lead', start: 'Mar 2025', end: 'Now', type: 'GenAI' },
  { name: 'Unified CRM', role: 'Full Stack Developer', start: 'Mar 2025', end: 'Now', type: 'Professional' },
  { name: 'Asset Mgmt Dashboard', role: 'Team Lead', start: 'Mar 2025', end: 'Now', type: 'Professional' },
  { name: 'ITSM LLM Chatbot', role: 'Associate Engineer', start: 'Mar 2022', end: 'Feb 2025', type: 'GenAI' },
  { name: 'Govt. Case Portal', role: 'Associate Engineer', start: 'Mar 2022', end: 'Feb 2025', type: 'Enterprise' },
  { name: 'SLA Analytics', role: 'Associate Engineer', start: 'Mar 2022', end: 'Feb 2025', type: 'Analytics' },
]

const GANTT_START = new Date('2020-11-01').getTime()
const GANTT_END = new Date('2027-01-01').getTime()
const GANTT_SPAN = GANTT_END - GANTT_START
const today = new Date().getTime()

function ganttBar(startStr, endStr) {
  const s = Math.max(new Date(startStr).getTime(), GANTT_START)
  const e = endStr ? new Date(endStr).getTime() : today
  const left = ((s - GANTT_START) / GANTT_SPAN) * 100
  const width = ((Math.min(e, today) - s) / GANTT_SPAN) * 100
  return { left: `${left.toFixed(1)}%`, width: `${Math.max(width, 1.5).toFixed(1)}%` }
}

const todayPct = (((today - GANTT_START) / GANTT_SPAN) * 100).toFixed(1)

const ganttRows = [
  { name: 'Kaizen Que', start: '2025-03-01', end: null },
  { name: 'iFIX Tech Global', start: '2022-03-01', end: '2025-02-28' },
  { name: 'EVERYWHERE', start: '2020-11-01', end: '2021-06-30' },
  { name: 'Healthcare AI', start: '2025-03-01', end: null },
  { name: 'Unified CRM', start: '2025-03-01', end: null },
  { name: 'Govt. Case Portal', start: '2022-06-01', end: '2024-12-31' },
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
        <a href={resumePdf} target="_blank" rel="noreferrer" style={{ position: 'absolute', left: '1.5rem', bottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', cursor: 'pointer', textDecoration: 'none' }}>
          <div style={{ width: 48, height: 56, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.7)' }}>≡</span>
          </div>
          <span style={{ fontSize: '0.55rem', color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>resume.pdf</span>
        </a>

        {open ? (
          <div style={{ background: 'var(--bg)', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 8, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', width: '100%', maxWidth: 920, animation: 'fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards' }}>
            {/* Window chrome */}
            <div style={{ background: '#ece7dc', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {[{ c: '#ff5f57', fn: () => setOpen(false) }, { c: '#ffbd2e', fn: () => { } }, { c: '#28c840', fn: () => { } }].map((b, i) => (
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
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>Timeline (from 2020)</span>
              </div>

              {/* Year headers */}
              <div style={{ position: 'relative', paddingLeft: 170, paddingRight: '1.25rem', borderBottom: '1px solid var(--border)', height: 28 }}>
                {['2021', '2022', '2023', '2024', '2025', '2026'].map((y) => {
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

/* ══════════════════════════════════════════
   EXPERIENCE
══════════════════════════════════════════ */
const currentFocus = [
  'Building AI-powered OCR and NLP workflows for decades of healthcare records.',
  'Improving retrieval, upload, and real-time dashboard performance at scale.',
  'Leading architecture and cross-functional delivery across GenAI, growth, and product.',
]

const careerTimeline = [
  {
    title: 'Software Development Team Lead',
    company: 'Kaizen Que',
    type: 'Full-time',
    current: true,
    period: 'Mar 2025 – Present',
    duration: 'Present',
    location: 'Bengaluru, India',
    locType: 'On-site',
    desc: 'Implemented an AI-powered OCR and NLP platform with 95%+ extraction accuracy across 25+ years of patient records. Cut uploads by 70%, perceived retrieval latency by 65%, and manual review effort by 60%.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Kaizen Que',
    type: 'Full-time',
    current: false,
    period: 'Mar 2025 – Present',
    duration: '',
    location: 'Bengaluru, India',
    locType: 'On-site',
    desc: 'Built a unified CRM integrating Google Ads, Facebook, and 100+ landing pages, generating 5,000+ organic leads monthly. Improved ROI by 35% and reduced manual asset management by 40%.',
  },
  {
    title: 'Associate Software Engineer',
    company: 'iFIX Tech Global',
    type: 'Full-time',
    current: false,
    period: 'Mar 2022 – Feb 2025',
    duration: '3 yrs',
    location: 'Bengaluru, India',
    locType: 'On-site',
    desc: 'Redesigned an OpenAI LLM-based ITSM chatbot, improved answer relevance by 30%, accelerated SLA analytics by 20%, reduced bulk ticket payloads by 75%, and streamlined 10,000+ annual government filings.',
  },
  {
    title: 'Full Stack Developer',
    company: 'EVERYWHERE',
    type: 'Internship',
    current: false,
    period: 'Nov 2020 – Jun 2021',
    duration: '8 mos',
    location: 'Bengaluru, India',
    locType: 'On-site',
    desc: 'Independently converted Figma prototypes into a responsive React.js product and improved Core Web Vitals through code splitting, lazy loading, compression, and memoization, cutting page load time by 70%.',
  },
]

function ExperienceSection() {
  return (
    <section id="experience" style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Window chrome */}
      <div style={{ background: '#e8e3d8', borderBottom: '1px solid var(--border)', padding: '0.5rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
        {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
          <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
        ))}
        <span style={{ flex: 1, textAlign: 'center', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>Experience</span>
      </div>

      <div style={{ flex: 1, padding: '3rem 2.5rem', maxWidth: 780 }}>
        {/* Heading */}
        <div className="reveal">
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>
            Experience
          </h2>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            A detailed timeline of my experience, current focus, and professional growth.
          </p>
        </div>

        {/* Current focus */}
        <div className="reveal" style={{ margin: '2.5rem 0', background: '#e8e3d8', borderRadius: 4, border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ background: '#ddd8cc', padding: '0.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>Current Focus</span>
          </div>
          <div style={{ padding: '0.75rem 1rem' }}>
            {currentFocus.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: i < currentFocus.length - 1 ? '0.4rem' : 0, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', marginTop: '0.15rem', fontSize: '0.6rem', flexShrink: 0 }}>›</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text)', lineHeight: 1.6 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career timeline */}
        <div className="reveal">
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>Career Timeline</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {careerTimeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.5rem', position: 'relative' }}>
                {/* Spine */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 16, flexShrink: 0, paddingTop: '0.2rem' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0, background: item.current ? 'var(--accent)' : 'var(--text-muted)', border: '2px solid var(--bg)', outline: `1px solid ${item.current ? 'var(--accent)' : 'var(--text-muted)'}` }} />
                  {i < careerTimeline.length - 1 && (
                    <div style={{ width: 1, flex: 1, background: 'var(--border)', marginTop: 4 }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingTop: '0.1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text)' }}>{item.title}</span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{item.company}</span>
                    <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>• {item.type}</span>
                    {item.current && (
                      <span style={{ fontSize: '0.55rem', letterSpacing: '0.06em', background: 'rgba(204,74,34,0.12)', color: 'var(--accent)', border: '1px solid rgba(204,74,34,0.25)', borderRadius: 3, padding: '1px 6px', textTransform: 'uppercase', fontWeight: 500 }}>
                        Current
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {item.period}{item.duration ? ` • ${item.duration}` : ''}{item.location ? ` • ${item.location}` : ''}{item.locType ? ` • ${item.locType}` : ''}
                  </p>
                  <p style={{ fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal" style={{ marginTop: '1rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>Education</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <p style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text)' }}>BTL Institute of Management and Engineering</p>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>BE Computer Science &amp; Engineering — VTU Board · GPA 7.2</p>
            </div>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Sep 2017 – Sep 2021</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const recognition = [
  ['Consistent Performer Award', 'Recognized for ownership, execution excellence, and cross-functional delivery.'],
  ['Global Hackathon Participant', 'Devpost YouCam AI Challenge — Skin Analysis + Virtual Try-On solution.'],
  ['Product Management Certificate', 'Product strategy, roadmaps, prioritization frameworks, PRDs, and stakeholder management.'],
  ['MERN Stack Development', 'PrepBytes six-month bootcamp with six capstone projects.'],
  ['Microsoft Technology Associate', 'Security Fundamentals, 2018.'],
  ['Machine Learning & Data Science', 'Nelumbus Technologies.'],
]

function RecognitionSection() {
  return (
    <section id="recognition" style={{ padding: '5rem 2.5rem', borderTop: '1px solid var(--border)' }}>
      <div className="reveal">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>[Recognition]</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 600, color: 'var(--text)', lineHeight: 1 }}>
          Awards &amp; Certifications
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0, marginTop: '3rem', borderTop: '1px solid var(--border)' }}>
        {recognition.map(([title, detail], index) => (
          <article key={title} className="reveal" style={{ padding: '1.75rem 1.5rem 1.75rem 0', borderBottom: '1px solid var(--border)', transitionDelay: `${index * 0.06}s` }}>
            <p style={{ fontSize: '0.62rem', color: 'var(--accent)', marginBottom: '0.7rem' }}>0{index + 1}</p>
            <h3 className="font-display" style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.55rem' }}>{title}</h3>
            <p style={{ fontSize: '0.72rem', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: 360 }}>{detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   CONTACT
══════════════════════════════════════════ */
function ContactSection() {
  return (
    <section id="contact" style={{ minHeight: '60vh', padding: '5rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="reveal">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>[Contact]</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 600, color: 'var(--text)', marginBottom: '1.5rem' }}>
          Let's work together
        </h2>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '380px', marginBottom: '2.5rem' }}>
          Based in Bengaluru and open to relocation, full-time roles, and thoughtful collaborations across GenAI, product engineering, and scalable web platforms.
        </p>
        <a href="mailto:rakshumathew.2614@gmail.com" className="hover-line" style={{ fontSize: '1rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          rakshumathew.2614@gmail.com
        </a>
        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1.5rem' }}>
          <a href="tel:+918310108135" className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none' }}>+91 83101 08135</a>
          <a href={resumePdf} download="Rakshitha_M_Resume.pdf" className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Download resume</a>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none' }}>LinkedIn</a>
          <a href={profileLinks.github} target="_blank" rel="noreferrer" className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 2.5rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="reveal" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
        <div>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>[Menu]</p>
          {['Top', 'About', 'Skills', 'Work', 'Experience', 'Recognition', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover-line" style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none', marginBottom: '0.3rem' }}>{item}</a>
          ))}
        </div>
        <div>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>[Social]</p>
          {[['LinkedIn', profileLinks.linkedin], ['GitHub', profileLinks.github]].map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noreferrer" className="hover-line" style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none', marginBottom: '0.3rem' }}>{label}</a>
          ))}
        </div>
        <div>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>[Mail]</p>
          <a href="mailto:rakshumathew.2614@gmail.com" className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none' }}>rakshumathew.2614@gmail.com</a>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>[Credit]</p>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Design &amp; Development by Rakshitha M</p>
        </div>
      </div>

      {/* Big THANKYOU */}
      <div className="reveal" style={{ overflow: 'hidden' }}>
        <h2 className="font-display fluid-text-lg" style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 0.88, marginBottom: 0 }}>
          THANKYOU
        </h2>
      </div>
    </footer>
  )
}

/* ══════════════════════════════════════════
   ROOT
══════════════════════════════════════════ */
export default function App() {
  useReveal()

  return (
    <div style={{ background: 'var(--bg)' }}>
      <HeroSection onNext={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <WorksOSSection />
      <ExperienceSection />
      <RecognitionSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

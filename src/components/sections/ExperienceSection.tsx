const currentFocus = [
  'Building AI-powered OCR platforms for US healthcare law firms.',
  'Delivering 100+ responsive lead-generation websites at pace.',
  'Orchestrating rapid product releases collaborating with senior stakeholders.',
]

const careerTimeline = [
  {
    title: 'Software Development Team Lead',
    company: 'Kaizen Que',
    type: 'Full-time',
    current: true,
    period: 'Mar 2025 – Present',
    duration: '4+ mos',
    location: 'Bengaluru, India',
    locType: 'On-site',
    desc: 'Built AI-powered OCR platform integrating Gemini APIs; architected asset management dashboard tracking 200+ equipment; led launch of 100+ SEO-optimised lead-generation websites in a 3-week sprint.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Kaizen Que',
    type: 'Full-time',
    current: false,
    period: 'Mar 2025',
    duration: '',
    location: 'Bengaluru, India',
    locType: 'On-site',
    desc: 'Designed and launched a project management system from scratch, boosting team productivity by 60%. Integrated a unified CRM enabling 200–300 organic leads monthly.',
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
    desc: 'Automated ticket systems for 2M+ users, built a role-based government case management portal streamlining 10K+ annual filings, and modernised a legacy platform securing 5+ major enterprise clients.',
  },
  {
    title: 'Full Stack Developer',
    company: 'VEverywhere',
    type: 'Internship',
    current: false,
    period: 'Nov 2020 – Jun 2021',
    duration: '8 mos',
    location: 'Bengaluru, India',
    locType: 'On-site',
    desc: 'Converted Figma prototypes into a fully responsive React.js website independently. Implemented lazy loading, image optimisation, and memoization — reducing page load time by 70%.',
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

export default ExperienceSection


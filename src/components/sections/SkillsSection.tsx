const skillGroups = [
  {
    num: '01',
    title: 'Front-End',
    tags: ['React JS', 'Angular', 'Tailwind CSS', 'Redux', 'Material UI', 'GraphQL', 'JWT', 'OAuth'],
  },
  {
    num: '02',
    title: 'Back-End & Infra',
    tags: ['Node JS', 'Express JS', 'PostgreSQL', 'MySQL', 'Redis','FastAPI', 'WebSockets', 'Docker', 'Kubernetes', 'Azure', 'CI/CD', 'Microservices'],
  },
  {
    num: '03',
    title: 'Languages',
    tags: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    num: '04',
    title: 'Product & Leadership',
    tags: ['Product Strategy', 'Roadmap Planning', 'PRDs', 'Feature Prioritization', 'Stakeholder Management', 'User Research', 'System Design', 'SEO'],
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

export default SkillsSection


function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 2.5rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="reveal" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
        <div>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>[Menu]</p>
          {['Top', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover-line" style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none', marginBottom: '0.3rem' }}>{item}</a>
          ))}
        </div>
        <div>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>[Social]</p>
          {['LinkedIn', 'GitHub'].map((s) => (
            <a key={s} href="#" className="hover-line" style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none', marginBottom: '0.3rem' }}>{s}</a>
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

export default Footer


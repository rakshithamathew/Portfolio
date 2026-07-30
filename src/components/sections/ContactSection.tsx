function ContactSection() {
  return (
    <section id="contact" style={{ minHeight: '60vh', padding: '5rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="reveal">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>[Contact]</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 600, color: 'var(--text)', marginBottom: '1.5rem' }}>
          Let's work together
        </h2>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '380px', marginBottom: '2.5rem' }}>
          Open to full-time roles, freelance projects, and international collaborations. Always happy to talk product, architecture, or a great idea.
        </p>
        <a href="mailto:rakshumathew.2614@gmail.com" className="hover-line" style={{ fontSize: '1rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          rakshumathew.2614@gmail.com
        </a>
        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1.5rem' }}>
          <a href="tel:+918310108135" className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none' }}>+91 83101 08135</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection


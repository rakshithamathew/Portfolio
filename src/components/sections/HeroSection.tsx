import useLocalTime from "../../hooks/useLocalTime"
import DotCircle from "../ui/DotCircle"

function HeroSection({ onNext }: { onNext: () => void }) {
  const localTime = useLocalTime()

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
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
        <div style={{ position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', zIndex: 20 }}>
          {['LinkedIn', 'GitHub'].map((s) => (
            <span key={s} className="hover-line" style={{ writingMode: 'vertical-rl', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--text-muted)', cursor: 'pointer', textTransform: 'uppercase', transform: 'rotate(180deg)' }}>
              {s}
            </span>
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

          {/* <div style={{ position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-40%)', zIndex: 0, pointerEvents: 'none' }}>
            <p className="font-display" style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', color: 'rgba(26,20,16,0.05)', lineHeight: 1, letterSpacing: '0.05em' }}>
              RAKSHITHA
            </p>
          </div>
          <div style={{ position: 'absolute', left: '3rem', top: '10%', transform: 'translateY(-40%)', zIndex: 0, pointerEvents: 'none' }}>
            <p className="font-display" style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', color: 'rgba(26,20,16,0.05)', lineHeight: 1, letterSpacing: '0.05em' }}>
              RAKSHITHA
            </p>
          </div> */}
          <div className="fade-up" style={{ animationDelay: '0.25s', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Subtitle */}
            <div>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--text)' }}>
                TECHNICAL LEAD &amp; PRODUCT DEVELOPER
              </p>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.06em', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Based in Bengaluru, India
              </p>
            </div>


            {/* Bio */}
            <div style={{ maxWidth: '300px' }}>
              <p style={{ fontSize: '0.78rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Product-focused Technical Lead with 5+ years of experience at the intersection of product development and technical delivery — building scalable, data-driven solutions that ship.
              </p>
            </div>



            {/* Version / Local Time */}
            {/* <div style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Version</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--text)' }}>Portfolio-V1</p>
              </div>
              <div>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Local Time</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--text)' }}>Bengaluru, IST {localTime}</p>
              </div>
            </div> */}

            {/* Menu */}
            {/* <div>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>[Menu]</p>
              {[['01', 'About'], ['02', 'Skills'], ['03', 'Work'], ['04', 'Contact']].map(([num, label]) => (
                <div key={num} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>{num}</span>
                  <a href={`#${label.toLowerCase()}`} className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none' }}>
                    {label}
                  </a>
                </div>
              ))}
            </div> */}

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

export default HeroSection

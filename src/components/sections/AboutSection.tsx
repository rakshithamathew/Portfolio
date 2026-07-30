import { useEffect, useRef, useState } from "react"

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const updateNavPosition = () => {
      const sectionTop = sectionRef.current?.offsetTop ?? 0
      setIsFixed(window.scrollY >= sectionTop)
    }

    updateNavPosition()
    window.addEventListener("scroll", updateNavPosition, { passive: true })
    window.addEventListener("resize", updateNavPosition)

    return () => {
      window.removeEventListener("scroll", updateNavPosition)
      window.removeEventListener("resize", updateNavPosition)
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Nav */}
      {isFixed && <div aria-hidden="true" style={{ height: '65px', flexShrink: 0 }} />}
      <nav style={{ position: isFixed ? 'fixed' : 'relative', top: isFixed ? 0 : 'auto', left: isFixed ? 0 : 'auto', right: isFixed ? 0 : 'auto', width: '100%', zIndex: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2.5rem', background: 'rgba(243, 239, 230, 0.92)', backdropFilter: 'blur(12px)' }}>
        <div>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text)', textTransform: 'uppercase' }}>RAKSHITHA M</p>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.06em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>TECHNICAL LEAD / FULL STACK DEVELOPER</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Top', 'Skills', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.04em' }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Watermark */}

      {/* Content */}
      {/* <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 2.5rem', position: 'relative', zIndex: 1 }}>
        <div className="reveal">
          <h2 className="font-display fluid-text" style={{ color: 'var(--accent)', fontWeight: 600, lineHeight: 0.9 }}>
            I'M A<br />
            TECHNICAL<br />
            LEAD &amp; BUILDER
          </h2>
        </div>

        <div className="reveal" style={{ marginTop: '2.5rem', maxWidth: '520px' }}>
          <p style={{ fontSize: '0.82rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
            Product-focused engineer with 5+ years owning internal systems, leading development teams, and shipping complex products from zero to production. From healthcare OCR platforms to unified CRMs — I turn requirements into systems that scale.
          </p>
        </div>

        <div className="reveal" style={{ marginTop: '2rem' }}>
          <a href="#work" className="hover-line" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.06em' }}>
            See my work
          </a>
        </div>
      </div> */}
    </section>
  )
}

export default AboutSection

/* â”€â”€â”€ Dot circle â”€â”€â”€ */
const DotCircle = ({ onClick }: { onClick?: () => void }) => (
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


export default DotCircle


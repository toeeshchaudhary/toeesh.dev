export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__summary">
          <span className="label">portfolio summary</span>
          <p>Student builder focused on ECE, hardware, firmware, and practical systems.</p>
        </div>
        <div className="site-footer__stack">
          <span className="label">contact</span>
          <a href="mailto:thesonofdevilhunter1@gmail.com" className="label">
            thesonofdevilhunter1@gmail.com
          </a>
          <a href="https://toeeshnetwork.vercel.app" className="label">
            the network ↗
          </a>
        </div>
        <div className="site-footer__stack">
          <span className="label">details</span>
          <span className="label">© 2026 toeesh chaudhary</span>
          <span className="label">delhi ncr, in → japan 2027</span>
        </div>
      </div>
    </footer>
  );
}

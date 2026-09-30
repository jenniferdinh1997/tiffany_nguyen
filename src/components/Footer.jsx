import { Link } from 'react-router-dom'
import { INSTAGRAM_HANDLE, footerLinks } from '../content/site.js'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <p className="footer__brand">Kör Body</p>
          <p className="footer__sub">Chiropractic &amp; Wellness</p>
        </div>
        <div className="footer__details">
          <p>Concierge Mobile Chiropractic · Orange County, CA</p>
          <p>Dr. Tiffany Nguyen, DC</p>
          <a
            href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
            target="_blank"
            rel="noreferrer"
          >
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <nav className="footer__nav" aria-label="Footer">
        {footerLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      <p className="footer__signoff">You&rsquo;ve got this.</p>
    </footer>
  )
}

export default Footer

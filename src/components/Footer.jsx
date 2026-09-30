import { Link } from 'react-router-dom'
import { INSTAGRAM_HANDLE, footerLinks } from '../content/site.js'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <p className="footer__name">Kör Body</p>
        <p className="footer__sub">(Chiropractic &amp; Wellness)</p>
        <p className="footer__signoff">You&rsquo;ve got this.</p>
      </div>

      <nav className="footer__nav" aria-label="Footer">
        {footerLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="footer__details">
        <a
          href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
          target="_blank"
          rel="noreferrer"
          className="footer__social"
        >
          Instagram
        </a>
        <p>↳ @{INSTAGRAM_HANDLE}</p>
        <p>↳ Dr. Tiffany Nguyen, DC</p>
        <p>↳ Concierge Mobile Chiropractic · Orange County, CA</p>
      </div>
    </footer>
  )
}

export default Footer

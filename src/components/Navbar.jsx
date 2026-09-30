import { useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'What to Expect', href: '#expect' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a href="#top" className="navbar__brand">
        Kor Body
      </a>

      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={open}
        aria-controls="navbar-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      <nav id="navbar-menu" className={`navbar__menu${open ? ' is-open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#book" className="navbar__cta" onClick={() => setOpen(false)}>
          Book a visit
        </a>
      </nav>
    </header>
  )
}

export default Navbar

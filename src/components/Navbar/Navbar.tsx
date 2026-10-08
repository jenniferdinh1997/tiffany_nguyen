import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BOOKING_URL, navLinks } from '../../content/site'
import './Navbar.css'

// overlay: white text floating over the home hero photo. Otherwise a solid cream bar.
function Navbar({ overlay = false }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`navbar${overlay ? ' navbar--overlay' : ''}`}>
      <Link to="/" className="navbar__brand" onClick={close}>
        Kör Body
      </Link>

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
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={close}>
            {link.label}
          </NavLink>
        ))}
        <Link to={BOOKING_URL} className="navbar__cta" onClick={close}>
          Book a visit
        </Link>
      </nav>
    </header>
  )
}

export default Navbar

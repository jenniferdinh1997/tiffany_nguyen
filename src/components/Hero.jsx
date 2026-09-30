import Navbar from './Navbar.jsx'
import './Hero.css'

// Drop the hero photo at public/images/hero.jpg to replace the placeholder background.
const HERO_IMAGE = '/images/hero.jpg'

function Hero() {
  return (
    <section
      id="top"
      className="hero"
      style={{ '--hero-image': `url(${HERO_IMAGE})` }}
    >
      <Navbar />

      <div className="hero__content">
        <p className="hero__tagline">
          <span>Chiropractic &amp; Sports Rehab</span>
          <span className="hero__heart" aria-hidden="true">
            ♥
          </span>
          <span>Dr. Tiffany Nguyen, DC</span>
        </p>
        <h1 className="hero__title">Kor Body</h1>
      </div>
    </section>
  )
}

export default Hero

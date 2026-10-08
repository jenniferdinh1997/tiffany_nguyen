import type { CSSProperties } from 'react'
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import { BOOKING_URL } from '../../content/site'
import './Hero.css'

const HERO_IMAGE = '/images/neck-adjustment.webp'

function Hero() {
  return (
    <section className="hero" style={{ '--hero-image': `url(${HERO_IMAGE})` } as CSSProperties}>
      <Navbar overlay />

      <div className="hero__content">
        <p className="hero__tagline">
          <span>Concierge Mobile Chiropractic</span>
          <span className="hero__heart" aria-hidden="true">
            ♥
          </span>
          <span>Orange County</span>
        </p>
        <h1 className="hero__title">
          Move better.
          <br />
          Feel stronger.
        </h1>
        <div className="hero__footer">
          <p className="hero__intro">
            Personalized, hands-on chiropractic care brought directly to you, built around your
            body, your goals, and the life you want to get back to.
          </p>
          <Button to={BOOKING_URL} variant="light">
            Start your journey
          </Button>
        </div>
        <p className="hero__meta">One-on-one care · 60-minute house calls · Orange County</p>
      </div>
    </section>
  )
}

export default Hero

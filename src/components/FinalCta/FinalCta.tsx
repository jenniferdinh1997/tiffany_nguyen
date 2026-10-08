import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BOOKING_URL } from '../../content/site'
import Button from '../Button/Button'
import './FinalCta.css'

// "Shall we begin?" style closing section: frosted card over a photo.
interface FinalCtaProps {
  children: ReactNode
}

function FinalCta({ children }: FinalCtaProps) {
  return (
    <section id="book" className="final-cta">
      <div className="final-cta__frame">
        <div className="final-cta__card">
          <p className="final-cta__eyebrow">Ready when you are</p>
          <h2 className="final-cta__title">Let&rsquo;s figure out what your body needs.</h2>
          <div className="final-cta__body">{children}</div>
          <Button to={BOOKING_URL} variant="ghost">
            Book your first visit
          </Button>
          <p className="final-cta__alt">
            Not ready to book?{' '}
            <Link to="/contact#question" className="text-link">
              Ask a question
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCta

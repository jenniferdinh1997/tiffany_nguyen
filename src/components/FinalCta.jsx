import { Link } from 'react-router-dom'
import { BOOKING_URL } from '../content/site.js'
import Button from './Button.jsx'

function FinalCta({ children }) {
  return (
    <section id="book" className="section section--ink final-cta">
      <p className="eyebrow">Ready when you are</p>
      <h2 className="heading final-cta__title">Let&rsquo;s figure out what your body needs.</h2>
      <div className="prose prose--lead">{children}</div>
      <div className="actions">
        <Button to={BOOKING_URL} variant="light">
          Book your first visit
        </Button>
        <span>
          Not ready to book?{' '}
          <Link to="/contact#question" className="text-link">
            Ask a question
          </Link>
        </span>
      </div>
    </section>
  )
}

export default FinalCta

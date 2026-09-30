import Button from '../components/Button.jsx'
import Photo from '../components/Photo.jsx'
import { BOOKING_URL } from '../content/site.js'
import './MobileVisit.css'

function MobileVisit() {
  return (
    <section className="mobile-visit">
      <div className="mobile-visit__text">
        <p className="mobile-visit__eyebrow">The mobile experience</p>
        <h2 className="mobile-visit__title">Your chiropractor comes to you.</h2>
        <p className="mobile-visit__lead">
          No driving across town. No crowded waiting room. No rushing through an appointment
          because the next patient is already waiting.
        </p>
        <hr />
        <p className="mobile-visit__note">
          Kör is a concierge mobile practice, which means I bring your chiropractic appointment
          directly to you. Your home becomes the treatment space — comfortable, private, and
          focused entirely on you.
        </p>

        <div className="mobile-visit__row">
          <div>
            <h3>Orange County</h3>
            <p>Concierge house calls in the comfort of your home.</p>
          </div>
          <Button to="/mobile-experience" variant="outline">
            Check area
          </Button>
        </div>
        <div className="mobile-visit__row">
          <div>
            <h3>60-minute appointments</h3>
            <p>One-on-one care for new + follow-up patients.</p>
          </div>
          <Button to={BOOKING_URL} variant="outline">
            Book
          </Button>
        </div>
      </div>
      <Photo label="Photo: home visit" className="mobile-visit__photo" />
    </section>
  )
}

export default MobileVisit

import Button from '../../components/Button/Button'
import { BOOKING_URL } from '../../content/site'
import './Investment.css'

function Investment() {
  return (
    <section className="investment">
      <p className="investment__eyebrow">Investment</p>
      <h2 className="investment__title">Your time matters. So does mine.</h2>
      <p className="investment__text">
        Kör is a private-pay concierge practice designed around unrushed, one-on-one care.
      </p>

      <div className="investment__divider" aria-hidden="true">
        <span>♥</span>
      </div>

      <h3 className="investment__visit">60-minute mobile chiropractic visit</h3>
      {/* TODO: set the visit price. */}
      <p className="investment__price">$XXX</p>
      {/* TODO: confirm HSA/FSA wording. */}
      <p className="investment__pay">Private pay · Credit/debit · [HSA/FSA if applicable]</p>
      <p className="investment__note">
        If your insurance plan includes out-of-network chiropractic benefits, you may request
        documentation to submit to your insurance carrier.
      </p>
      <Button to={BOOKING_URL}>Book a visit</Button>
    </section>
  )
}

export default Investment

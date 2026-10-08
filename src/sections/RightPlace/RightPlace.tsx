import Button from '../../components/Button/Button'
import { conditions } from '../../content/site'
import './RightPlace.css'

function RightPlace() {
  return (
    <section className="right-place">
      <div className="right-place__statement">
        <p className="right-place__eyebrow">What I help with</p>
        <h2 className="right-place__title">You&rsquo;re in the right place if&hellip;</h2>
        <div className="right-place__body">
          <p>Maybe you&rsquo;ve been dealing with pain for a while.</p>
          <p>
            Maybe something hurts after a workout, a long day at your desk, or simply moving
            through life.
          </p>
          <p>
            Maybe you&rsquo;re not even sure what&rsquo;s wrong. You just know your body
            doesn&rsquo;t feel like itself.
          </p>
          <p>That&rsquo;s where we start.</p>
        </div>
      </div>

      <div className="marquee" aria-label="Conditions I help with">
        <p className="marquee__label">Conditions I help with</p>
        <div className="marquee__viewport">
          {/* The list is repeated once so the scroll loops seamlessly. */}
          <ul className="marquee__track">
            {[...conditions, ...conditions].map((condition, i) => (
              <li key={i} aria-hidden={i >= conditions.length}>
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="right-place__footer">
        <p>Your symptoms are the starting point, not the whole story.</p>
        <Button to="/what-i-treat" variant="outline">
          See what I treat
        </Button>
      </div>
    </section>
  )
}

export default RightPlace

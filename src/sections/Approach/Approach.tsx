import Button from '../../components/Button/Button'
import Photo from '../../components/Photo/Photo'
import './Approach.css'

const techniques = [
  'Chiropractic adjustments',
  'Extensive soft tissue work',
  'Cupping',
  'Muscle scraping',
  'Manual therapy',
  'Mobility work',
  'Corrective exercise',
]

function Approach() {
  return (
    <section className="approach">
      <div className="approach__text">
        <p className="approach__eyebrow">My approach</p>
        <h2 className="approach__title">Nothing I do is random.</h2>
        <p className="approach__sub">Every technique has a reason.</p>
        <p className="approach__intro">
          Your care may include any of these, depending on what your body actually needs:
        </p>
        <ul className="approach__list">
          {techniques.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="approach__body">
          <p>I don&rsquo;t believe in throwing every technique at you just because I can.</p>
          <p>
            The goal is to understand what&rsquo;s going on, explain it to you, and create a plan
            that makes sense.
          </p>
        </div>
        <Button to="/approach" variant="outline">
          Explore my approach
        </Button>
      </div>
      <Photo
        src="/images/cupping.webp"
        alt="Cupping therapy on a patient's lower back"
        className="approach__photo"
      />
    </section>
  )
}

export default Approach

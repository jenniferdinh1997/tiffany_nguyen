import Button from '../components/Button.jsx'
import Photo from '../components/Photo.jsx'
import './MeetDoctor.css'

function MeetDoctor() {
  return (
    <section className="meet">
      <Photo label="Photo: Dr. Tiffany" className="meet__photo" />
      <p className="meet__eyebrow">Meet your chiropractor</p>
      <h2 className="meet__title">Hey — I&rsquo;m Dr. Tiffany.</h2>
      <div className="meet__body">
        <p className="meet__lead">
          I&rsquo;m a chiropractor who believes good care starts with actually listening.
        </p>
        <p>
          I want to know what&rsquo;s hurting, but I also want to know how you move, what
          you&rsquo;ve been dealing with, what your day-to-day looks like, and what you actually
          want to get back to doing.
        </p>
        <p>
          My approach combines chiropractic care with extensive hands-on soft tissue work,
          mobility, and strengthening strategies when appropriate.
        </p>
        <p>
          Because I don&rsquo;t think you should have to fit into a certain type of person to feel
          comfortable in a chiropractic office.
        </p>
        <p>Everyone starts somewhere.</p>
      </div>
      <Button to="/about" variant="outline">
        Meet Dr. Tiffany
      </Button>
    </section>
  )
}

export default MeetDoctor

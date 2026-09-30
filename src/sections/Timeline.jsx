import Button from '../components/Button.jsx'
import { firstVisitSteps } from '../content/site.js'
import './Timeline.css'

function Timeline() {
  return (
    <section className="timeline">
      <header className="timeline__header">
        <p className="timeline__eyebrow">Your first visit</p>
        <h2 className="timeline__title">Let&rsquo;s figure it out — together.</h2>
      </header>

      <ol className="timeline__list">
        {firstVisitSteps.map((step, i) => (
          <li key={step.number} className={`timeline__step${i % 2 ? ' is-flipped' : ''}`}>
            <div className="timeline__polaroid" aria-hidden="true">
              <div className="timeline__polaroid-photo" />
            </div>
            <span className="timeline__number">{i + 1}</span>
            <div className="timeline__text">
              <h3 className="timeline__name">{step.name}</h3>
              <p className="timeline__step-title">{step.title}</p>
              <p className="timeline__step-body">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <footer className="timeline__footer">
        <p>
          You don&rsquo;t have to know exactly what&rsquo;s wrong before you come in. That&rsquo;s
          what I&rsquo;m here for.
        </p>
        <Button to="/how-it-works" variant="outline">
          What to expect
        </Button>
      </footer>
    </section>
  )
}

export default Timeline

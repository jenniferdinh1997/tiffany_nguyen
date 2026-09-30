import './StepList.css'

function StepList({ steps }) {
  return (
    <ol className="steps">
      {steps.map((step) => (
        <li key={step.number} className="steps__item">
          <p className="steps__number">
            {step.number} — {step.name}
          </p>
          <h3 className="steps__title">{step.title}</h3>
          <p className="steps__text">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

export default StepList

import { REVIEWS_URL, testimonials } from '../content/site.js'
import Button from '../components/Button.jsx'
import './Testimonials.css'

function Testimonials() {
  return (
    <section className="testimonials">
      <p className="testimonials__eyebrow">Real people. Real experiences.</p>
      <h2 className="testimonials__title">
        People who feel like <em>themselves again.</em>
      </h2>
      <div className="testimonials__grid">
        {testimonials.map((item, i) => (
          <figure key={i} className="testimonials__card">
            <blockquote>{item.quote}</blockquote>
            <figcaption>— {item.author}</figcaption>
          </figure>
        ))}
      </div>
      {REVIEWS_URL && (
        <div className="testimonials__more">
          <Button to={REVIEWS_URL} variant="outline">
            Read more reviews
          </Button>
        </div>
      )}
    </section>
  )
}

export default Testimonials

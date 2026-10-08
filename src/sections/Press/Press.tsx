import { Link } from 'react-router-dom'
import { FEATURE_URL } from '../../content/site'
import './Press.css'

function Press() {
  return (
    <section className="press">
      <div className="press__phone">
        <img
          src="/images/voyagela-feature.jpg"
          alt="VoyageLA article: Conversations with Dr. Tiffany Nguyen, DC"
          loading="lazy"
        />
      </div>
      <div className="press__text">
        <p className="press__label">As Seen In</p>
        <p className="press__name">VoyageLA</p>
        <Link to={FEATURE_URL} className="press__link">
          Read the feature
        </Link>
      </div>
    </section>
  )
}

export default Press

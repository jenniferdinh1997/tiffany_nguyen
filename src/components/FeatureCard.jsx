import { FEATURE_URL } from '../content/site.js'
import Button from './Button.jsx'

function FeatureCard({ children }) {
  return (
    <article className="card feature-card">
      <p className="card__label">Featured · VoyageLA</p>
      <h3>Conversations with Dr. Tiffany Nguyen, DC</h3>
      <p>{children}</p>
      <div>
        <Button to={FEATURE_URL} variant="outline">
          Read the feature
        </Button>
      </div>
    </article>
  )
}

export default FeatureCard

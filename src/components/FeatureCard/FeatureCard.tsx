import type { ReactNode } from 'react'
import { FEATURE_URL } from '../../content/site'
import Button from '../Button/Button'
import './FeatureCard.css'

interface FeatureCardProps {
  children: ReactNode
}

function FeatureCard({ children }: FeatureCardProps) {
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

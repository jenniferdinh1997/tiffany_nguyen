import { Link } from 'react-router-dom'

// Renders a pill button. Internal paths use the router; full URLs open normally.
function Button({ to, variant, children }) {
  const className = variant ? `button button--${variant}` : 'button'

  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default Button

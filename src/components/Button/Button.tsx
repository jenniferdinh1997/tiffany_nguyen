import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  /** A page path like "/about", or a full URL like "https://..." */
  to: string
  variant?: 'outline' | 'light' | 'ghost'
  children: ReactNode
}

// Renders a button. Internal paths use the router; full URLs open in a new tab.
function Button({ to, variant, children }: ButtonProps) {
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

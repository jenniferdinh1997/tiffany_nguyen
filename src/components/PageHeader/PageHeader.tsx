import type { ReactNode } from 'react'
import './PageHeader.css'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  children?: ReactNode
}

// Title block at the top of every page except home.
function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <section className="section page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="page-header__title">{title}</h1>
      {children && <div className="prose prose--lead">{children}</div>}
    </section>
  )
}

export default PageHeader

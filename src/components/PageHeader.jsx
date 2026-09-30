// Title block at the top of every page except home.
function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="section page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="page-header__title">{title}</h1>
      {children && <div className="prose prose--lead">{children}</div>}
    </section>
  )
}

export default PageHeader

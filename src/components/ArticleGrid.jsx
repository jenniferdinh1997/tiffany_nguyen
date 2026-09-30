import { articles } from '../content/site.js'

// Upcoming journal articles. Cards become links once the articles are written.
function ArticleGrid() {
  return (
    <div className="card-grid">
      {articles.map((article) => (
        <article key={article.title} className="card">
          <p className="card__label">Coming soon</p>
          <h3>{article.title}</h3>
          <p>{article.teaser}</p>
        </article>
      ))}
    </div>
  )
}

export default ArticleGrid

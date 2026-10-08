import { articles } from '../../content/site'
import './ArticleGrid.css'

// Upcoming journal articles. Cards become links once the articles are written.
function ArticleGrid() {
  return (
    <div className="articles">
      {articles.map((article) => (
        <article key={article.title} className="articles__item">
          <div className="articles__photo" aria-hidden="true" />
          <h3 className="articles__title">{article.title}</h3>
          <p className="articles__teaser">{article.teaser}</p>
          <div className="articles__meta">
            <span>{article.category}</span>
            <span>Coming soon</span>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ArticleGrid

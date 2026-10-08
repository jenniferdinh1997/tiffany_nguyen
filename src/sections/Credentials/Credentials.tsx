import { credentials } from '../../content/site'
import './Credentials.css'

function Credentials() {
  return (
    <section className="credentials-stamps">
      <p className="credentials-stamps__eyebrow">Education + certifications</p>
      <h2 className="credentials-stamps__title">
        Always learning. <em>Always evolving.</em>
      </h2>
      <ul className="credentials-stamps__list">
        {credentials.map((item) => (
          <li key={item.title} className="stamp">
            <div className="stamp__inner">
              <span className="stamp__title">{item.title}</span>
              {item.detail && <span className="stamp__detail">{item.detail}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Credentials

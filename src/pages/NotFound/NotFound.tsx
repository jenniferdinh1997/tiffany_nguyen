import Button from '../../components/Button/Button'
import PageHeader from '../../components/PageHeader/PageHeader'
import './NotFound.css'

function NotFound() {
  return (
    <PageHeader eyebrow="Page not found" title="This page wandered off.">
      <p>Let&rsquo;s get you back on track.</p>
      <div>
        <Button to="/">Back to home</Button>
      </div>
    </PageHeader>
  )
}

export default NotFound

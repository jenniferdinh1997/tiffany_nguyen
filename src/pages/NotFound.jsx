import Button from '../components/Button.jsx'
import PageHeader from '../components/PageHeader.jsx'

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

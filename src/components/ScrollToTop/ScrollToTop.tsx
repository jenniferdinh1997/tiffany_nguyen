import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the top on page change, or to the #section named in the URL.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop

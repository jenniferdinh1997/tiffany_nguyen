import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function Layout() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      {/* The home hero draws its own overlay navbar on top of the photo. */}
      {pathname !== '/' && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout

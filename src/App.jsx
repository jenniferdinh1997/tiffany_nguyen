import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Approach from './pages/Approach.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Journal from './pages/Journal.jsx'
import MobileExperience from './pages/MobileExperience.jsx'
import NotFound from './pages/NotFound.jsx'
import Services from './pages/Services.jsx'
import WhatITreat from './pages/WhatITreat.jsx'

// Preview builds (VITE_HASH_ROUTER=1) use #/page links so they work on hosts without server rewrites.
const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="what-i-treat" element={<WhatITreat />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="mobile-experience" element={<MobileExperience />} />
          <Route path="approach" element={<Approach />} />
          <Route path="faq" element={<Faq />} />
          <Route path="journal" element={<Journal />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

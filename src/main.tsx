import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Brand fonts, bundled with the site. DM Sans stands in for Absans until its web font files are added.
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/dm-sans/400.css'
import './styles/colors.css'
import './index.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Missing #root element in index.html')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'
import CreatePage from './routes/CreatePage'
import AboutPage from './routes/AboutPage'
import PreviewPage from './routes/PreviewPage'
import ContactPage from './routes/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

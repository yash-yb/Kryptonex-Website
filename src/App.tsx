import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

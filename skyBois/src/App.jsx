import Navbar from './components/Navbar'
import Accueil from './pages/accueil'
import Catalogue from './pages/catalogue'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
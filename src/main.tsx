import { createRoot } from 'react-dom/client'
 
import './index.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import About from './About.tsx'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter> 
  )
}

const Home = () => {

  return (
    <div>
      Home 
    </div>
  )
}



createRoot(document.getElementById('root')!).render(<App />)


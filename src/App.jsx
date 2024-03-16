import './App.css'
import About from './components/About'
import Home from './components/Home'
import { StickyNavbar } from './components/Navbar'

function App() {
  return (
    <>
      <StickyNavbar />
      <Home />
      <About />
    </>
  )
}

export default App

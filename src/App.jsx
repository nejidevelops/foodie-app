import './App.css'
import About from './components/About'
import Home from './components/Home'
import { StickyNavbar } from './components/Navbar'
import Service from './components/Service'

function App() {
  return (
    <>
      <StickyNavbar />
      <Home />
      <About />
      <Service />
    </>
  )
}

export default App

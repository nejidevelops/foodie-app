import './App.css'
import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'
import { StickyNavbar } from './components/Navbar'
import Service from './components/Service'

function App() {
  return (
    <>
      <StickyNavbar />
      <Home />
      <About />
      <Service />
      <Menu />
    </>
  )
}

export default App

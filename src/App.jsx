import React, { useState } from "react"
import Header from "./components/Header"
import { HeroImage } from "./components/HeroImage"
import { HeroText } from "./components/HeroText"
import Nav from "./components/Navbar"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='App'>
      <Header toggleMenu={toggleMenu} />
      {isMenuOpen && (
        <div
          className='overlay'
          onClick={toggleMenu}
        />
      )}
      <h1>Hello from app</h1>
      <HeroText />
    </div>
  )
}

export default App

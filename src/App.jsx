import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Header from "./components/Header"
import { HeroImage } from "./components/HeroImage"
import { HeroText } from "./components/HeroText"
import { toggleMenu } from "./redux/menu"

function App() {
  const toggleMenuValue = useSelector((state) => state.menuStore.value)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <Header />
      {toggleMenuValue && (
        <div
          className='overlay'
          onClick={() => dispatch(toggleMenu())}
        />
      )}
      <main>
        <HeroImage />
        <HeroText />
      </main>
    </div>
  )
}

export default App

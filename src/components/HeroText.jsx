import React from "react"
import { Partners } from "./Partners"

export const HeroText = () => {
  return (
    <div className='hero-text'>
      <h1>Make remote work</h1>
      <p>
        Get your team in sync, no matter your location. Streaming processes, create team rituals, and watch productivity
        soar.
      </p>
      <button>Learn more</button>
      <Partners />
    </div>
  )
}

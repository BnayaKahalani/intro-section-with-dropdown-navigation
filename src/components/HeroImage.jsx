import React from "react"
import imageHeroMobile from "../assets/images/image-hero-mobile.png"
import imageHeroDesktop from "../assets/images/image-hero-desktop.png"

export const HeroImage = () => {
  return (
    <picture className='hero-image'>
      <source
        media='(min-width: 1440px)'
        srcSet={imageHeroDesktop}
      />
      <img
        src={imageHeroMobile}
        alt='hero-image'
      />
    </picture>
  )
}

import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import iconMenu from "../assets/images/icon-menu.svg"
import iconCloseMenu from "../assets/images/icon-close-menu.svg"
import Features from "./Features"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      {isOpen ? (
        <button
          className='menu-toggle'
          onClick={toggleMenu}
        >
          <img
            src={iconCloseMenu}
            alt=''
          />
        </button>
      ) : (
        <button
          className='menu-toggle'
          onClick={toggleMenu}
        >
          <img
            src={iconMenu}
            alt=''
          />
        </button>
      )}
      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        <ul>
          <li className='nav-features'>
            <NavLink
              className='nav-link'
              to='/features'
            >
              Features
            </NavLink>
          </li>
          <li className='nav-company'>
            <NavLink
              className='nav-link'
              to='/company'
            >
              Company
            </NavLink>
          </li>
          <li className='nav-careers'>
            <NavLink
              className='nav-link'
              to='/careers'
            >
              Careers
            </NavLink>
          </li>
          <li className='nav-about'>
            <NavLink
              className='nav-link'
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
        <Features />
      </div>
    </nav>
  )
}

export default Nav

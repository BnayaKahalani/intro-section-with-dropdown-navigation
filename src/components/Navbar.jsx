import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import iconMenu from "../assets/images/icon-menu.svg"
import iconCloseMenu from "../assets/images/icon-close-menu.svg"
import iconArrowUp from "../assets/images/icon-arrow-up.svg"
import iconArrowDown from "../assets/images/icon-arrow-down.svg"
import Dropdown from "./Dropdown"
import todo from "../assets/images/icon-todo.svg"
import calendar from "../assets/images/icon-calendar.svg"
import reminders from "../assets/images/icon-reminders.svg"
import planning from "../assets/images/icon-planning.svg"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)

  const toggle = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      {isMenuOpen ? (
        <button
          className='menu-toggle'
          onClick={() => toggle(isMenuOpen, setIsMenuOpen)}
        >
          <img
            src={iconCloseMenu}
            alt=''
          />
        </button>
      ) : (
        <button
          className='menu-toggle'
          onClick={() => toggle(isMenuOpen, setIsMenuOpen)}
        >
          <img
            src={iconMenu}
            alt=''
          />
        </button>
      )}
      <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className='nav-features'>
            <NavLink
              className='nav-link'
              to='/features'
              onClick={() => toggle(isFeaturesOpen, setIsFeaturesOpen)}
            >
              Features
              <img
                src={isFeaturesOpen ? iconArrowUp : iconArrowDown}
                alt='arrow-icon'
              />
            </NavLink>
            {isFeaturesOpen && (
              <Dropdown>
                <li>
                  <img
                    src={todo}
                    alt='todo-icon'
                  />
                  <span>Todo List</span>
                </li>
                <li>
                  <img
                    src={calendar}
                    alt='calendar-icon'
                  />
                  <span>Calendar</span>
                </li>
                <li>
                  <img
                    src={reminders}
                    alt='reminders-icon'
                  />
                  <span>Reminders</span>
                </li>
                <li>
                  <img
                    src={planning}
                    alt='planning-icon'
                  />
                  <span>Planning</span>
                </li>
              </Dropdown>
            )}
          </li>
          <li className='nav-company'>
            <NavLink
              className='nav-link'
              to='/company'
              onClick={() => toggle(isCompanyOpen, setIsCompanyOpen)}
            >
              Company
              <img
                src={isCompanyOpen ? iconArrowUp : iconArrowDown}
                alt='arrow-icon'
              />
            </NavLink>
            {isCompanyOpen && (
              <Dropdown>
                <li>
                  <span>Todo List</span>
                </li>
                <li>
                  <span>Calendar</span>
                </li>
                <li>
                  <span>Reminders</span>
                </li>
              </Dropdown>
            )}
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
        <div className='nav-btns'>
          <button className='login-btn'>Login</button>
          <button className='register-btn'>Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav

import { Link, NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            activeClassName='active'
            exact
            to='/features'
          >
            Features
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            activeClassName='active'
            to='/company'
          >
            Company
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            activeClassName='active'
            to='/careers'
          >
            Careers
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className='nav-link'
            activeClassName='active'
            to='/about'
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

import Navbar from "./Navbar"
import logo from "../assets/images/logo.svg"

const Header = ({ toggleMenu }) => {
  return (
    <header>
      <img
        src={logo}
        alt='logo'
      />
      <Navbar toggleMenu={toggleMenu} />
    </header>
  )
}

export default Header

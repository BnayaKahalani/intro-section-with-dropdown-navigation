import Navbar from "./Navbar"
import logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        alt='logo'
      />
      <Navbar />
    </header>
  )
}

export default Header

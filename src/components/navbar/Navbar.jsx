import { NavContainer, NavLogo, NavTitle } from './NavbarStyled'
import logo from '../assets/prueba.png'

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo>
        <img src={logo} alt='logo' />
      </NavLogo>

      <NavTitle>BookStore</NavTitle>
    </NavContainer>
  )
}

export default Navbar

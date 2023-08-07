import styled from 'styled-components'

const NavContainer = styled.div`
background-color: #e4c8a2;
height: 90px;
display: flex;
justify-content: flex-start;

`
const NavTitle = styled.h1`
font-family: 'Montserrat', sans-serif;
color:#3A1700;
display: flex;
align-items: center;
`
const NavLogo = styled.div`
display: flex;
align-items: center;
padding-top: 1.5rem;
& img {
  height: 180px;
  width:150px
}
`
export {
  NavContainer,
  NavTitle,
  NavLogo
}

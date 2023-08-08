import styled from 'styled-components'

const NavContainer = styled.div`
background-color: #0e4749;
height: 100px;
display: flex;
justify-content: flex-start;

`
const NavTitle = styled.h1`
font-family:  'Fira Sans', sans-serif;;
color:#f0e9e0;
display: flex;
align-items: center;
`
const NavLogo = styled.div`
display: flex;
align-items: center;

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

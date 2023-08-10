import styled from 'styled-components'

const NavContainer = styled.div`
background-color: #0e4749;
height: 120px;
display: flex;
justify-content: flex-start;

`
const NavTitle = styled.h1`
font-family:  'Fira Sans', sans-serif;
color:#f0e9e0;
display: flex;
align-items: center;
font-size: 40px;
padding: 2.5rem 1rem 1rem 2rem;
`
const NavLogo = styled.div`
display: flex;
align-items: flex-start;
padding: 0rem 0rem 1rem 3rem;

& img {
  height: 100px;
  width:110px
}
@media (max-width: 767px) {
  padding: 0rem 0rem 0rem 1rem
}
`
export {
  NavContainer,
  NavTitle,
  NavLogo
}

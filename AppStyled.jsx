import styled from 'styled-components'

const AppContainer = styled.div`
display:flex;
flex-direction: column;
padding:3rem;
& h2{
  font-family: 'Lobster Two', cursive;
  font-size:35px;
  padding:0.5rem;
}
& h3{
  font-family: 'Lobster Two', cursive;
  font-size: 25px;
  padding:0.5rem;
}
`

export {
  AppContainer
}

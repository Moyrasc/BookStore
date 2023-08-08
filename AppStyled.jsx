import styled from 'styled-components'

const AppContainer = styled.div`
display:flex;
flex-direction: column;
padding:2rem 3rem;
& h2{
  font-family: 'Lobster Two', cursive;
  font-size:35px;
  padding: 1rem 0rem 1rem 2rem;
}
& h3{
  font-family: 'Lobster Two', cursive;
  font-size: 25px;
  padding: 1rem 0rem 1rem 2rem;
}
`
const FiltersContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 40%;
`
export {
  AppContainer,
  FiltersContainer
}

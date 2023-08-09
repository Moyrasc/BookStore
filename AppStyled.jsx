import styled from 'styled-components'

const AppContainer = styled.div`
display:flex;
flex-direction: column;
padding:2rem 3rem;
& h2, h3{
  font-family: 'Lobster Two', cursive;
  font-size:35px;
  padding: 1rem 0rem ;
  text-align: center
}
& h3{
  font-size: 25px;
}
`
const FiltersContainer = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

`
const BooksContainer = styled.div`

`
export {
  AppContainer,
  FiltersContainer,
  BooksContainer
}

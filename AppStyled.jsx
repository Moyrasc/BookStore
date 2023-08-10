import styled from 'styled-components'

const AppContainer = styled.div`
display:flex;
flex-direction: column;
padding:2rem 3rem;
& h2, h3{
  font-family: 'Lobster Two', cursive;
  font-size:35px;
  padding-bottom: 1rem  ;
  text-align: center;
  padding-left: 2rem;
}
& h3{
  font-size: 25px;
}
@media (max-width: 767px) {
  padding: 1rem 1rem;
  & h2, h3{
    padding-left: 0rem;
    font-size:30px;
  }
  & h3{
    font-size: 22px;
  }
}
`
const FiltersContainer = styled.div`
display:flex;
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

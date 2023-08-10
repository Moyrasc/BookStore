import styled from 'styled-components'

const FilterContainer = styled.div`
display: flex;
flex-direction: column;
padding: 2rem 2rem 3rem 2rem;
& p{
    font-family: 'PT Serif Caption', serif;
    font-size: 18px;
    padding-bottom:0.6rem;
  
}
@media (max-width: 767px) {
  padding: 1.5rem 0rem 1rem 4rem
}
`
export {
  FilterContainer
}

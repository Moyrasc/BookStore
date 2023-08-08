import styled from 'styled-components'

const ContainerSelect = styled.div`
display:flex;
flex-direction: column;
padding: 3rem 0rem 3rem 2rem;
& p{
    font-family: 'PT Serif Caption', serif;
    font-size: 18px;
    padding-bottom:0.5rem
}
@media (max-width: 767px) {
  padding: 1.5rem 0rem 1rem 2rem
}
`
export {
  ContainerSelect

}

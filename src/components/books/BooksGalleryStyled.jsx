import styled from 'styled-components'

const BookContainer = styled.div`
display:grid;
gap:1.3rem;
grid-auto-rows:30rem;
grid-template-columns: repeat(auto-fill,minmax(15rem,1fr));

`
const Books = styled.div`
perspective: 2000px;
& h4{
    padding:1rem 0;
    text-align:center;
    font-family: 'PT Serif Caption', serif;
}
& img {
    height: 350px;
    width: 250px;
    justify-content:center;
}
& .flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
//   border-radius: 15px;
  transition: all 550ms cubic-bezier(0.1, 0.22, 0.8, 1.13);
  transform-style: preserve-3d;
}
& .flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 80%;
 
  backface-visibility: hidden;
}
& .flip-card-front {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  display: flex;
  padding-top:1.4rem;
}
& .flip-card-back {
  font-size: 1.25rem;
  text-align: center;
  display: grid;
  place-items: center;
  padding: 32px;
  background-color: #0e4749;
  color:#f0e9e0;
  
  transform: rotateY(180deg);
  & p {
    font-family: 'Lobster Two', cursive;
  }
}
&:hover .flip-card-inner {
  transform: rotateY(-180deg);
}
`
export {
  BookContainer,
  Books
}

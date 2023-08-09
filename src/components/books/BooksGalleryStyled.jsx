import styled from 'styled-components'

const BookContainer = styled.div`
display:grid;
gap:1rem;
grid-auto-rows:30rem;
grid-template-columns: repeat(auto-fill,minmax(16rem,1fr));
justify-items: center;
padding-top:2rem

`
const Books = styled.div`
perspective: 2000px;
width: 320px;
height: 504px;
& h4{
    padding:0.8rem 0;
    text-align:center;
    font-family: 'PT Serif Caption', serif;
}
& .flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 550ms cubic-bezier(0.1, 0.22, 0.8, 1.13);
  transform-style: preserve-3d;
}
& .flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 77%;
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
  padding: 32px;
  background-color: #0e4749;
  color:#f0e9e0;
  place-content: space-evenly;
  transform: rotateY(180deg);
  & p {
    font-family: 'PT Serif Caption', serif;
    font-size:16px;
    text-align:left;
  }
}
&:hover .flip-card-inner {
  transform: rotateY(-180deg);
}
`
const TitleList = styled.h2`
  font-family: 'Lobster Two', cursive;
  font-size:35px;
  padding: 1rem 0rem ;
  text-align: center
`
const Btn = styled.button`
position:relative;
top: 30px;
z-index: 1;
border-radius: 10px;
height: 30px;
border: none;
background-color: #f0e9e0;
cursor: pointer;
font-weight: bold;
color: #0e4749;
font-family: 'PT Serif Caption', serif;

`
export {
  BookContainer,
  Books,
  TitleList,
  Btn
}

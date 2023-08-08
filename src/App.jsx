import { AppContainer } from '../AppStyled.jsx'
import BooksGallery from './components/books/BooksGallery.jsx'
import FilterPage from './components/fliter/FilterPage.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import booksData from './data/books.json'

function App () {
  return (
    <>
      <Navbar />
      <AppContainer>
        <h2> ??? Libros disponibles</h2>
        <h3> ?? en la lista de lectura</h3>
        <FilterPage />
        <BooksGallery books={booksData.library} />
      </AppContainer>
    </>
  )
}

export default App

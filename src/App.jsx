import { useState } from 'react'
import { AppContainer } from '../AppStyled.jsx'
import BooksGallery from './components/books/BooksGallery.jsx'
import FilterPage from './components/fliter/FilterPage.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import booksData from './data/books.json'

function App () {
  const [pagesFilter, setPagesFilter] = useState(30)
  const filteredBooks = booksData.library.filter(book => book.book.pages >= pagesFilter)

  return (
    <>
      <Navbar />
      <AppContainer>
        <h2> {booksData.library.length} Libros disponibles</h2>
        <h3> ?? en la lista de lectura</h3>
        <FilterPage setPagesFilter={setPagesFilter} />
        <BooksGallery books={filteredBooks} />
      </AppContainer>
    </>
  )
}

export default App

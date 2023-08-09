import { useState } from 'react'
import { AppContainer, FiltersContainer } from '../AppStyled.jsx'
import BooksGallery from './components/books/BooksGallery.jsx'
import FilterPage from './components/fliter/FilterPage.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import booksData from './data/books.json'
import NativeSelectDemo from './components/fliter/FilterSelect.jsx'
import ListBooks from './components/books/ListBooks.jsx'

function App () {
  const [pagesFilter, setPagesFilter] = useState(30)
  const [genreFilter, setGenreFilter] = useState('')
  const [selectedBooks, setSelectedBooks] = useState([])
  // libros seleccionados en mi biblioteca
  const handleBookSelect = (selectedBook) => {
    setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, selectedBook])
  }
  // eliminar libros de mi biblioteca
  const handleBookRemove = (bookToRemove) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.filter((book) => book !== bookToRemove)
    )
  }
  const filteredBooks = booksData.library.filter(
    book => book.book.pages >= pagesFilter && (genreFilter === '' || book.book.genre === genreFilter)
  )
  return (
    <>
      <Navbar />
      <AppContainer>
        <h2> {booksData.library.length} Libros disponibles</h2>
        <h3> {selectedBooks.length === 0 ? 'No hay libros' : `${selectedBooks.length}`} en la lista de lectura</h3>
        <FiltersContainer>
          <FilterPage setPagesFilter={setPagesFilter} />
          <NativeSelectDemo setGenreFilter={setGenreFilter} />
        </FiltersContainer>
        <BooksGallery books={filteredBooks.filter(book => !selectedBooks.includes(book))} pagesFilter={pagesFilter} genreFilter={genreFilter} handleBookSelect={handleBookSelect} />
        <ListBooks selectedBook={selectedBooks} handleBookRemove={handleBookRemove} />
      </AppContainer>
    </>
  )
}

export default App

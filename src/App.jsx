import { useState } from 'react'
import { AppContainer, FiltersContainer } from '../AppStyled.jsx'
import BooksGallery from './components/books/BooksGallery.jsx'
import FilterPage from './components/fliter/FilterPage.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import booksData from './data/books.json'
import NativeSelectDemo from './components/fliter/FilterSelect.jsx'

function App () {
  const [pagesFilter, setPagesFilter] = useState(30)
  const [genreFilter, setGenreFilter] = useState('')
  const filteredBooks = booksData.library.filter(
    book => book.book.pages >= pagesFilter && (genreFilter === '' || book.book.genre === genreFilter)
  )

  return (
    <>
      <Navbar />
      <AppContainer>
        <h2> {booksData.library.length} Libros disponibles</h2>
        <h3> ?? en la lista de lectura</h3>
        <FiltersContainer>
          <FilterPage setPagesFilter={setPagesFilter} />
          <NativeSelectDemo setGenreFilter={setGenreFilter} />
        </FiltersContainer>

        <BooksGallery books={filteredBooks} pagesFilter={pagesFilter} genreFilter={genreFilter} />
      </AppContainer>
    </>
  )
}

export default App

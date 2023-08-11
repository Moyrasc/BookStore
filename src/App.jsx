import { useState, useEffect } from 'react'
import { AppContainer, FiltersContainer } from '../AppStyled.jsx'
import FilterPage from './components/fliter/FilterPage.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import booksData from './data/books.json'
import NativeSelectDemo from './components/fliter/FilterSelect.jsx'
import TabsBooks from './components/Tabs/TabsBooks.jsx'

function App () {
  const [pagesFilter, setPagesFilter] = useState(30)
  const [genreFilter, setGenreFilter] = useState('')
  const [selectedBooks, setSelectedBooks] = useState([])
  const availableBooks = booksData.library.length - selectedBooks.length
  // libros seleccionados en mi biblioteca (almacenados en localStorage)
  const handleBookSelect = (selectedBook) => {
    setSelectedBooks((prevSelectedBooks) => {
      const updatedSelectedBooks = [...prevSelectedBooks, selectedBook]
      window.localStorage.setItem('selectedBooks', JSON.stringify(updatedSelectedBooks))
      return updatedSelectedBooks
    })
  }
  // eliminar libros de mi biblioteca
  const handleBookRemove = (bookToRemove) => {
    setSelectedBooks((prevSelectedBooks) => {
      const updatedSelectedBooks = prevSelectedBooks.filter((book) => book !== bookToRemove)
      window.localStorage.setItem('selectedBooks', JSON.stringify(updatedSelectedBooks))
      return updatedSelectedBooks
    })
  }
  useEffect(() => {
    const storedSelectedBooks = window.localStorage.getItem('selectedBooks')
    if (storedSelectedBooks) {
      setSelectedBooks(JSON.parse(storedSelectedBooks))
    }
  }, [])
  const filteredBooks = booksData.library.filter(
    book => book.book.pages >= pagesFilter && (genreFilter === '' || book.book.genre === genreFilter)
  )
  return (
    <>
      <Navbar />
      <AppContainer>
        <h2> {availableBooks} Libros disponibles</h2>
        <h3> {selectedBooks.length === 0 ? 'No hay libros' : `${selectedBooks.length}`} en la lista de lectura</h3>
        <FiltersContainer>
          <FilterPage setPagesFilter={setPagesFilter} />
          <NativeSelectDemo setGenreFilter={setGenreFilter} />
        </FiltersContainer>
        <TabsBooks
          selectedBooks={selectedBooks}
          handleBookRemove={handleBookRemove}
          filteredBooks={filteredBooks}
          pagesFilter={pagesFilter}
          genreFilter={genreFilter}
          handleBookSelect={handleBookSelect}
        />
      </AppContainer>
    </>
  )
}

export default App

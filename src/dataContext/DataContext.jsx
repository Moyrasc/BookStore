import { createContext, useContext, useState, useEffect } from 'react'
import booksData from '../data/books.json'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [pagesFilter, setPagesFilter] = useState(30)
  const [genreFilter, setGenreFilter] = useState('')
  const [selectedBooks, setSelectedBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [availableBooks, setAvailableBooks] = useState([])

  // libros seleccionados en mi biblioteca (almacenados en localStorage)
  const handleBookSelect = (selectedBook) => {
    setSelectedBooks((prevSelectedBooks) => {
      const updatedSelectedBooks = [...prevSelectedBooks, selectedBook]
      const updatedAvailableBooks = availableBooks.filter(
        (book) => book !== selectedBook)
      window.localStorage.setItem('selectedBooks', JSON.stringify(updatedSelectedBooks))
      setAvailableBooks(updatedAvailableBooks)
      return updatedSelectedBooks
    })
  }
  // eliminar libros de mi biblioteca
  const handleBookRemove = (bookToRemove) => {
    setSelectedBooks((prevSelectedBooks) => {
      const updatedSelectedBooks = prevSelectedBooks.filter((book) => book !== bookToRemove)
      const updatedAvailableBooks = [...availableBooks, bookToRemove]
      window.localStorage.setItem('selectedBooks', JSON.stringify(updatedSelectedBooks))
      setAvailableBooks(updatedAvailableBooks)
      return updatedSelectedBooks
    })
  }
  useEffect(() => {
    const storedSelectedBooks = window.localStorage.getItem('selectedBooks')
    if (storedSelectedBooks) {
      setSelectedBooks(JSON.parse(storedSelectedBooks))
    }
    const updatedFilteredBooks = booksData.library.filter(
      book => book.book.pages >= pagesFilter && (genreFilter === '' || book.book.genre === genreFilter)
    )
    setFilteredBooks(updatedFilteredBooks)
  }, [pagesFilter, genreFilter])
  return (
    <DataContext.Provider value={{
      booksData,
      selectedBooks,
      handleBookSelect,
      handleBookRemove,
      pagesFilter,
      setPagesFilter,
      genreFilter,
      setGenreFilter,
      filteredBooks,
      availableBooks
    }}
    >
      {children}
    </DataContext.Provider>
  )
}

// Hook personalizado para acceder al contexto
export const useBooksContext = () => {
  return useContext(DataContext)
}

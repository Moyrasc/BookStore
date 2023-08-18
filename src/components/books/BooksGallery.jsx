import React from 'react'
import { BookContainer, Books } from './BooksGalleryStyled'
import { useBooksContext } from '../../dataContext/DataContext'

const BooksGallery = () => {
  const { pagesFilter, genreFilter, handleBookSelect, filteredBooks, selectedBooks } = useBooksContext()
  // Verifica al hacer click si el libro esta en la lista de selectedbook
  const handleBookClick = (book) => {
    if (!selectedBooks.some(selectedBook => selectedBook.book.title === book.book.title)) {
      handleBookSelect(book)
    }
  }
  // filtro paginas y genero
  const filteredAvailableBooks = filteredBooks.filter(
    book => book.book.pages >= pagesFilter && (genreFilter === '' || book.book.genre === genreFilter)
  )
  // almacena una lista de libros disponibles que aún no han sido seleccionados por el usuario y aplica filtro para asegurarse
  const filteredAndAvailableBooks = filteredAvailableBooks.filter(
    book => !selectedBooks.some(selectedBook => selectedBook.book.title === book.book.title)
  )

  return (
    <BookContainer>
      {filteredAndAvailableBooks.map((book, index) => {
        return (
          <Books className='flip-card' key={index} onClick={() => handleBookClick(book)}>
            <h4 data-testid='book-title'>{book.book.title}</h4>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img src={book.book.cover} alt={book.book.title} />
              </div>
              <div className='flip-card-back'>
                <p>{book.book.synopsis}</p>
                <p>Autor: {book.book.author.name}</p>
                <p>ISBN: {book.book.ISBN}</p>
              </div>
            </div>
          </Books>
        )
      })}
    </BookContainer>
  )
}

export default BooksGallery

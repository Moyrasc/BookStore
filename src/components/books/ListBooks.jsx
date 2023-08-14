import React from 'react'
import { BookContainer, Books, Btn } from './BooksGalleryStyled'
import { useBooksContext } from '../../dataContext/DataContext'

const ListBooks = () => {
  const {
    selectedBooks,
    handleBookRemove,
    pagesFilter,
    genreFilter
  } = useBooksContext()

  // Filtrado de libros
  const filteredSelectedBooks = selectedBooks.filter(
    book => book.book.pages >= pagesFilter && (genreFilter === '' || book.book.genre === genreFilter)
  )
  return (
    <BookContainer>
      {filteredSelectedBooks?.map((book, index) => {
        return (
          <Books className='flip-card' key={index}>
            <h4>{book.book.title}</h4>
            <div className='flip-card-inner'>

              <div className='flip-card-front'>
                <img src={book.book.cover} alt={book.book.title} />
              </div>
              <div className='flip-card-back'>
                <p>{book.book.synopsis}</p>
                <p>Autor: {book.book.author.name}</p>
                <p>ISBN: {book.book.ISBN}</p>
                <Btn onClick={() => handleBookRemove(book)}>Eliminar</Btn>
              </div>
            </div>

          </Books>
        )
      })}
    </BookContainer>
  )
}

export default ListBooks

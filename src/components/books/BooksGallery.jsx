import React from 'react'
import { BookContainer, Books } from './BooksGalleryStyled'

const BooksGallery = ({ books, pagesFilter, genreFilter, handleBookSelect }) => {
  const filteredBooks = books.filter(
    book => book.book.pages >= pagesFilter && (genreFilter === '' || book.book.genre === genreFilter)
  )
  return (
    <BookContainer>
      {filteredBooks.map((book, index) => {
        return (
          <Books className='flip-card' key={index} onClick={() => handleBookSelect(book)}>
            <h4>{book.book.title}</h4>
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

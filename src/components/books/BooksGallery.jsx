import React from 'react'
import { BookContainer, Books } from './BooksGalleryStyled'

const BooksGallery = ({ books }) => {
  return (
    <BookContainer>
      {books.map((book, index) => (
        <Books className='flip-card' key={index}>
          <div className='flip-card-inner'>
            <h4>{book.book.title}</h4>
            <div className='flip-card-front'>
              <img src={book.book.cover} alt={book.book.title} />
            </div>
            <div className='flip-card-back'>
              <p>{book.book.synopsis}</p>
              <p>{book.book.author.name}</p>
            </div>
          </div>
        </Books>
      ))}
    </BookContainer>
  )
}

export default BooksGallery

import React from 'react'
import { BookContainer, Books, Btn, TitleList } from './BooksGalleryStyled'

const ListBooks = ({ selectedBook, handleBookRemove }) => {
  return (
    <>
      <TitleList>Mi Biblioteca</TitleList>

      <BookContainer>
        {selectedBook?.map((book, index) => {
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
    </>

  )
}

export default ListBooks

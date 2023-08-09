import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'
import BooksGallery from '../books/BooksGallery'
import ListBooks from '../books/ListBooks'

export default function TabsBooks ({
  selectedBooks,
  handleBookRemove,
  filteredBooks,
  pagesFilter,
  genreFilter,
  handleBookSelect
}) {
  const [value, setValue] = useState('allBooks')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ sx: { backgroundColor: '#0e4749' } }}
        sx={{
          '.Mui-selected': { color: '#0e4749' },
          '& button': { fontWeight: 'bold', fontSize: '18px', fontFamily: 'PT Serif Caption' }
        }}
        aria-label='secondary tabs example'
      >
        <Tab value='allBooks' label='Todos los libros' />
        <Tab value='myLibrary' label='Mi Biblioteca' />
      </Tabs>
      {value === 'allBooks'
        ? (
          <BooksGallery
            books={filteredBooks.filter(book => !selectedBooks.includes(book))}
            pagesFilter={pagesFilter}
            genreFilter={genreFilter}
            handleBookSelect={handleBookSelect}
          />
          )
        : (
          <ListBooks
            selectedBook={selectedBooks}
            handleBookRemove={handleBookRemove}
          />
          )}
    </Box>
  )
}

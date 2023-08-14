import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'
import BooksGallery from '../books/BooksGallery'
import ListBooks from '../books/ListBooks'
import { useBooksContext } from '../../dataContext/DataContext'

export default function TabsBooks () {
  const {
    selectedBooks,
    handleBookRemove,
    availableBooks,
    pagesFilter,
    genreFilter,
    handleBookSelect
  } = useBooksContext()
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
            books={availableBooks}
            pagesFilter={pagesFilter}
            genreFilter={genreFilter}
            handleBookSelect={handleBookSelect}
          />
          )
        : (
          <ListBooks
            selectedBook={selectedBooks}
            handleBookRemove={handleBookRemove}
            pagesFilter={pagesFilter}
            genreFilter={genreFilter}
          />
          )}
    </Box>
  )
}

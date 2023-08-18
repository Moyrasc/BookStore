/* eslint-disable no-undef */
import { describe, test, vi, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BooksGallery from '../components/books/BooksGallery'
import { DataProvider } from '../dataContext/DataContext'

describe('BooksGallery', () => {
  test('renders book titles', () => {
    const mockContextValue = {
      pagesFilter: 500,
      genreFilter: 'Mystery',

      handleBookSelect: vi.fn(),
      filteredBooks: [
        {
          book: {
            title: 'Los renglones Torcidos de Dios',
            pages: 448,
            genre: 'Mystery',
            cover: 'sample-cover.jpg',
            synopsis: 'Sample synopsis',
            author: { name: 'Torcuato Luca de Tena' },
            ISBN: '1234567890'
          }
        }
      ],
      selectedBooks: []
    }

    render(
      <DataProvider value={mockContextValue}>
        <BooksGallery />
      </DataProvider>
    )

    const bookTitle = screen.getAllByTestId('book-title')

    expect(bookTitle.length).toBeGreaterThan(0)
  })
})

import { createContext, useContext } from 'react'
import bookData from '../data/books.json'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={bookData}>
      {children}
    </DataContext.Provider>
  )
}

// Hook personalizado para acceder al contexto
export const useBooksContext = () => {
  return useContext(DataContext)
}

import { AppContainer, FiltersContainer } from '../AppStyled.jsx'
import FilterPage from './components/fliter/FilterPage.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import NativeSelectDemo from './components/fliter/FilterSelect.jsx'
import TabsBooks from './components/Tabs/TabsBooks.jsx'
import { useBooksContext } from './dataContext/DataContext.jsx'

function App () {
  const {
    selectedBooks,
    handleBookSelect,
    handleBookRemove,
    pagesFilter,
    setPagesFilter,
    genreFilter,
    setGenreFilter,
    booksData
  } = useBooksContext()

  const availableBooks = booksData.library.length - selectedBooks.length
  const filteredBooks = booksData.library.filter(
    book => book.book.pages >= pagesFilter && (genreFilter === '' || book.book.genre === genreFilter)
  )
  return (
    <>
      <Navbar />
      <AppContainer>
        <h2> {availableBooks} Libros disponibles</h2>
        <h3> {selectedBooks.length === 0 ? 'No hay libros' : `${selectedBooks.length}`} en la lista de lectura</h3>
        <FiltersContainer>
          <FilterPage setPagesFilter={setPagesFilter} />
          <NativeSelectDemo setGenreFilter={setGenreFilter} />
        </FiltersContainer>
        <TabsBooks
          selectedBooks={selectedBooks}
          handleBookRemove={handleBookRemove}
          filteredBooks={filteredBooks}
          pagesFilter={pagesFilter}
          genreFilter={genreFilter}
          handleBookSelect={handleBookSelect}
        />
      </AppContainer>
    </>
  )
}

export default App

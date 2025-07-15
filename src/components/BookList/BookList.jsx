import BookCard from "../BookCard/BookCard"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import "./BookList.css"

const BookList = ({ books, loading = false }) => {
  if (loading) {
    return <LoadingSpinner />
  }

  if (!books || books.length === 0) {
    return (
      <div className="book-list__empty">
        <h3 className="book-list__empty-title">No se encontraron libros</h3>
        <p className="book-list__empty-text">Intenta ajustar tus criterios de búsqueda o filtros.</p>
      </div>
    )
  }

  return (
    <div className="book-list">
      <div className="book-list__grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BookList

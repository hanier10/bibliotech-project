"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useRental } from "../../context/RentalContext"
import { booksData } from "../../data/booksData"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import "./BookDetails.css"

const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const { rentals, addRental } = useRental()

  const isRented = rentals.some((rental) => rental.bookId === Number.parseInt(id))

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      const foundBook = booksData.find((b) => b.id === Number.parseInt(id))
      setBook(foundBook)
      setLoading(false)
    }, 500)
  }, [id])

  const handleRent = () => {
    if (book && !isRented) {
      addRental(book)
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (!book) {
    return (
      <div className="book-details__not-found">
        <h2>Libro no encontrado</h2>
        <Link to="/catalog">Volver al catálogo</Link>
      </div>
    )
  }

  return (
    <div className="book-details">
      <div className="book-details__container">
        <div className="book-details__breadcrumb">
          <Link to="/" className="book-details__breadcrumb-link">
            Inicio
          </Link>
          <span className="book-details__breadcrumb-separator">→</span>
          <Link to="/catalog" className="book-details__breadcrumb-link">
            Catálogo
          </Link>
          <span className="book-details__breadcrumb-separator">→</span>
          <span className="book-details__breadcrumb-current">{book.title}</span>
        </div>

        <div className="book-details__content">
          <div className="book-details__image-section">
            <img src={book.coverImage || "/placeholder.svg"} alt={book.title} className="book-details__image" />

            <div className="book-details__actions">
              <button
                className={`book-details__rent-btn ${isRented ? "book-details__rent-btn--rented" : ""}`}
                onClick={handleRent}
                disabled={isRented}
              >
                {isRented ? "Ya alquilado" : "Alquilar libro"}
              </button>

              {isRented && (
                <Link to="/rentals" className="book-details__manage-btn">
                  Gestionar alquiler
                </Link>
              )}
            </div>
          </div>

          <div className="book-details__info-section">
            <h1 className="book-details__title">{book.title}</h1>
            <p className="book-details__author">por {book.author}</p>

            <div className="book-details__rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`book-details__star ${i < Math.floor(book.rating) ? "book-details__star--filled" : ""}`}
                >
                  ★
                </span>
              ))}
              <span className="book-details__rating-text">({book.rating}/5)</span>
            </div>

            <div className="book-details__meta">
              <div className="book-details__meta-item">
                <strong>Año de publicación:</strong> {book.publishYear}
              </div>
              <div className="book-details__meta-item">
                <strong>Categoría:</strong> {book.category}
              </div>
              <div className="book-details__meta-item">
                <strong>Idioma:</strong> {book.language}
              </div>
              <div className="book-details__meta-item">
                <strong>Páginas:</strong> {book.pages}
              </div>
              <div className="book-details__meta-item">
                <strong>ISBN-10:</strong> {book.isbn10}
              </div>
              <div className="book-details__meta-item">
                <strong>ISBN-13:</strong> {book.isbn13}
              </div>
            </div>

            <div className="book-details__synopsis">
              <h3 className="book-details__section-title">Sinopsis</h3>
              <p className="book-details__synopsis-text">{book.synopsis}</p>
            </div>

            <div className="book-details__reviews">
              <h3 className="book-details__section-title">Reseñas</h3>
              <div className="book-details__reviews-list">
                {book.reviews.map((review, index) => (
                  <div key={index} className="book-details__review">
                    <div className="book-details__review-header">
                      <strong className="book-details__review-author">{review.author}</strong>
                      <div className="book-details__review-rating">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`book-details__review-star ${i < review.rating ? "book-details__review-star--filled" : ""}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="book-details__review-text">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails

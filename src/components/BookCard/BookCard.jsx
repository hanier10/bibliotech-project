"use client"

import { Link } from "react-router-dom"
import { useRental } from "../../context/RentalContext"
import "./BookCard.css"

const BookCard = ({ book }) => {
  const { rentals, addRental } = useRental()

  const isRented = rentals.some((rental) => rental.bookId === book.id)

  const handleRent = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isRented) {
      addRental(book)
    }
  }

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`} className="book-card__link">
        <div className="book-card__image-container">
          <img src={book.coverImage || "/placeholder.svg"} alt={book.title} className="book-card__image" />
          <div className="book-card__overlay">
            <span className="book-card__view-details">Ver detalles</span>
          </div>
        </div>

        <div className="book-card__content">
          <h3 className="book-card__title">{book.title}</h3>
          <p className="book-card__author">por {book.author}</p>
          <p className="book-card__year">{book.publishYear}</p>

          <div className="book-card__rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`book-card__star ${i < Math.floor(book.rating) ? "book-card__star--filled" : ""}`}
              >
                ★
              </span>
            ))}
            <span className="book-card__rating-text">({book.rating})</span>
          </div>
        </div>
      </Link>

      <div className="book-card__actions">
        <button
          className={`book-card__rent-btn ${isRented ? "book-card__rent-btn--rented" : ""}`}
          onClick={handleRent}
          disabled={isRented}
        >
          {isRented ? "Ya alquilado" : "Alquilar"}
        </button>
      </div>
    </div>
  )
}

export default BookCard

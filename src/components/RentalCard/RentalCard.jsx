"use client"

import { Link } from "react-router-dom"
import { useRental } from "../../context/RentalContext"
import "./RentalCard.css"

const RentalCard = ({ rental }) => {
  const { extendRental, returnBook } = useRental()

  const handleExtend = () => {
    extendRental(rental.id)
  }

  const handleReturn = () => {
    returnBook(rental.id)
  }

  const getDaysRemaining = () => {
    const today = new Date()
    const dueDate = new Date(rental.dueDate)
    const diffTime = dueDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysRemaining = getDaysRemaining()
  const isOverdue = daysRemaining < 0
  const isDueSoon = daysRemaining <= 3 && daysRemaining >= 0

  return (
    <div
      className={`rental-card ${isOverdue ? "rental-card--overdue" : ""} ${isDueSoon ? "rental-card--due-soon" : ""}`}
    >
      <div className="rental-card__image-container">
        <img
          src={rental.book.coverImage || "/placeholder.svg"}
          alt={rental.book.title}
          className="rental-card__image"
        />
      </div>

      <div className="rental-card__content">
        <h3 className="rental-card__title">{rental.book.title}</h3>
        <p className="rental-card__author">por {rental.book.author}</p>

        <div className="rental-card__dates">
          <p className="rental-card__date">
            <strong>Alquilado:</strong> {new Date(rental.rentalDate).toLocaleDateString()}
          </p>
          <p className="rental-card__date">
            <strong>Vence:</strong> {new Date(rental.dueDate).toLocaleDateString()}
          </p>
        </div>

        <div className="rental-card__status">
          {isOverdue && (
            <span className="rental-card__status-badge rental-card__status-badge--overdue">
              Vencido ({Math.abs(daysRemaining)} días)
            </span>
          )}
          {isDueSoon && !isOverdue && (
            <span className="rental-card__status-badge rental-card__status-badge--due-soon">
              Vence pronto ({daysRemaining} días)
            </span>
          )}
          {!isOverdue && !isDueSoon && (
            <span className="rental-card__status-badge rental-card__status-badge--active">
              Activo ({daysRemaining} días restantes)
            </span>
          )}
        </div>
      </div>

      <div className="rental-card__actions">
        <Link to={`/book/${rental.book.id}`} className="rental-card__button rental-card__button--secondary">
          Ver detalles
        </Link>
        <button className="rental-card__button rental-card__button--primary" onClick={handleExtend}>
          Extender plazo
        </button>
        <button className="rental-card__button rental-card__button--danger" onClick={handleReturn}>
          Devolver
        </button>
      </div>
    </div>
  )
}

export default RentalCard

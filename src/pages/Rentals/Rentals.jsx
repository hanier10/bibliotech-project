import { useRental } from "../../context/RentalContext"
import RentalList from "../../components/RentalList/RentalList"
import { Link } from "react-router-dom"
import "./Rentals.css"

const Rentals = () => {
  const { rentals } = useRental()

  const activeRentals = rentals.filter((rental) => rental.status === "active")
  const overdueRentals = activeRentals.filter((rental) => {
    const today = new Date()
    const dueDate = new Date(rental.dueDate)
    return dueDate < today
  })

  return (
    <div className="rentals">
      <div className="rentals__container">
        <div className="rentals__header">
          <h1 className="rentals__title">Mis alquileres</h1>
          <p className="rentals__subtitle">Gestiona tus libros alquilados y sus fechas de vencimiento</p>
        </div>

        {rentals.length > 0 && (
          <div className="rentals__stats">
            <div className="rentals__stat">
              <h3 className="rentals__stat-number">{activeRentals.length}</h3>
              <p className="rentals__stat-label">Libros activos</p>
            </div>
            <div className="rentals__stat">
              <h3 className="rentals__stat-number rentals__stat-number--warning">{overdueRentals.length}</h3>
              <p className="rentals__stat-label">Vencidos</p>
            </div>
          </div>
        )}

        {overdueRentals.length > 0 && (
          <div className="rentals__alert">
            <h3 className="rentals__alert-title">⚠️ Libros vencidos</h3>
            <p className="rentals__alert-text">
              Tienes {overdueRentals.length} libro(s) con fecha de devolución vencida. Por favor, devuélvelos o extiende
              el plazo.
            </p>
          </div>
        )}

        <div className="rentals__content">
          <RentalList rentals={activeRentals} />
        </div>

        {rentals.length === 0 && (
          <div className="rentals__empty-actions">
            <Link to="/catalog" className="rentals__cta-button">
              Explorar catálogo
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Rentals

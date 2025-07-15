import RentalCard from "../RentalCard/RentalCard"
import "./RentalList.css"

const RentalList = ({ rentals }) => {
  if (!rentals || rentals.length === 0) {
    return (
      <div className="rental-list__empty">
        <h3 className="rental-list__empty-title">No tienes libros alquilados</h3>
        <p className="rental-list__empty-text">Explora nuestro catálogo y alquila tu primer libro.</p>
      </div>
    )
  }

  return (
    <div className="rental-list">
      <div className="rental-list__grid">
        {rentals.map((rental) => (
          <RentalCard key={rental.id} rental={rental} />
        ))}
      </div>
    </div>
  )
}

export default RentalList

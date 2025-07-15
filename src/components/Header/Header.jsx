import { Link, useLocation } from "react-router-dom"
import { useRental } from "../../context/RentalContext"
import "./Header.css"

const Header = () => {
  const location = useLocation()
  const { rentals } = useRental()

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1 className="header__title">BiblioTech</h1>
        </Link>

        <nav className="header__nav">
          <Link to="/" className={`header__link ${location.pathname === "/" ? "header__link--active" : ""}`}>
            Inicio
          </Link>
          <Link
            to="/catalog"
            className={`header__link ${location.pathname === "/catalog" ? "header__link--active" : ""}`}
          >
            Catálogo
          </Link>
          <Link
            to="/rentals"
            className={`header__link ${location.pathname === "/rentals" ? "header__link--active" : ""}`}
          >
            Mis Alquileres
            {rentals.length > 0 && <span className="header__badge">{rentals.length}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

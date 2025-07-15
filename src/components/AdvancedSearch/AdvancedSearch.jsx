"use client"

import { useState } from "react"
import "./AdvancedSearch.css"

const AdvancedSearch = ({ onSearch, onClose, isOpen }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    genre: "",
    language: "",
    yearFrom: "",
    yearTo: "",
    ratingMin: "",
    availability: "",
    publisher: "",
  })

  const handleInputChange = (field, value) => {
    setSearchCriteria((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchCriteria)
  }

  const clearSearch = () => {
    const emptyCriteria = {
      title: "",
      author: "",
      isbn: "",
      category: "",
      genre: "",
      language: "",
      yearFrom: "",
      yearTo: "",
      ratingMin: "",
      availability: "",
      publisher: "",
    }
    setSearchCriteria(emptyCriteria)
    onSearch(emptyCriteria)
  }

  if (!isOpen) return null

  return (
    <div className="advanced-search">
      <div className="advanced-search__overlay" onClick={onClose}></div>
      <div className="advanced-search__modal">
        <div className="advanced-search__header">
          <h3 className="advanced-search__title">Búsqueda Avanzada</h3>
          <button className="advanced-search__close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form className="advanced-search__form" onSubmit={handleSearch}>
          <div className="advanced-search__grid">
            <div className="advanced-search__group">
              <label className="advanced-search__label">Título</label>
              <input
                type="text"
                className="advanced-search__input"
                value={searchCriteria.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Buscar por título..."
              />
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Autor</label>
              <input
                type="text"
                className="advanced-search__input"
                value={searchCriteria.author}
                onChange={(e) => handleInputChange("author", e.target.value)}
                placeholder="Buscar por autor..."
              />
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">ISBN</label>
              <input
                type="text"
                className="advanced-search__input"
                value={searchCriteria.isbn}
                onChange={(e) => handleInputChange("isbn", e.target.value)}
                placeholder="ISBN-10 o ISBN-13..."
              />
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Categoría</label>
              <select
                className="advanced-search__select"
                value={searchCriteria.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
              >
                <option value="">Todas las categorías</option>
                <option value="Realismo mágico">Realismo mágico</option>
                <option value="Distopía">Distopía</option>
                <option value="Clásico">Clásico</option>
                <option value="Romance">Romance</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Historia">Historia</option>
                <option value="Thriller">Thriller</option>
                <option value="Romance paranormal">Romance paranormal</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Fantasía juvenil">Fantasía juvenil</option>
                <option value="Filosofía">Filosofía</option>
                <option value="Drama">Drama</option>
                <option value="Fantasía épica">Fantasía épica</option>
                <option value="Clásico ruso">Clásico ruso</option>
              </select>
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Género</label>
              <select
                className="advanced-search__select"
                value={searchCriteria.genre}
                onChange={(e) => handleInputChange("genre", e.target.value)}
              >
                <option value="">Todos los géneros</option>
                <option value="Literatura">Literatura</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Romance">Romance</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Historia">Historia</option>
                <option value="Thriller">Thriller</option>
                <option value="Drama">Drama</option>
                <option value="Filosofía">Filosofía</option>
              </select>
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Idioma</label>
              <select
                className="advanced-search__select"
                value={searchCriteria.language}
                onChange={(e) => handleInputChange("language", e.target.value)}
              >
                <option value="">Todos los idiomas</option>
                <option value="Español">Español</option>
                <option value="Inglés">Inglés</option>
                <option value="Portugués">Portugués</option>
                <option value="Hebreo">Hebreo</option>
                <option value="Ruso">Ruso</option>
              </select>
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Año desde</label>
              <input
                type="number"
                className="advanced-search__input"
                value={searchCriteria.yearFrom}
                onChange={(e) => handleInputChange("yearFrom", e.target.value)}
                placeholder="1900"
                min="1000"
                max="2024"
              />
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Año hasta</label>
              <input
                type="number"
                className="advanced-search__input"
                value={searchCriteria.yearTo}
                onChange={(e) => handleInputChange("yearTo", e.target.value)}
                placeholder="2024"
                min="1000"
                max="2024"
              />
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Calificación mínima</label>
              <select
                className="advanced-search__select"
                value={searchCriteria.ratingMin}
                onChange={(e) => handleInputChange("ratingMin", e.target.value)}
              >
                <option value="">Cualquier calificación</option>
                <option value="4.5">4.5+ estrellas</option>
                <option value="4">4+ estrellas</option>
                <option value="3.5">3.5+ estrellas</option>
                <option value="3">3+ estrellas</option>
                <option value="2">2+ estrellas</option>
              </select>
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Disponibilidad</label>
              <select
                className="advanced-search__select"
                value={searchCriteria.availability}
                onChange={(e) => handleInputChange("availability", e.target.value)}
              >
                <option value="">Todos</option>
                <option value="available">Disponible</option>
                <option value="rented">Alquilado</option>
              </select>
            </div>

            <div className="advanced-search__group">
              <label className="advanced-search__label">Editorial</label>
              <input
                type="text"
                className="advanced-search__input"
                value={searchCriteria.publisher}
                onChange={(e) => handleInputChange("publisher", e.target.value)}
                placeholder="Buscar por editorial..."
              />
            </div>
          </div>

          <div className="advanced-search__actions">
            <button
              type="button"
              className="advanced-search__button advanced-search__button--secondary"
              onClick={clearSearch}
            >
              Limpiar filtros
            </button>
            <button type="submit" className="advanced-search__button advanced-search__button--primary">
              Buscar libros
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdvancedSearch

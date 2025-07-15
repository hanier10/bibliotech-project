"use client"

import { useState } from "react"
import "./FilterPanel.css"

const FilterPanel = ({ onFilterChange, categories, authors }) => {
  const [filters, setFilters] = useState({
    category: "",
    author: "",
    yearFrom: "",
    yearTo: "",
    rating: "",
    availability: "",
    language: "",
  })

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const emptyFilters = {
      category: "",
      author: "",
      yearFrom: "",
      yearTo: "",
      rating: "",
      availability: "",
      language: "",
    }
    setFilters(emptyFilters)
    onFilterChange(emptyFilters)
  }

  return (
    <div className="filter-panel">
      <div className="filter-panel__header">
        <h3 className="filter-panel__title">Filtros rápidos</h3>
        <button className="filter-panel__clear" onClick={clearFilters}>
          Limpiar
        </button>
      </div>

      <div className="filter-panel__group">
        <label className="filter-panel__label">Disponibilidad</label>
        <select
          className="filter-panel__select"
          value={filters.availability}
          onChange={(e) => handleFilterChange("availability", e.target.value)}
        >
          <option value="">Todos</option>
          <option value="available">Disponible</option>
          <option value="rented">Alquilado</option>
        </select>
      </div>

      <div className="filter-panel__group">
        <label className="filter-panel__label">Categoría</label>
        <select
          className="filter-panel__select"
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-panel__group">
        <label className="filter-panel__label">Autor</label>
        <select
          className="filter-panel__select"
          value={filters.author}
          onChange={(e) => handleFilterChange("author", e.target.value)}
        >
          <option value="">Todos los autores</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-panel__group">
        <label className="filter-panel__label">Idioma</label>
        <select
          className="filter-panel__select"
          value={filters.language}
          onChange={(e) => handleFilterChange("language", e.target.value)}
        >
          <option value="">Todos los idiomas</option>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
          <option value="Hebreo">Hebreo</option>
          <option value="Ruso">Ruso</option>
        </select>
      </div>

      <div className="filter-panel__group">
        <label className="filter-panel__label">Año de publicación</label>
        <div className="filter-panel__year-range">
          <input
            type="number"
            className="filter-panel__input"
            placeholder="Desde"
            value={filters.yearFrom}
            onChange={(e) => handleFilterChange("yearFrom", e.target.value)}
            min="1000"
            max="2024"
          />
          <input
            type="number"
            className="filter-panel__input"
            placeholder="Hasta"
            value={filters.yearTo}
            onChange={(e) => handleFilterChange("yearTo", e.target.value)}
            min="1000"
            max="2024"
          />
        </div>
      </div>

      <div className="filter-panel__group">
        <label className="filter-panel__label">Calificación mínima</label>
        <select
          className="filter-panel__select"
          value={filters.rating}
          onChange={(e) => handleFilterChange("rating", e.target.value)}
        >
          <option value="">Cualquier calificación</option>
          <option value="4.5">4.5+ estrellas</option>
          <option value="4">4+ estrellas</option>
          <option value="3.5">3.5+ estrellas</option>
          <option value="3">3+ estrellas</option>
          <option value="2">2+ estrellas</option>
        </select>
      </div>
    </div>
  )
}

export default FilterPanel

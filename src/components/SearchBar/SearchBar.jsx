"use client"

import { useState } from "react"
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch"
import "./SearchBar.css"

const SearchBar = ({ onSearch, onAdvancedSearch, placeholder = "Buscar libros..." }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleAdvancedSearch = (criteria) => {
    onAdvancedSearch(criteria)
    setShowAdvancedSearch(false)
  }

  return (
    <>
      <div className="search-bar">
        <form className="search-bar__form" onSubmit={handleSubmit}>
          <div className="search-bar__container">
            <input
              type="text"
              className="search-bar__input"
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit" className="search-bar__button">
              <svg className="search-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </form>

        <button className="search-bar__advanced" onClick={() => setShowAdvancedSearch(true)}>
          <svg className="search-bar__advanced-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          Búsqueda avanzada
        </button>
      </div>

      <AdvancedSearch
        isOpen={showAdvancedSearch}
        onClose={() => setShowAdvancedSearch(false)}
        onSearch={handleAdvancedSearch}
      />
    </>
  )
}

export default SearchBar

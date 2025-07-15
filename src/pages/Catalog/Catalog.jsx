"use client";

import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import BookList from "../../components/BookList/BookList";
import { booksData } from "../../data/booksData";
import { useSearch } from "../../hooks/useSearch";
import "./Catalog.css";

const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const {
    searchTerm,
    advancedCriteria,
    filteredBooks,
    handleSearch,
    handleAdvancedSearch,
    handleFilterChange,
    clearAllFilters,
    categories,
    authors,
  } = useSearch(books);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setBooks(booksData);
      setLoading(false);
    }, 1000);
  }, []);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const getSearchResultsText = () => {
    if (searchTerm) {
      return `${filteredBooks.length} resultados para "${searchTerm}"`;
    }

    if (Object.keys(advancedCriteria).length > 0) {
      const activeFilters = Object.values(advancedCriteria).filter(
        (value) => value !== ""
      ).length;
      return `${filteredBooks.length} resultados con ${activeFilters} filtro${
        activeFilters !== 1 ? "s" : ""
      } aplicado${activeFilters !== 1 ? "s" : ""}`;
    }

    return `${filteredBooks.length} libros disponibles`;
  };

  const hasActiveFilters =
    searchTerm || Object.keys(advancedCriteria).length > 0;

  return (
    <div className='catalog'>
      <div className='catalog__container'>
        <div className='catalog__header'>
          <h1 className='catalog__title'>Catálogo de libros</h1>
          <p className='catalog__subtitle'>
            Explora nuestra colección de {books.length} libros disponibles
          </p>
        </div>

        <div className='catalog__search'>
          <SearchBar
            onSearch={handleSearch}
            onAdvancedSearch={handleAdvancedSearch}
            placeholder='Buscar por título, autor, ISBN, género o descripción...'
          />
          <div className='catalog__search-actions'>
            <button className='catalog__filter-toggle' onClick={toggleFilters}>
              {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
            </button>
            {hasActiveFilters && (
              <button
                className='catalog__clear-filters'
                onClick={clearAllFilters}
              >
                Limpiar todo
              </button>
            )}
          </div>
        </div>

        <div className='catalog__content'>
          <aside
            className={`catalog__sidebar ${
              showFilters ? "catalog__sidebar--visible" : ""
            }`}
          >
            <FilterPanel
              onFilterChange={handleFilterChange}
              categories={categories}
              authors={authors}
            />
          </aside>

          <main className='catalog__main'>
            <div className='catalog__results-info'>
              <p className='catalog__results-count'>{getSearchResultsText()}</p>

              {Object.keys(advancedCriteria).length > 0 && (
                <div className='catalog__active-filters'>
                  <span className='catalog__filters-label'>
                    Filtros activos:
                  </span>
                  <div className='catalog__filters-list'>
                    {Object.entries(advancedCriteria).map(([key, value]) => {
                      if (!value) return null;
                      return (
                        <span key={key} className='catalog__filter-tag'>
                          {key}: {value}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <BookList books={filteredBooks} loading={loading} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

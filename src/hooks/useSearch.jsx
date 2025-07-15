"use client"

import { useState, useMemo } from "react"

export const useSearch = (books) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [advancedCriteria, setAdvancedCriteria] = useState({})
  const [filters, setFilters] = useState({
    category: "",
    author: "",
    yearFrom: "",
    yearTo: "",
    rating: "",
  })

  // Obtener categorías, autores, géneros y otros valores únicos
  const categories = useMemo(() => {
    return [...new Set(books.map((book) => book.category))].sort()
  }, [books])

  const authors = useMemo(() => {
    return [...new Set(books.map((book) => book.author))].sort()
  }, [books])

  const genres = useMemo(() => {
    return [...new Set(books.map((book) => book.genre))].sort()
  }, [books])

  const languages = useMemo(() => {
    return [...new Set(books.map((book) => book.language))].sort()
  }, [books])

  const publishers = useMemo(() => {
    return [...new Set(books.map((book) => book.publisher))].sort()
  }, [books])

  // Filtrar libros basado en término de búsqueda, criterios avanzados y filtros
  const filteredBooks = useMemo(() => {
    let filtered = books

    // Filtrar por término de búsqueda simple
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.isbn10.includes(term) ||
          book.isbn13.includes(term) ||
          book.synopsis.toLowerCase().includes(term) ||
          book.category.toLowerCase().includes(term) ||
          book.genre.toLowerCase().includes(term) ||
          book.publisher.toLowerCase().includes(term),
      )
    }

    // Aplicar criterios de búsqueda avanzada
    if (Object.keys(advancedCriteria).length > 0) {
      if (advancedCriteria.title) {
        const term = advancedCriteria.title.toLowerCase()
        filtered = filtered.filter((book) => book.title.toLowerCase().includes(term))
      }

      if (advancedCriteria.author) {
        const term = advancedCriteria.author.toLowerCase()
        filtered = filtered.filter((book) => book.author.toLowerCase().includes(term))
      }

      if (advancedCriteria.isbn) {
        const term = advancedCriteria.isbn
        filtered = filtered.filter((book) => book.isbn10.includes(term) || book.isbn13.includes(term))
      }

      if (advancedCriteria.category) {
        filtered = filtered.filter((book) => book.category === advancedCriteria.category)
      }

      if (advancedCriteria.genre) {
        filtered = filtered.filter((book) => book.genre === advancedCriteria.genre)
      }

      if (advancedCriteria.language) {
        filtered = filtered.filter((book) => book.language === advancedCriteria.language)
      }

      if (advancedCriteria.publisher) {
        const term = advancedCriteria.publisher.toLowerCase()
        filtered = filtered.filter((book) => book.publisher.toLowerCase().includes(term))
      }

      if (advancedCriteria.yearFrom) {
        filtered = filtered.filter((book) => book.publishYear >= Number.parseInt(advancedCriteria.yearFrom))
      }

      if (advancedCriteria.yearTo) {
        filtered = filtered.filter((book) => book.publishYear <= Number.parseInt(advancedCriteria.yearTo))
      }

      if (advancedCriteria.ratingMin) {
        filtered = filtered.filter((book) => book.rating >= Number.parseFloat(advancedCriteria.ratingMin))
      }

      if (advancedCriteria.availability) {
        filtered = filtered.filter((book) => book.availability === advancedCriteria.availability)
      }
    }

    // Aplicar filtros del panel lateral
    if (filters.category) {
      filtered = filtered.filter((book) => book.category === filters.category)
    }

    if (filters.author) {
      filtered = filtered.filter((book) => book.author === filters.author)
    }

    if (filters.yearFrom) {
      filtered = filtered.filter((book) => book.publishYear >= Number.parseInt(filters.yearFrom))
    }

    if (filters.yearTo) {
      filtered = filtered.filter((book) => book.publishYear <= Number.parseInt(filters.yearTo))
    }

    if (filters.rating) {
      filtered = filtered.filter((book) => book.rating >= Number.parseFloat(filters.rating))
    }

    return filtered
  }, [books, searchTerm, advancedCriteria, filters])

  const handleSearch = (term) => {
    setSearchTerm(term)
    setAdvancedCriteria({}) // Limpiar búsqueda avanzada cuando se usa búsqueda simple
  }

  const handleAdvancedSearch = (criteria) => {
    setAdvancedCriteria(criteria)
    setSearchTerm("") // Limpiar búsqueda simple cuando se usa búsqueda avanzada
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setAdvancedCriteria({})
    setFilters({
      category: "",
      author: "",
      yearFrom: "",
      yearTo: "",
      rating: "",
    })
  }

  return {
    searchTerm,
    advancedCriteria,
    filteredBooks,
    handleSearch,
    handleAdvancedSearch,
    handleFilterChange,
    clearAllFilters,
    categories,
    authors,
    genres,
    languages,
    publishers,
  }
}

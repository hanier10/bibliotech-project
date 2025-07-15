"use client"

import { createContext, useContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const RentalContext = createContext()

export const useRental = () => {
  const context = useContext(RentalContext)
  if (!context) {
    throw new Error("useRental must be used within a RentalProvider")
  }
  return context
}

export const RentalProvider = ({ children }) => {
  const [rentals, setRentals] = useLocalStorage("rentals", [])

  const addRental = (book) => {
    const newRental = {
      id: Date.now(),
      bookId: book.id,
      book: book,
      rentalDate: new Date().toISOString(),
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 días
      status: "active",
    }

    setRentals((prev) => [...prev, newRental])
  }

  const extendRental = (rentalId) => {
    setRentals((prev) =>
      prev.map((rental) =>
        rental.id === rentalId
          ? {
              ...rental,
              dueDate: new Date(new Date(rental.dueDate).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            }
          : rental,
      ),
    )
  }

  const returnBook = (rentalId) => {
    setRentals((prev) => prev.filter((rental) => rental.id !== rentalId))
  }

  const value = {
    rentals,
    addRental,
    extendRental,
    returnBook,
  }

  return <RentalContext.Provider value={value}>{children}</RentalContext.Provider>
}

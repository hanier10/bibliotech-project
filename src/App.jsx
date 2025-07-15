import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Catalog from "./pages/Catalog/Catalog"
import BookDetails from "./pages/BookDetails/BookDetails"
import Rentals from "./pages/Rentals/Rentals"
import { RentalProvider } from "./context/RentalContext"
import "./App.css"

function App() {
  return (
    <RentalProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="app__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/rentals" element={<Rentals />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RentalProvider>
  )
}

export default App

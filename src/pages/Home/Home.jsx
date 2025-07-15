"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import BookCard from "../../components/BookCard/BookCard";
import { booksData } from "../../data/booksData";
import "./Home.css";

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    // Simular carga de datos
    const featured = booksData.filter((book) => book.rating >= 4.5).slice(0, 6);

    const recent = booksData
      .sort((a, b) => b.publishYear - a.publishYear)
      .slice(0, 6);

    setFeaturedBooks(featured);
    setRecentBooks(recent);
  }, []);

  return (
    <div className='home'>
      <Hero />

      <section className='home__section'>
        <div className='home__container'>
          <div className='home__section-header'>
            <h2 className='home__section-title'>Libros destacados</h2>
            <Link to='/catalog' className='home__section-link'>
              Ver todos →
            </Link>
          </div>

          <div className='home__books-grid'>
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section className='home__section home__section--alt'>
        <div className='home__container'>
          <div className='home__section-header'>
            <h2 className='home__section-title'>Novedades</h2>
            <Link to='/catalog' className='home__section-link'>
              Ver todos →
            </Link>
          </div>

          <div className='home__books-grid'>
            {recentBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section className='home__cta'>
        <div className='home__container'>
          <div className='home__cta-content'>
            <h2 className='home__cta-title'>¿Listo para comenzar?</h2>
            <p className='home__cta-text'>
              Únete a miles de lectores que ya disfrutan de nuestra biblioteca
              digital.
            </p>
            <Link to='/catalog' className='home__cta-button'>
              Explorar catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

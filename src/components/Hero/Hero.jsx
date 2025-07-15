import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Hero.css";

function useCountUp(end, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
  }, [end, duration]);
  return count;
}

const Hero = () => {
  const books = useCountUp(10000);
  const authors = useCountUp(500);
  const categories = useCountUp(50);

  return (
    <section className='hero'>
      <div className='hero__container'>
        <div className='hero__content'>
          <h1 className='hero__title'>
            Descubre tu próxima
            <span className='hero__title-highlight'> gran lectura</span>
          </h1>
          <p className='hero__description'>
            Miles de libros digitales disponibles para alquilar. Desde clásicos
            hasta bestsellers contemporáneos, encuentra exactamente lo que
            buscas.
          </p>
          <div className='hero__actions'>
            <Link to='/catalog' className='hero__button hero__button--primary'>
              Explorar catálogo
            </Link>
            <Link
              to='/rentals'
              className='hero__button hero__button--secondary'
            >
              Mis alquileres
            </Link>
          </div>
        </div>

        <div className='hero__image'>
          <img
            src='https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Biblioteca digital'
            className='hero__img'
          />
        </div>
      </div>

      <div className='hero__stats'>
        <div className='hero__stat'>
          <h3 className='hero__stat-number'>{books.toLocaleString()}+</h3>
          <p className='hero__stat-label'>Libros disponibles</p>
        </div>
        <div className='hero__stat'>
          <h3 className='hero__stat-number'>{authors.toLocaleString()}+</h3>
          <p className='hero__stat-label'>Autores</p>
        </div>
        <div className='hero__stat'>
          <h3 className='hero__stat-number'>{categories.toLocaleString()}+</h3>
          <p className='hero__stat-label'>Categorías</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

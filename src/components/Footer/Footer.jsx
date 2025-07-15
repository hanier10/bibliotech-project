import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">BiblioTech</h3>
          <p className="footer__text">Tu biblioteca digital de confianza. Miles de libros al alcance de un clic.</p>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Enlaces</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Términos de uso
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Política de privacidad
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Síguenos</h4>
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              Facebook
            </a>
            <a href="#" className="footer__social-link">
              Twitter
            </a>
            <a href="#" className="footer__social-link">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© 2024 BiblioTech. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer

import "./LoadingSpinner.css"

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__container">
        <div className="loading-spinner__spinner"></div>
        <p className="loading-spinner__text">Cargando...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner

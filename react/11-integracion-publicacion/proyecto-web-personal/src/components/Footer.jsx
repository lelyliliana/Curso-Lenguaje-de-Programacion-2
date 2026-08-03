function Footer({ curso }) {

  const anioActual = new Date().getFullYear()

  return (
    <footer className="pie-pagina">

      <div className="contenedor">

        <p>
          {curso} · {anioActual}
        </p>

        <a href="#inicio">
          Volver al inicio
        </a>

      </div>

    </footer>
  )

}

export default Footer
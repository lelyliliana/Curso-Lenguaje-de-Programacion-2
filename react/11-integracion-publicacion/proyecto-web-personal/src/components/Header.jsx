function Header({ titulo, descripcion }) {

  return (
    <header className="encabezado" id="inicio">

      <div className="contenedor">

        <h1>
          {titulo}
        </h1>

        <p>
          {descripcion}
        </p>

        <nav aria-label="Navegación principal">

          <a href="#bienvenida">
            Bienvenida
          </a>

          <a href="#proyectos">
            Proyectos
          </a>

          <a href="#github">
            GitHub
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </nav>

      </div>

    </header>
  )

}

export default Header
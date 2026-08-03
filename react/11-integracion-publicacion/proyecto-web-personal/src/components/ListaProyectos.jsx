import TarjetaProyecto from "./TarjetaProyecto"

function ListaProyectos({ proyectos }) {

  if (proyectos.length === 0) {

    return (
      <section
        id="proyectos"
        className="seccion"
      >

        <h2>
          Proyectos
        </h2>

        <p>
          No hay proyectos disponibles.
        </p>

      </section>
    )

  }

  return (
    <section
      id="proyectos"
      className="seccion"
    >

      <h2>
        Proyectos
      </h2>

      <div className="cuadricula-proyectos">

        {proyectos.map((proyecto) => (

          <TarjetaProyecto
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
          />

        ))}

      </div>

    </section>
  )

}

export default ListaProyectos
import TarjetaProyecto from "./TarjetaProyecto"

function ListaProyectos({ proyectos }) {

  if (proyectos.length === 0) {

    return (
      <p>
        No hay proyectos disponibles.
      </p>
    )

  }

  return (
    <section>

      <h2>
        Proyectos
      </h2>

      {proyectos.map((proyecto) => (

        <TarjetaProyecto
          key={proyecto.id}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
        />

      ))}

    </section>
  )

}

export default ListaProyectos
function TarjetaProyecto({ titulo, descripcion }) {

  return (
    <article className="tarjeta-proyecto">

      <h3>
        {titulo}
      </h3>

      <p>
        {descripcion}
      </p>

    </article>
  )

}

export default TarjetaProyecto
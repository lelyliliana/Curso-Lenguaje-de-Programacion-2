function Seccion({ idSeccion, titulo, contenido }) {

  return (
    <section
      id={idSeccion}
      className="seccion"
    >

      <h2>
        {titulo}
      </h2>

      <p>
        {contenido}
      </p>

    </section>
  )

}

export default Seccion
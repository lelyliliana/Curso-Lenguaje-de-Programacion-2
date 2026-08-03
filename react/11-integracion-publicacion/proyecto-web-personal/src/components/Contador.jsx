import { useEffect, useState } from "react"

function Contador() {

  const [cantidad, setCantidad] = useState(0)

  useEffect(() => {

    document.title = `Interacciones: ${cantidad}`

    return () => {
      document.title = "Proyecto Web Personal"
    }

  }, [cantidad])

  function aumentarCantidad() {
    setCantidad((valorAnterior) => valorAnterior + 1)
  }

  function reiniciarCantidad() {
    setCantidad(0)
  }

  return (
    <section
      id="interaccion"
      className="seccion"
    >

      <h2>
        Interacción con el proyecto
      </h2>

      <p>
        Cantidad de interacciones: <strong>{cantidad}</strong>
      </p>

      <div className="grupo-botones">

        <button
          type="button"
          onClick={aumentarCantidad}
        >
          Interactuar
        </button>

        <button
          type="button"
          className="boton-secundario"
          onClick={reiniciarCantidad}
        >
          Reiniciar
        </button>

      </div>

    </section>
  )

}

export default Contador
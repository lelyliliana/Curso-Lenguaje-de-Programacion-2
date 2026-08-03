import { useState } from "react"

function Contador() {

  const [cantidad, setCantidad] = useState(0)

  function aumentarCantidad() {
    setCantidad((valorAnterior) => valorAnterior + 1)
  }

  function reiniciarCantidad() {
    setCantidad(0)
  }

  return (
    <section>

      <h2>
        Interacción con el proyecto
      </h2>

      <p>
        Cantidad de interacciones: {cantidad}
      </p>

      <button
        type="button"
        onClick={aumentarCantidad}
      >
        Interactuar
      </button>

      <button
        type="button"
        onClick={reiniciarCantidad}
      >
        Reiniciar
      </button>

    </section>
  )

}

export default Contador
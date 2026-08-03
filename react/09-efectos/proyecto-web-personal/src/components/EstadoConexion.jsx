import { useEffect, useState } from "react"

function EstadoConexion() {

  const [enLinea, setEnLinea] = useState(navigator.onLine)

  useEffect(() => {

    function manejarConexion() {
      setEnLinea(true)
    }

    function manejarDesconexion() {
      setEnLinea(false)
    }

    window.addEventListener("online", manejarConexion)
    window.addEventListener("offline", manejarDesconexion)

    return () => {
      window.removeEventListener("online", manejarConexion)
      window.removeEventListener("offline", manejarDesconexion)
    }

  }, [])

  return (
    <section>

      <h2>
        Estado de conexión
      </h2>

      <p>
        {enLinea
          ? "El dispositivo está conectado a Internet."
          : "El dispositivo está sin conexión."}
      </p>

    </section>
  )

}

export default EstadoConexion
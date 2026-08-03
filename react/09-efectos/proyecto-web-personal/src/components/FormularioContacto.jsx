import { useState } from "react"

function FormularioContacto() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  })

  const [enviado, setEnviado] = useState(false)

  function manejarCambio(evento) {

    const { name, value } = evento.target

    setFormulario((valoresAnteriores) => ({
      ...valoresAnteriores,
      [name]: value
    }))

    setEnviado(false)
  }

  function manejarEnvio(evento) {

    evento.preventDefault()

    if (
      formulario.nombre.trim() === "" ||
      formulario.correo.trim() === "" ||
      formulario.mensaje.trim() === ""
    ) {
      return
    }

    setEnviado(true)

    setFormulario({
      nombre: "",
      correo: "",
      mensaje: ""
    })
  }

  return (
    <section>

      <h2>
        Contacto
      </h2>

      <form onSubmit={manejarEnvio}>

        <div>

          <label htmlFor="nombre">
            Nombre
          </label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formulario.nombre}
            onChange={manejarCambio}
          />

        </div>

        <div>

          <label htmlFor="correo">
            Correo electrónico
          </label>

          <input
            id="correo"
            name="correo"
            type="email"
            value={formulario.correo}
            onChange={manejarCambio}
          />

        </div>

        <div>

          <label htmlFor="mensaje">
            Mensaje
          </label>

          <textarea
            id="mensaje"
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
          />

        </div>

        <button type="submit">
          Enviar
        </button>

      </form>

      {enviado && (
        <p>
          El formulario fue enviado correctamente.
        </p>
      )}

    </section>
  )

}

export default FormularioContacto
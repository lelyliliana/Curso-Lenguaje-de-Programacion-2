import { useEffect, useState } from "react"

function PerfilGithub() {

  const [perfil, setPerfil] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {

    async function obtenerPerfil() {

      try {

        setCargando(true)
        setError(false)

        const respuesta = await fetch(
          "https://api.github.com/users/octocat"
        )

        if (!respuesta.ok) {
          throw new Error("No fue posible obtener el perfil")
        }

        const datos = await respuesta.json()

        setPerfil(datos)

      } catch (errorSolicitud) {

        console.error(errorSolicitud)
        setError(true)

      } finally {

        setCargando(false)

      }

    }

    obtenerPerfil()

  }, [])

  if (cargando) {

    return (
      <section>

        <h2>
          Perfil de GitHub
        </h2>

        <p>
          Cargando información...
        </p>

      </section>
    )

  }

  if (error) {

    return (
      <section>

        <h2>
          Perfil de GitHub
        </h2>

        <p>
          No fue posible obtener la información.
        </p>

      </section>
    )

  }

  return (
    <section>

      <h2>
        Perfil de GitHub
      </h2>

      <img
        src={perfil.avatar_url}
        alt={`Avatar de ${perfil.login}`}
        width="150"
        height="150"
      />

      <h3>
        {perfil.name || perfil.login}
      </h3>

      <p>
        Usuario: {perfil.login}
      </p>

      <p>
        Repositorios públicos: {perfil.public_repos}
      </p>

      <p>
        Seguidores: {perfil.followers}
      </p>

      <a
        href={perfil.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Ver perfil en GitHub
      </a>

    </section>
  )

}

export default PerfilGithub
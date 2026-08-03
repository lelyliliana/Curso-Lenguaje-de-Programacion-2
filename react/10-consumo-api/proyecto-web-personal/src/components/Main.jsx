import Seccion from "./Seccion"
import Contador from "./Contador"
import ListaProyectos from "./ListaProyectos"
import FormularioContacto from "./FormularioContacto"
import EstadoConexion from "./EstadoConexion"
import proyectos from "../data/proyectos"
import PerfilGithub from "./PerfilGithub"

function Main() {

  return (
    <main>

      <Seccion
        titulo="Bienvenida"
        contenido="En este proyecto aprenderemos a construir interfaces mediante JSX y componentes de React."
      />

      <Seccion
        titulo="Objetivo del proyecto"
        contenido="Desarrollar progresivamente un sitio web personal utilizando componentes reutilizables."
      />

      <ListaProyectos
        proyectos={proyectos}
      />

      <PerfilGithub />

      <Contador />

      <EstadoConexion />

      <FormularioContacto />

    </main>
  )

}

export default Main
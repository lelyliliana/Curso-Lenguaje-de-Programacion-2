function App() {

  const nombreProyecto = "Proyecto Web Personal"
  const curso = "Lenguaje de Programación II"

  return (
    <>

      <header>

        <h1>
          {nombreProyecto}
        </h1>

        <p>
          Primera versión del proyecto desarrollada con React.
        </p>

      </header>

      <main>

        <section>

          <h2>
            Bienvenida
          </h2>

          <p>
            En este proyecto aprenderemos a construir interfaces
            mediante JSX y componentes de React.
          </p>

        </section>

      </main>

      <footer>

        <p>
          {curso}
        </p>

      </footer>

    </>
  )

}

export default App
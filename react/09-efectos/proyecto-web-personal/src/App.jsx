import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
    <>

      <Header
        titulo="Proyecto Web Personal"
        descripcion="Primera versión del proyecto desarrollada con React."
      />

      <Main />

      <Footer
        curso="Lenguaje de Programación II"
      />

    </>
  )

}

export default App
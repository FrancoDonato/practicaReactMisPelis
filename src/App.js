import { useState } from "react";
import { Agregar } from "./components/Agregar";
import { Buscador } from "./components/Buscador";
import { Contenido } from "./components/Contenido";
import { Navegacion } from "./components/Navegacion";

  function App() {

    const [listadoState, setListado] = useState([]);


  return (


    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        <Navegacion/>

        <Contenido listadoState={listadoState} setListado={setListado}/>

        <aside className="lateral">
            <Buscador listadoState={listadoState} setListado={setListado}/>
            <Agregar setListado={setListado}/>
        </aside>

        <footer className="footer">
            &copy; Master en javascript ES12 y Typescript - <a href="/#">FrancoDonato</a>
        </footer>
    </div>
  );
}

export default App;

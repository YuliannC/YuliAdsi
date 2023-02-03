import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Boton from './assets/Boton'
import Pantalla from './assets/pantalla'
import Operacion from './assets/operaciones'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Pantalla/>
    <Pantalla/>
    <Boton nombre="C" />
    <Boton nombre="7" />
    <Boton nombre="4" />
    <Boton nombre="1" />
  <br />
    <Boton nombre="borrar" />
    <Boton nombre="8" />
    <Boton nombre="5" />
    <Boton nombre="2" />
    <Boton nombre="0" />
   <br />
    <Boton nombre="9" />
    <Boton nombre="6" />
    <Boton nombre="3" />
   <br />
    <Operacion nombre="/" />
    <Operacion nombre="x" />
    <Operacion nombre="-" />
    <Operacion nombre="+" />
    <Boton nombre="=" />
    </div>
    
  </React.StrictMode>,
)

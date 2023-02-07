import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contador from './assets/Contador'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';

function App() {
  const [input, setInput]=useState('');
  const agregarInput= val => {
    setInput(input + val);
  }

  const calcularResultado = val => {
    if(input){
      setInput(evaluate(input));
    }
  };

  
  
  return(
    <div className='App'>
      <div >
       
      </div>
      <div className='contenedor-calculadora' >
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Borrar
          </BotonClear>
        </div>
      </div>
    </div>
  //   <div >
  //   <Pantalla input={input}/>
  //   <Pantalla/>
  //   <div className='fila'>
  //   <Boton manejarClic={agregarInput} nombre="C" />
  //   <Boton manejarClic={agregarInput} nombre="7" />
  //   <Boton manejarClic={agregarInput} nombre="4" />
  //   <Boton manejarClic={agregarInput} nombre="1" />
  //   </div>
  //   <div className='column'>
  //    {/* <BotonClear manejarClear={() = setInput('') } nombre="C"/> */}
  //   <Boton manejarClic={agregarInput} nombre="8" />
  //   <Boton manejarClic={agregarInput} nombre="5" />
  //   <Boton manejarClic={agregarInput} nombre="2" />
  //   <Boton manejarClic={agregarInput} nombre="0" />
  //   </div>
  //   <div className='column'>
  //   <Boton manejarClic={agregarInput} nombre="9" />
  //   <Boton manejarClic={agregarInput} nombre="6" />
  //   <Boton manejarClic={agregarInput} nombre="3" />
  //   </div>
  //  <div className='column'>
  //   <Operacion nombre="/" />
  //   <Operacion nombre="x" />
  //   <Operacion nombre="-" />
  //   <Operacion nombre="+" />
  //   <Operacion nombre="=" />
  //   </div>
  //   </div>
  );
  

}

export default App

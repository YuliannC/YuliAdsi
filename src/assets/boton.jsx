import React, { useState } from 'react';

function Boton(props){

  const [input, setInput] = useState('');
  const agregarInput = val => {
   setInput(input + "1");
   };
   const restar=()=>{setValor(valor-1)}

  return (
    <div>
      <button onClick={ agregarInput }>
      {props.nombre}
      </button>
    </div>
  );
}

export default Boton;
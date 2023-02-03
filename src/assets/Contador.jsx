import { useState } from "react"
import { Fragment } from "react"

 export const Contador=()=>{

    const [boton,setBoton]=useState('')
    
    const AgregarBoton=()=>{
      setBoton()
    }

    // const sumar=()=>{
    //   setValor(valor)
    // }


  
    // const [input, setInput] = useState('');

    // const agregarInput = val => {
    //   setInput(input + val);
    // };

    // const sumar0=()=>{setValor(1)}
    // const sumar1=()=>{setValor(2)}
    // const sumar2=()=>{setValor(3)}
    // const sumar3=()=>{setValor(4)}
    // const sumar4=()=>{setValor(5)}
    // const sumar5=()=>{setValor(6)}
    // const sumar6=()=>{setValor(7)}
    // const sumar7=()=>{setValor(8)}
    // const sumar8=()=>{setValor(9)}
    // const sumar9=()=>{setValor(0)}

    // const restar=()=>{setValor(valor-1)}

    // return (
    //     <Fragment>
    //       <h1>Calculadora</h1>
    //       <p className="pantalla">{ valor }</p>
    //       <ul>
    //         <button type="button" className="limpiar"  onClick={sumar}>C</button>
    //         <button type="button" className="num" onClick={sumar}>CE</button>
    //         <button type="button" className="num" onClick={restar}>÷</button>
    //         <br />
    //         <button type="button" className="num" id="siete" onClick={sumar6}>7</button>
    //         <button type="button" className="num" id="ocho" onClick={sumar7}>8</button>
    //         <button type="button" className="num" id="nueve" onClick={sumar8}>9</button>
    //         <button type="button" className="num"  onClick={restar}>x</button>
    //         <br />
    //         <button type="button" className="num" id="cuatro" onClick={sumar3}>4</button>
    //         <button type="button" className="num" id="cinco" onClick={sumar6}>5</button>
    //         <button type="button" className="num" id="tres" onClick={sumar5}>6</button>
    //         <button type="button" className="num" onClick={restar}>-</button>
    //         <br />
    //         <button type="button" className="num" onClick={agregarInput}>1</button>
    //         <button type="button" className="num" id="dos" onClick={sumar1}>2</button>
    //         <button type="button" className="num" id="tres" onClick={sumar2}>3</button>
    //         <button type="button" className="num" onClick={sumar}>+</button>
    //         <br />
    //         <button type="button" className="num" id="cero" onClick={sumar}>0</button>
    //         <button type="button" className="igual" id="cero" onClick={sumar}>=</button>

            
    //       </ul>
    //     </Fragment>
    // )
}
export default Contador 
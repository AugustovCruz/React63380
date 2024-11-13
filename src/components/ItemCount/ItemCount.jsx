import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const suma= () => {
        setContador(contador+1)
    }
    const resta = () => {
        setContador(contador-1)
    }
    const reset = () => {
        setContador(0)
    }

    return (
        <>
            <div>
                <button onClick={reset}> Reset </button>
            </div>
            <div>
                <button onClick={resta} disabled={contador <= 0} >-</button> {contador} <button onClick={suma} disabled={contador >= 10} >+</button> 
            </div>
            <div>
                <button onClick={ ()=> {console.log("Cantidad agregada",contador)}} disabled= {contador<=0}  >Agregar al Carrito</button>
            </div>
        </>
    )
}

export default ItemCount
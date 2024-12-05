import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCount = ({prod}) => {
    
    const {addCart } = useContext(CartContext)
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

    // Función para manejar el clic del botón 
    const handleAddCart = () => { 
        const addProduct = {...prod, contador}
        addCart(addProduct)
        console.log(addProduct)
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
                <button onClick={handleAddCart} disabled= {contador<=0}  >Agregar al Carrito</button>
            </div>
        </>
    )
}

export default ItemCount
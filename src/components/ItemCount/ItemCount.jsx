import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
//Importanto toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    // Funcion para manejar el clic del boton 
    const handleAddCart = () => {
        if (contador === 0) {
            toast.warn("Necesita agregar una cantidad")
        } else if (contador <= prod.stock ) {
            const addProduct = {...prod, contador}
            addCart(addProduct)
            console.log(prod.stock)
        }

    }

    return (
        <>
            <ToastContainer />
            <div>
                <button onClick={reset}> Reset </button>
            </div>
            <div>
                <button onClick={resta} disabled={contador <= 0} >-</button> 
                    {contador} 
                <button onClick={suma} disabled={contador >= prod.stock} >+</button> 
            </div>
            <div>
                <button onClick={handleAddCart} disabled= {contador<0}  >Agregar al Carrito</button>
            </div>
        </>
    )
}

export default ItemCount
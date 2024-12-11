import { createContext, useEffect, useState} from 'react' 
//Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()
//Almaceno los datos locales para que el render no lo elimine
const cartStorage =  JSON.parse(localStorage.getItem("cartStorage")) || []

const CartContextProvider = (props) => {
    
    const [cart, setCart] = useState(cartStorage);

    const addCart = (prod) => {
        const updateCart = [...cart];
        const found = updateCart.find((p) => p.title === prod.title);
    
        if (prod.contador > prod.stock) {
            alert("No hay suficiente stock disponible");
            return;
        }
    
        if (found) {
            if (found.contador + prod.contador <= prod.stock) {
                found.contador += prod.contador;
                setCart(updateCart);
            } else {
                toast.warn("Cantidad excede el stock disponible")
                return
            }
        } else {
            setCart([...cart, prod]);
        }
        toast.success("Producto agregado!")
    };
    

    const totalCant = () => {
        return cart.length
    }

    const emptyCart = () => {
        setCart([])
    }

    const deletProduct = (product) => {
        const found = cart.find( prod => prod.title === product.title )
        setCart (cart.filter(prod => prod.title != found.title))
    }

    const cantTotalCart = () => {
        return cart.reduce( (total, prod) => total + prod.contador, 0)
    }

    const priceTotal = () => {
        return cart.reduce( (total, prod) => total + prod.price*prod.contador, 0).toFixed(2)
    }

    useEffect ( ()=>{ 
        localStorage.setItem("cartStorage", JSON.stringify(cart))
    },[cart])



    return (
        <>
            <CartContext.Provider value={ {cart, setCart, priceTotal, cantTotalCart, addCart, totalCant, emptyCart, deletProduct} }>
                {props.children}
            </CartContext.Provider>
        </>
    )
}
export default CartContextProvider
import { createContext, useEffect, useState} from 'react' 

export const CartContext = createContext()
//Almaceno los datos locales para que el render no lo elimine
const cartStorage =  JSON.parse(localStorage.getItem("cartStorage")) || []

const CartContextProvider = (props) => {
    
    const [cart, setCart] = useState(cartStorage);

    const addCart = (prod) => {

        const updateCart = [...cart]
        const found = updateCart.find( (p)=> p.title === prod.title)

        if (found) {
            found.contador += prod.contador
            setCart(updateCart)
        } else {
            setCart( [...cart, prod] )
        }        
        
    }

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
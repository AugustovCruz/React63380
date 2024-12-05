import { createContext, useEffect, useState} from 'react' 

export const CartContext = createContext()

const CartContextProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    const addCart = (prod) => {

        const updateCart = [...cart]
        const found = updateCart.find( (p)=> p.title === prod.title)

        if (found) {
            found.contador += prod.contador
            console.log("Sumando cantidades", found.contador)
            setCart(updateCart)
        } else {
            setCart( [...cart, prod] )
        }        
        console.log("producto agregado",prod.title)
    }

    const totalCant = () => {
        return cart.length
    }

    const emptyCart = () => {
        setCart([])
    }

    const deletProduct = (product) => {
        console.log(product.title)
        const found = cart.find( prod => prod.title === product.title )
        setCart (cart.filter(prod => prod.title != found.title))
    }

    const cantTotalCart = () => {
        return cart.reduce( (total, prod) => total + prod.contador, 0)
    }

    const priceTotal = () => {
        return cart.reduce( (total, prod) => total + prod.price*prod.contador, 0)
    }

    useEffect ( ()=>{ 
        console.log("Estado actual del carrito", cart)
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
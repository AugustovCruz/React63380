import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../CartView/CartView.css"


const CartView = () => {
    const { cart, emptyCart, priceTotal, deletProduct, setCart, totalCant } = useContext(CartContext);

    const handleClick = (item) => {
        console.log(item)
        deletProduct(item)
    }

    const incrementProduct = (item) => {
        const updateCart = [...cart]
        const found = updateCart.find( (p) => p.title === item.title )
        if (found) {
            found.contador += 1
            console.log(found)
            setCart(updateCart)
        }
    }


    const decrementProduct = (item) => {
        const updateCart = [...cart]
        const found = updateCart.find( (p) => p.title === item.title )
        if (found) {
            found.contador -= 1
            console.log(found)
            setCart(updateCart)
        }
    }

    return (
        <>
            {
                totalCant() > 0 ?
                <>
                    <div className="btn-cart">
                        <button onClick={emptyCart} >Vaciar carrito</button>
                    </div>
                </> :
                <h2>El carrito se encuentra vacio.</h2>
            }
            {
                cart.map((item)=>(
                    <div className="cart-view" key={item.id} >
                        <img src={item.thumbnail} alt={item.title} />
                        <h3>{item.title}</h3>
                        <section>
                            <p>Precio por unidad: ${item.price} </p>
                            <p>Precio total: ${item.price*item.contador} </p>
                        </section>
                        <section>
                            <p>Cantidad</p>
                            <article className="add-prod" >
                                <button onClick={()=>decrementProduct(item)} disabled={item.contador === 1}> - </button>
                                <span> {item.contador} </span>
                                <button onClick={ ()=> incrementProduct(item) } > + </button>
                            </article>                         
                        </section>
                        <section className="trash" >
                            <button onClick={() => handleClick(item)} > <img src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png" alt="trash" /> </button>
                        </section>
                    </div>
                ))
            }

            {
                totalCant()>0 && 
                <div>
                    <h2>Precio Total: ${priceTotal()} </h2>
                </div>    
            }

        </>
    );
};

export default CartView;

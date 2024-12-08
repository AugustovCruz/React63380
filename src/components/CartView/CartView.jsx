import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../CartView/CartView.css"
import { Link, useNavigate } from "react-router";


const CartView = () => {
    const { cart, emptyCart, priceTotal, deletProduct, setCart, totalCant } = useContext(CartContext);
    const navigate = useNavigate()

    const handleClick = (item) => {
        deletProduct(item)
    }

    const goBack = () => {
        navigate(-1)
    }

    const incrementProduct = (item) => {
        const updateCart = [...cart]
        const found = updateCart.find( (p) => p.id === item.id )
        if (found) {
            found.contador += 1
            setCart(updateCart)
        }
    }


    const decrementProduct = (item) => {
        const updateCart = [...cart]
        const found = updateCart.find( (p) => p.id === item.id )
        if (found) {
            found.contador -= 1
            setCart(updateCart)
        }
    }

    return (
        <>
            {
                totalCant() > 0 ?
                <>
                    <h2>Mi Compra</h2>
                    <div className="btn-cart">
                        <button onClick={goBack} > Atrás</button>
                        <button onClick={emptyCart} >Vaciar carrito</button>
                    </div>
                </> :
                <>
                    <h2>El carrito se encuentra vacio.</h2>
                    <button onClick={goBack} > Volver</button>
                </>

            }
            {
                cart.map((item)=>(
                    <div key={item.id} className="cart-view"  >
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <section>
                            <p>Precio por unidad: ${item.price} </p>
                            <p>Precio total: ${(item.price*item.contador).toFixed(2)} </p>
                        </section>
                        <section>
                            <p>Cantidad</p>
                            <article className="add-prod" >
                                <button onClick={()=>decrementProduct(item)} disabled={item.contador === 1}> - </button>
                                <span> {item.contador} </span>
                                <button onClick={ ()=> incrementProduct(item)} disabled ={ item.contador >= item.stock} > + </button>
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
                <>
                    <div>
                        <h2>Precio Total: ${priceTotal()} </h2>
                    </div>  
                    <button className="btn-buy" >
                        <Link to ="/Checkout">Comprar</Link>
                    </button>
                </>
                
            }

        </>
    );
};

export default CartView;

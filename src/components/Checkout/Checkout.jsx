import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router"
import "../Checkout/Checkout.css"


const Checkout = () => {

    const [orderId, setOrderId] = useState(null)
    const {cart, priceTotal, emptyCart } = useContext(CartContext)
    const {register, handleSubmit} = useForm()

    const buy = (data) => {
        const order = {
            client: data,
            products: cart,
            total: priceTotal(),
        }

        const buyRef = collection(db, "orders")

        addDoc(buyRef, order)
            .then ((doc) =>{
                setOrderId(doc.id)
                emptyCart()
            })
    }

    if (orderId) {
        return (
            <>
                <h1>Gracias por tu Compra</h1>
                <p>Tu numero de orden es : {orderId} </p>
                <button className="btn-follow" > 
                    <Link to='/'>Seguir Comprando</Link> 
                </button>
            </>
        )
    }


    return (
        <>
            <h1>Finalizar Compra</h1>
            <div className="container-form">
                <form className="form" onSubmit={handleSubmit(buy)}>

                    <input type="text" placeholder="Nombre" {...register("nombre")} required />
                    <input type="email" placeholder="Email" {...register("email")} required />
                    <input type="phone" placeholder="Teléfono" {...register("telefono")} required/>

                    <button className="enviar" type="submit"> Finalizar Comprar </button>
            </form>
            </div>
        </>

    )
}

export default Checkout
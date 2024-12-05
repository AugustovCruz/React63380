import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router"
export const CartWidget = () => {

  const {cart, totalCant, cantTotalCart} = useContext(CartContext)
  
  console.log(cart)
  
  return (
    <>
        <Link to='/Cart'> 🛒{totalCant() !== 0 && <span>{cantTotalCart()}</span>}</Link>
    </>
  )
}
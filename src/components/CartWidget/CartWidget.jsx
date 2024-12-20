import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router"

export const CartWidget = () => {

  const {totalCant, cantTotalCart} = useContext(CartContext)
  
  return (
    <>
        <Link to='/Cart'> 🛒{totalCant() !== 0 && <span>{cantTotalCart()}</span>}</Link>
    </>
  )
}
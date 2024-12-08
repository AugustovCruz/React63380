import { Link } from "react-router";
import { CartWidget } from "../CartWidget/CartWidget";
import "../Nav/Navbar.css"

function Nav() {
    return (
    <>
    <header className='nav'>
        <div className="nav-logo">
            <Link to='/'>LOGO</Link>
        </div>
        <div className="nav-enlaces">
            
                <li>
                    <Link to='/category/consolas'>Consolas</Link>
                </li>
                <li>
                    <Link to='/category/computacion'>Computación</Link>
                </li>
                <li>
                    <Link to='/category/deportes'>Deportes</Link>
                </li>
            
        </div>
        <div className="nav-carrito"> 
            <CartWidget/>
        </div>
    </header>
    </>
    )
}
export default Nav;
import { Link } from "react-router";
import { CartWidget } from "../CartWidget/CartWidget";
import "../Nav/navbar.css"

function Nav() {
    return (
    <>
    <header className='nav'>
        <div className="nav-logo">
            <Link to='/'>LOGO</Link>
        </div>
        <div className="nav-enlaces">
            
                <li>
                    <Link to='/category/MLA1144'>Consolas</Link>
                </li>
                <li>
                    <Link to='/category/MLA1648'>Computación</Link>
                </li>
                <li>
                    <Link to='/category/MLA1276'>Deportes</Link>
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
import "../Nav/navbar.css"

// import Button from 'react-bootstrap/Button';

function Nav() {
    return (
    <>
    <header className='nav'>
        <div className="nav-logo">
            <a href='/'>LOGO</a>
        </div>
        <div className="nav-enlaces">
            <ul>
                <a href='/'>Ropa</a>
            </ul>
            <ul>
                <a href='/'>Zapatillas</a>
            </ul>
            <ul>
                <a href='/'>Pelotas</a>
            </ul>
        </div>
        <div className="nav-carrito"> 
            <button variant="secondary"><a href="/">🛒1</a> </button>
        </div>
    </header>
    </>
    )
}
export default Nav;
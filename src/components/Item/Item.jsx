import React from 'react'
import "../Item/Item.css"
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <article className="CardItem" >
            <header className="Header" >
                <h2> {product.title} </h2>
            </header>
            <picture>
                <img src={product.thumbnail} alt={product.title} />
            </picture>
            
                <section>
                    <p className="Info" >
                        Precio: ${product.price} {product.currency_id}
                    </p>
                    <p className= "Info" >
                        Stock disponible: {product.available_quantity}
                    </p>
                </section>
            
            <footer className="Itemfooter">
                <Link to={ `/item/${product.id}`}><button>Ver detalle</button></Link>

            </footer>          
        </article>
    )
}

export default Item
import Item from '../Item/Item';
import "../ItemList/ItemList.css"

const ItemList = ({products}) => {
    
    if (!products) {
        return <p>No hay suficientes productos.</p>;
    }
    
    return (
        <div className='ListGroup'>
            {products.map( prod => <Item key={prod.id} product={prod} /> )}
        </div>
    )
}

export default ItemList
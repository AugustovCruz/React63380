import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

function ItemListContainer () {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams()

    const categoryId = category || "MLA1055"
    useEffect (()=> {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=20`)
            .then((resp) => resp.json())
            .then((datos) => {
                setProducts(datos.results)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error al obtener los productos:", error)
                setLoading(false)
            });
    },[category])

    return (

        <>
            {/* <ItemList products={products} /> */}
            {loading ? ( // Muestra un mensaje de carga
                <p>Cargando productos...</p>
            ) : 
            <>
                <ItemList  products={products}/>                
            </>
            }
        </>
    )
    }
    
export default ItemListContainer;
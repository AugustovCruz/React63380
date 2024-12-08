import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemListContainer () {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams() 
    
    useEffect (()=> {

        const productsRef = collection(db, "products")
        const categ = category ? query(productsRef, where("category", "==", category) ) : productsRef

        getDocs(categ)
            .then((resp)=> {

                setProducts(
                    resp.docs.map((doc)=> {
                        return {...doc.data(), id:doc.id}
                    })
                )
                setLoading(false)
            })
    },[category])


    // useEffect (()=> {
    //     console.log(products)
    // },[])

    return (

        <>
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
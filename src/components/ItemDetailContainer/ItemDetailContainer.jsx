import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import ItemCount  from "../ItemCount/ItemCount"
import "../ItemDetailContainer/ItemDetailContainer.css"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
//spinners
import { ClipLoader} from 'react-spinners'


const ItemDetailContainer = () => {
  
  const navigate = useNavigate()
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect (()=>{
    const productRef = doc(db, "products", id)
    getDoc(productRef)
      .then( (resp)=> {
        setProduct(
          { ...resp.data(), id: resp.id}
        )
        setLoading(false)
      })

  }, [id]) 

  if (loading) {
    return (
      <>
        <p>Cargando el detalle del producto</p>
        <ClipLoader/>
      </>
    )

  } 

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <section className='btn-back'>
        <button onClick={goBack} >Atrás</button>
      </section>
      <div className="container-detail">
        <img src={product.image} alt= {product.title} />
        <div className="info-product" >
          <p> Nombre:{product.title} </p>
          <p> Precio: {product.price} </p>
          <p> Stock: {product.stock} </p>
          <div className="botones">
            {product && <ItemCount prod={ product} /> }
          </div>
        </div>
      </div>
      <section className='go-cart'>
        
          <Link to='/Cart'>Ir al carrito</Link>
        
      </section>

    </>
  )
}

export default ItemDetailContainer
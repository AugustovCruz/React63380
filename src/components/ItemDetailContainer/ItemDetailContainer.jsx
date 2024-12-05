import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import ItemCount  from "../ItemCount/ItemCount"
import "../ItemDetailContainer/ItemDetailContainer.css"


const ItemDetailContainer = () => {

  const {id} = useParams()
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)

  useEffect (()=>{
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then(resp=> resp.json())
      .then(data=> {
        setProduct({...data})
        setLoading(false)
      })
  }, [id]) 

  if (loading) return <p>Cargando el detalle del producto . . .</p>
  console.log(product.title)
  console.log(product.available_quantity)

  const hardcodeo = {
    title:product.title,
    price: product.price,
    thumbnail:product.thumbnail,
  }

  return (
    <>
      <div className="container-detail">
        <img src={product.thumbnail} alt= {product.title} />
        <div className="info-product" >
          <p> Nombre:{product.title} </p>
          <p> Precio: {product.price} </p>
          <p> Stock: {product.available_quantity} </p>
          <div className="botones">
            {product && <ItemCount prod={ hardcodeo} /> }
          </div>
        </div>
      </div>
      <button className='go-cart'>
        <Link to='/Cart'>Ir al carrito</Link>
      </button>
    </>
  )
}

export default ItemDetailContainer
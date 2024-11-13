import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
        console.log(data)
        setProduct(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Cargando el detalle del producto . . .</p>

  return (
    <>
      <div className="container-detail">
        <img src={product.thumbnail} alt= {product.title} />
        <div className="info-product" >
          <p> Nombre:{product.title} </p>
          <p> Precio: {product.price} </p>
          <p> Stock: {product.available_quantity} </p>
        </div>
        <div className='botones'>
          <ItemCount/>
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer
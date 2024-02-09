import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
  return (
    <div className='productosContainer'>
      <Link to={`/detail/${producto.id}`}>
        <p><img className='imgProductsList' src={producto.img} alt={producto.nombre} /></p>
        <h2>{producto.nombre}</h2>
      </Link>
      <button className='agregarCarritoBtn'>Agregar al carrito</button>
    </div>
  )
}
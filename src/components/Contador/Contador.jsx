import React, { useState } from 'react'

export const Contador = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    cantidad >= stock ? cantidad : setCantidad(cantidad + 1);
  }

  const decrementar = () => {
    cantidad > 1 ? setCantidad(cantidad - 1) : cantidad;
  }

  const agregadoCarrito = () => {
    onAdd(cantidad, stock);
  }

  return (
    <div className='contadorContainer'>
      <div className="contador">
      <button className='sumarCantidad' onClick={incrementar}>+</button>
      <p>{cantidad}</p>
      <button className='restarCantidad' onClick={decrementar}>-</button>
      </div>
      <button className="agregarCarritoBtn" onClick={agregadoCarrito}>Agregar al carrito</button>
    </div>
  )
}

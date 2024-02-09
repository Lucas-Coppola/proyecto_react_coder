import React, { useState } from 'react'

export const Contador = ({stock, producto}) => {
    const [cantidad, setCantidad] = useState(1);

    const incrementar = () => {
        cantidad >= stock  ? cantidad : setCantidad(cantidad + 1);
    }

    const decrementar = () => {
        cantidad > 1 ? setCantidad(cantidad - 1) : cantidad;
    }

    const agregadoCarrito = () => {
      alert(`Has agregado ${cantidad} ${producto}`)
    }

  return (
    <div>
        <button onClick={incrementar}>+</button>
        <p>{cantidad}</p>
        <button onClick={decrementar}>-</button>
        <button className="agregarCarritoBtn" onClick={agregadoCarrito}>Agregar al carrito</button>
    </div>
  )
}

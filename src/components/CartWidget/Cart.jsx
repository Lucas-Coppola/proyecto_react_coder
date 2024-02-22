import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {

  const { carrito, eliminarProducto, vaciarCarrito, precioTotal } = useContext(CartContext);

  return (
    <>
      <p>Total: ${precioTotal()}</p>

      {carrito.length == 0 ? <div>Empty Cart</div> : <> {carrito.map((producto) => (
        <div className='containerProductos' key={producto.producto.id} producto={producto}>
          <p>
            <img className="imgProductsList" src={producto.producto.img} alt={producto.producto.nombre} />
          </p>
          <h2>{producto.producto.nombre}</h2>
          <p>${producto.producto.precio}</p>
          <p>{producto.cantidad}</p>
          <p>{producto.producto.descripcion}</p>
          <button onClick={() => eliminarProducto(producto.producto.id)} className="eliminarProducto">Eliminar Producto X</button>
        </div>
      ))} </>}

      {carrito.length != 0 && <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button> }
    </>

  )
}

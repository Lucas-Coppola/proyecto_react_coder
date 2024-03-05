import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

export const Cart = () => {

  const { carrito, eliminarProducto, vaciarCarrito, precioTotal } = useContext(CartContext);

  return (
    <>
      <div className="containerProductos">
        <p className='precioTotalCarrito'>Total: ${precioTotal()}</p>
        <div className="carritoProductosGrid">
          {carrito.length == 0 ? <p className='carritoVcio'>Tu carrito está vacío <i className="bi bi-emoji-frown"></i> </p> : <> {carrito.map((producto) => (
            <div className='carritoProducto' key={producto.producto.id} producto={producto}>
              <div className="productoDetail">
                <p>
                  <img className="imgProductsList" src={producto.producto.img} alt={producto.producto.nombre} />
                </p>
                <h2>{producto.producto.nombre}</h2>
                <p>${producto.producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>{producto.producto.descripcion}</p>
                <button onClick={() => eliminarProducto(producto.producto.id)} className="eliminarProducto">Eliminar Producto</button>
              </div>
            </div>
          ))} </>}
        </div>

        {carrito.length == 0 && <Link to={'/'}> <p className='inicioCarrito'> Volver al inicio </p> </Link>}

        {carrito.length != 0 && <button className='vaciarCarrito' onClick={() => vaciarCarrito()}> Vaciar Carrito </button>}

        {carrito.length != 0 && <Link to={'/checkout'}> <button className='vaciarCarrito'> Finalizar Compra </button> </Link>}
      </div>
    </>

  )
}

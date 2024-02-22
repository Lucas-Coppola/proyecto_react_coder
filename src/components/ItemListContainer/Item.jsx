import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { Contador } from '../Contador/Contador';

export const Item = ({ producto }) => {
  // const [carrito, setCarrito] = useState(false);
  // const { agregarCarrito } = useContext(CartContext);

  // const onAdd = (cantidad) => {

  //   setCarrito(true);

  //   agregarCarrito(producto, cantidad);
  // }
  return (
    <div className='productosContainer'>
      <Link to={`/detail/${producto.id}`}>
        <p><img className='imgProductsList' src={producto.img} alt={producto.nombre} /></p>
        <h2>{producto.nombre}</h2>
      </Link>
      {/* {carrito ? <Link to={'/cart'}>Ir al carrito</Link> : <Contador stock={producto.stock} onAdd={onAdd}/>} */}
    </div>
  )
}
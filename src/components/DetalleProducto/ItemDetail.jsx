import React, { useContext, useState } from 'react'
import { Contador } from '../Contador/Contador'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({ producto }) => {

    const [carrito, setCarrito] = useState(false);
    const { agregarCarrito } = useContext(CartContext);

    const onAdd = (cantidad) => {

        setCarrito(true);

        {producto.stock >= cantidad ? agregarCarrito(producto, cantidad) : alert('stock agotado')}
    }

    return (
        <div className='containerProductos'>
            <p>
                <img className="imgProductsList" src={producto.img} alt={producto.nombre} />
            </p>
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>{producto.stock}</p>
            <p>{producto.descripcion}</p>

            {carrito ? <Link to={'/cart'}>Ir al carrito</Link> : <Contador stock={producto.stock} onAdd={onAdd} />}
        </div>
    )
}

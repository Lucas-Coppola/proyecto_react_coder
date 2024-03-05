import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { Contador } from '../Contador/Contador';
import { Link } from 'react-router-dom';

export const Item = ({ producto }) => {

    const [carrito, setCarrito] = useState(false);
    const { agregarCarrito } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCarrito(true);

        agregarCarrito(producto, cantidad);
    }

    return (
        <div className='detalle'>
            <p>
                <img className="imgProductsList" src={producto.img} alt={producto.nombre} />
            </p>
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <p>{producto.descripcion}</p>

            {producto.stock == 0 ? <p className='productoAgotado'>EL PRODUCTO SE ENCUENTRA AGOTADO</p> : carrito ? <Link to={'/cart'}>Ir al carrito</Link> : <Contador stock={producto.stock} onAdd={onAdd} /> }

        </div>
    )
}
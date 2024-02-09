import React from 'react'
import { Contador } from '../Contador/Contador'

export const ItemDetail = ({ producto }) => {
    return (
        <div>
            <p>
                <img className="imgProductsList" src={producto.img} alt={producto.nombre} />
            </p>
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>{producto.stock}</p>
            <p>{producto.descripcion}</p>
            <Contador stock={producto.stock} producto={producto.nombre} />
        </div>
    )
}

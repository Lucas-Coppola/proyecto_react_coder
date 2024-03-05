import React from 'react'
import { Item } from './Item';

export const ItemDetail = ({ producto }) => {
    return (
        <div className='productoDetail'>
           <Item producto={producto}/>
        </div>
    )
}

import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <p className='saludoCoder'>{greeting}</p>
    </div>
  )
}

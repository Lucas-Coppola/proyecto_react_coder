import React, { useContext, useState } from 'react'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'


export const CartWidget = () => {

  const {cantidadTotal} = useContext(CartContext);

  return (
    <>
      <div className="carritoIcon">
        <i className="bi bi-cart-fill"></i>
        <span>{cantidadTotal()}</span>
      </div>
    </>
  )
}
import React from 'react'
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <>
    <div className="carritoIcon">
        <a href=""><i class="bi bi-cart-fill"></i></a>
        <span>0</span>
    </div>
    </>
  )
}
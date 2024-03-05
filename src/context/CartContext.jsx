import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto, cantidad) => {
        const productoAgregado = carrito.findIndex(p => p.producto.id == producto.id);

        if (productoAgregado == -1) {
            setCarrito([...carrito, { producto, cantidad }]);
        } else if (cantidad > producto.stock) {
            alert('el stock del producto está agotado');
        } else {
            const nuevoProducto = [...carrito];
            if (producto.stock > nuevoProducto[productoAgregado].cantidad) {
                nuevoProducto[productoAgregado].cantidad += cantidad;
                setCarrito(nuevoProducto);
            } else if (nuevoProducto[productoAgregado].cantidad >= producto.stock) {
                Swal.fire({
                    icon: 'error',
                    title: "Todo el stock en el carrito",
                });
            }
        }
    }

    const eliminarProducto = (Id) => {
        const productoEliminado = carrito.filter(p => p.producto.id !== Id);
        setCarrito(productoEliminado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const cantidadTotal = () => {
        const cantidadProductos = carrito.reduce((total, productos) => total + productos.cantidad, 0);
        return cantidadProductos
    }

    const precioTotal = () => {
        const precioCarrito = carrito.reduce((total, producto) => total + (producto.producto.precio * producto.cantidad), 0);
        return precioCarrito
    }

    return (
        <CartContext.Provider value={{
            carrito,
            agregarCarrito,
            eliminarProducto,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}
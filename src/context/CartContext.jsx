import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto, cantidad) => {
        const productoAgregado = carrito.findIndex(p => p.producto.id == producto.id);
        console.log(producto.stock);

        if(productoAgregado == -1) {
            const stockNuevo = producto.stock - cantidad;
            producto.stock = stockNuevo
            setCarrito([...carrito,{producto, cantidad}]);
        } else if(cantidad > producto.stock) {
            alert('el stock del producto está agotado');
        }else {
            const stockNuevo = producto.stock - cantidad;
            producto.stock = stockNuevo
            const nuevoProducto = [...carrito];
            nuevoProducto[productoAgregado].cantidad += cantidad;
            setCarrito(nuevoProducto);
        }

        console.log(producto.stock);
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

    return(
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
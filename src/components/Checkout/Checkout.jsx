import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import './Checkout.css'
import { db } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export const Checkout = () => {
    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    const enviarForumulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !email || !emailConfirm || !telefono) {
            setError('Por favor, complete todos sus datos para realizar la compra');
        } else if (email !== emailConfirm) {
            setError('La dirección de correo electrónico no coincide');
        }

        if (nombre && apellido && email && emailConfirm && telefono && email == emailConfirm && carrito.length != 0) {

            Swal.fire({
                icon: 'question',
                title: "Estás seguro que quieres finalizar la compra?",
                showCancelButton: true,
                confirmButtonText: "Si",
            }).then((result) => {
                if (result.isConfirmed) {
                    const orden = {
                        items: carrito.map((producto) => ({
                            id: producto.producto.id,
                            nombre: producto.producto.nombre,
                            cantidad: producto.cantidad
                        })),
                        total: precioTotal(),
                        fecha: new Date(),
                        nombre,
                        apellido,
                        telefono,
                        email
                    }

                    Promise.all(
                        orden.items.map(async (productoOrden) => {
                            const productoRef = doc(db, "productos", productoOrden.id);
                            const productoDoc = await getDoc(productoRef)
                            const stockActual = productoDoc.data().stock

                            await updateDoc(productoRef, {
                                stock: stockActual - productoOrden.cantidad
                            })
                        })
                    )
                        .then(() => {
                            addDoc(collection(db, "pedidos"), orden)
                                .then((docRef) => {
                                    setError(false);
                                    setOrdenId(docRef.id);
                                    Swal.fire({
                                        icon: "success",
                                        title: "Felicidades",
                                        text: `Su compra ha sido realizada con éxito!`
                                    });
                                    vaciarCarrito();
                                })
                                .catch((error) => {
                                    console.log(error)
                                    setError("Se produjo un error al crear la orden")
                                })

                        })
                        .catch((error) => {
                            console.log(error)
                            setError("No se puede actualizar el stock")
                        })
                }
            });
        }
    }

    return (
        <div className='containerProductos'>
            {!ordenId && <h1 className='tituloCheckout'> Ingrese sus datos: </h1>}

            <form onSubmit={enviarForumulario}>
                <div className="checkoutProductoContainer">
                    {carrito.map((producto) => (
                        <div key={producto.producto.id} className='checkoutProducto'>
                            <img src={producto.producto.img} alt={producto.producto.img} />
                            <p>{producto.producto.nombre}</p>
                            <p> x {producto.cantidad}</p>
                        </div>
                    ))}
                </div>

                {ordenId ? <p className='orderId'>¡Gracias por tu compra! Tu número de orden es: {ordenId}</p> : <div>
                    <div>
                        <label htmlFor="Nombre">Nombre:</label>
                        <input name="Nombre" type='text' onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Apellido">Apellido:</label>
                        <input name="Apellido" type='text' onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Telefono">Teléfono:</label>
                        <input name="Teléfono" type='number' onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Email">Email:</label>
                        <input name="Email" type='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="EmailConfirmacion">Email Confirmación:</label>
                        <input name="EmailConfirmacion" type='email' onChange={(e) => setEmailConfirm(e.target.value)} />
                    </div>

                    <button className='btnFinalizar' type='submit'>Realizar compra</button>

                    {error && <p className='errorMensaje'>{error}</p>}

                </div>}

            </form>
        </div>
    )
}

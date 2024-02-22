import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

export const DetalleProducto = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {

    const dataProductos = async() => {
      try {
        const response = await fetch('/productos.json');
        const data = await response.json();
        const products = data.find((p) => p.id == id);
        setProducto(products);
      }catch(error) {
        console.log(`Error al obtener los productos ${error}`);
      }
    }

    dataProductos();
  }, [])

  return (
    <div className="productosContainer">
        <ItemDetail producto={producto} stock={producto.stock}/>
    </div>
  );
  
};

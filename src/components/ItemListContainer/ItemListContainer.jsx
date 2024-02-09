import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const dataProductos = async() => {
      try {
        const response = await fetch('./productos.json');
        const data = await response.json();
        setProductos(data);
      }catch(error) {
        console.log(`Error al obtener los productos ${error}`);
      }
    }

    dataProductos();
  }, [])

  return (
    <>
    
    <div className='containerProductos'>
        {productos.length == 0 ? <h2>Cargando productos...</h2> : <ItemList productos={productos}/>}
    </div>
    </>
  )
}

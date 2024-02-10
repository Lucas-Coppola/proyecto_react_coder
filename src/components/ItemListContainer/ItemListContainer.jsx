import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {

    const dataProductos = async() => {
      try {
        const response = await fetch('/productos.json');
        const data = await response.json();
        if(categoryId) {
          const productosFiltrados = data.filter((p) => p.categoria == categoryId);
          setProductos(productosFiltrados);
        } else {
          setProductos(data);
        }
      }catch(error) {
        console.log(`Error al obtener los productos ${error}`);
      }
    }

    dataProductos();
  }, [categoryId])

  return (
    <>
    <div className='containerProductos'>
        {productos.length == 0 ? <h2>Cargando productos...</h2> : <ItemList productos={productos}/>}
    </div>
    </>
  )
}

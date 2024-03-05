import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {

  const {categoryId} = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    

    const coleccionProductos = collection(db, 'productos');

    const q = categoryId ? query(coleccionProductos, where('categoria', '==', `${categoryId}`)) : coleccionProductos;

    getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => (
          {id:doc.id,...doc.data()}
        )))
    })
  }, [categoryId]);

  return (
    <>
    <div className='containerProductos'>
        {productos.length == 0 ? <h2>Cargando productos...</h2> : <ItemList productos={productos}/>}
    </div>
    </>
  )
}

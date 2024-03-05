import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const DetalleProducto = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const productRef = doc(db, 'productos', `${id}`);

    getDoc(productRef).then((snapshot) => {
        if(snapshot.exists) {
          setProducto({id: snapshot.id,...snapshot.data()})
        }
    })
  }, []);

  return (
    <div className="containerProductos">
        <ItemDetail producto={producto}/>
    </div>
  );
  
};

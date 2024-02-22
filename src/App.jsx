import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DetalleProducto } from './components/DetalleProducto/DetalleProducto'
import { CartProvider } from './context/CartContext'
import { Cart } from './components/CartWidget/Cart'
// import { getFirestore, doc, getDoc } from 'firebase/firestore'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getFirestore, query, where } from 'firebase/firestore'

function App() {

  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   const db = getFirestore();

  //   const coleccionProductos = collection(db, 'productos');

  //   getDocs(coleccionProductos).then((snapshot) => {
  //       setProduct(snapshot.docs.map((doc) => (
  //         {id:doc.id,...doc.data()}
  //       )))
  //   })
  // }, []);

  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />
          <Route path='/detail/:id' element={<DetalleProducto/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartProvider>
    </>
  )
}

export default App

import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import { DetalleProducto } from './components/DetalleProducto/DetalleProducto'
import { CartProvider } from './context/CartContext'
import { Cart } from './components/CartWidget/Cart'
import { Checkout } from './components/Checkout/Checkout'

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />
          <Route path='/detail/:id' element={<DetalleProducto/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </CartProvider>
    </>
  )
}

export default App

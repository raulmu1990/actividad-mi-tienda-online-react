import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from './vistas/home/Home.jsx'
import { Productos } from './vistas/productos/Productos.jsx'
import { Carrito } from './vistas/carrito/Carrito.jsx'
import { Checkout } from './vistas/checkout/Checkout.jsx'
import { productos } from './data/productos.js'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home productos={productos} />} />
          <Route path="/productos" element={<Productos productos={productos} />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

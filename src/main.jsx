import { createRoot } from 'react-dom/client'
import { CarritoProvider } from './context/carrito.jsx'
import './assets/estilos/variables.css'
import './assets/estilos/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CarritoProvider>
    <App />
  </CarritoProvider>,
)

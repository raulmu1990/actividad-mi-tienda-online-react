import { useState } from 'react'
import { SelectorCantidad } from '../selectorCantidad/SelectorCantidad.jsx'
import { BotonCarrito } from '../botonCarrito/BotonCarrito.jsx'
import './productoTarjeta.css'

export function ProductoTarjeta({id, urlImagen, nombre, precio, estadoCarrito, cantidadCarrito, agregarCarrito}) {

   const [cantidad, setCantidad] = useState(cantidadCarrito)

    const cambiarCarrito = (estado) => {
            agregarCarrito(id, estado, cantidad)
    }



    return (
        <li className='tarjeta' key={id}>
            <img className='tarjeta__img' src={urlImagen} alt={nombre} />
            <div className='tarjeta__info'>
                <header className='info__encabezado'>
                    <div className='encabezado__precio'>
                        ${precio}
                    </div>
                    
                </header>
                <strong className='info__nombre'>
                    {nombre}
                </strong>
                <footer className='info__footer'>
                    <BotonCarrito estadoCarrito={estadoCarrito} cambiarCarrito={cambiarCarrito} />
                    <SelectorCantidad cantidad={cantidad} setCantidad={setCantidad} estado={estadoCarrito} />
                </footer>
            </div>
        </li>
    )
}
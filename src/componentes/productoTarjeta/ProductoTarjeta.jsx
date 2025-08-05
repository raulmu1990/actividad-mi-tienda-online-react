import { useContext, useState } from 'react'
import { CarritoContext } from '../../context/carrito.jsx'
import { SelectorCantidad } from '../selectorCantidad/SelectorCantidad.jsx'
import { BotonCarrito } from '../botonCarrito/BotonCarrito.jsx'
import './productoTarjeta.css'

export function ProductoTarjeta({id, urlImagen, nombre, precio}) {

    const { carrito, agregarAlCarrito, removerDelCarrito, cambiarCantidad } = useContext(CarritoContext)
    
    const productoEnCarrito = carrito.find(producto => producto.id === id)
    const [cantidad, setCantidad] = useState(productoEnCarrito?.cantidad ?? 1)

    const estadoCarrito = carrito.some(producto => producto.id === id)

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
                    <BotonCarrito 
                        id={id}
                        nombre={nombre}
                        precio={precio}
                        cantidad={cantidad} 
                        urlImagen={urlImagen}
                        estadoCarrito={estadoCarrito} 
                        agregarAlCarrito={agregarAlCarrito} 
                        removerDelCarrito={removerDelCarrito}
                    />
                    <SelectorCantidad
                        id={id}
                        estadoCarrito={estadoCarrito} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad}
                        cambiarCantidad={cambiarCantidad} 
                    />
                </footer>
            </div>
        </li>
    )
}
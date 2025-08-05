import { useState } from 'react'
import { Carrito } from '../Icons.jsx'
import './botonCarrito.css'

export function BotonCarrito({id, nombre, precio, cantidad, urlImagen, estadoCarrito, agregarAlCarrito, removerDelCarrito}) {

    const [enCarrito, setEnCarrito] = useState(estadoCarrito)
    const colorIcono = enCarrito ? '#ffffff' : '#1d1818ff'

    const handleCart = (event) => {
        const estaEnCarrito = event.target.checked
        setEnCarrito(estaEnCarrito)
        if (estaEnCarrito) {
            agregarAlCarrito(id, nombre, precio, cantidad, urlImagen)
        } else {
            removerDelCarrito(id)
        }
    }

    return (
        <>
            <input defaultChecked={enCarrito} onChange={handleCart} className='carrito__check' id={`producto_${id}`} type='checkbox' hidden />
            <label className='carrito__texto' htmlFor={`producto_${id}`}>
                <button type='button' className='btnCarrito'>
                            {enCarrito ? 'Agregado' : 'Agregar'}
                            <Carrito size='20' color={colorIcono} />
                </button>
            </label>
        </>
    )
}
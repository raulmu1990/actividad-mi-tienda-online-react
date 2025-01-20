import { useState, useId } from 'react'
import { Carrito } from '../Icons.jsx'
import './botonCarrito.css'

export function BotonCarrito({estadoCarrito, cambiarCarrito}) {
    const botonId = useId()

    const [agregado, setAgregado] = useState(estadoCarrito)
    const enCarrito = agregado ? 'Agregado' : 'Agregar'
    const colorIcono = agregado ? '#ffffff' : '#4d4d4d'

    const handleChange = () => {
        setAgregado(!agregado)
        cambiarCarrito(!agregado)
    }

    return (
        <button type='button' className='carrito'>
            <input defaultChecked={agregado} onChange={handleChange} className='carrito__check' id={botonId} type='checkbox' hidden />
            <label className='carrito__texto' htmlFor={botonId}>
                    {enCarrito}
                    <Carrito size='20' color={colorIcono} />
            </label>
        </button>
    )
}
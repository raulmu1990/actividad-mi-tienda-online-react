import { useState } from 'react'
import { IconoMenos, IconoMas } from '../Icons.jsx'
import './selectorCantidad.css'

export function SelectorCantidad({cantidad, setCantidad, estado}) {

    const [cantidadArticulos, setCantidadArticulos] = useState(cantidad)

    const cambiarCantidad = (event) => {
        if (event.target.id === 'menos') {
            setCantidadArticulos(cantidadArticulos - 1 || 1)
            setCantidad(cantidadArticulos - 1 || 1)
        } else if (event.target.id === 'mas') {
            setCantidadArticulos(cantidadArticulos + 1)
            setCantidad(cantidadArticulos + 1)
        }
    }

    return (
        <div className='selector'>
            <button id='menos' onClick={cambiarCantidad} className='selector__boton' disabled={estado} >
                <IconoMenos size='16' color='#4d4d4d' />
            </button>
            <input 
                className='selector__cantidad' 
                type='number' 
                value={cantidadArticulos} 
                min='1'
                readOnly 
            />
            <button id='mas' onClick={cambiarCantidad} className='selector__boton' disabled={estado}>
                <IconoMas size='16' color='#4d4d4d' />
            </button>
        </div>
    )
}
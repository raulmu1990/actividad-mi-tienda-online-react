import { IconoCerrar } from '../Icons.jsx'
import { useState } from 'react'
import './barraTarjeta.css'

export function BarraTarjeta({id, imagen, nombre, precio, cantidad, agregarCarrito}) {

    return (
        <li className='tarjetaCarrito'>
            <img 
                className='tarjetaCarrito__img'
                src={imagen} 
                alt={nombre} 
            />
            <strong className='tarjetaCarrito__nombre'>
                {nombre}
            </strong>
            <small className='tarjetaCarrito__precio'>
                ${precio}
            </small>
            <input className='tarjetaCarrito__cantidad' type='number' value={cantidad} readOnly />
            <button onClick={() => agregarCarrito(id, false, cantidad)} className='tarjetaCarrito__cerrar'>
                <IconoCerrar size='24' color='#4d4d4d' />
            </button>
        </li>
    )
}
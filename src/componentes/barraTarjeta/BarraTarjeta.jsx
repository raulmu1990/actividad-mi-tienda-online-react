import { IconoCerrar } from '../Icons.jsx'
import './barraTarjeta.css'

export function BarraTarjeta({id, imagen, nombre, precio, cantidad, removerDelCarrito}) {

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
            <label>
                Cantidad:
                <input className='tarjetaCarrito__cantidad' type='number' value={cantidad} readOnly />
            </label>
            <button onClick={() => removerDelCarrito(id)} className='tarjetaCarrito__cerrar'>
                <IconoCerrar size='24' color='#4d4d4d' />
            </button>
        </li>
    )
}
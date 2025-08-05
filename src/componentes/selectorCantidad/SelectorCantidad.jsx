import { IconoMenos, IconoMas } from '../Icons.jsx'
import './selectorCantidad.css'

export function SelectorCantidad({id, estadoCarrito, cantidad, setCantidad, cambiarCantidad}) {

    const handleCantidad = (nuevaCantidad) => {
        if (nuevaCantidad < 1) {
            setCantidad(1)
            return
        }
        setCantidad(nuevaCantidad)
        if (estadoCarrito) cambiarCantidad(id, nuevaCantidad)
    }

    return (
        <div className='selector'>
            <button id='menos' onClick={() => handleCantidad(cantidad - 1)} className='selector__boton'>
                <IconoMenos size='16' color='#4d4d4d' />
            </button>
            <input 
                className='selector__cantidad' 
                type='number' 
                value={cantidad} 
                min='1'
                readOnly 
            />
            <button id='mas' onClick={() => handleCantidad(cantidad + 1)} className='selector__boton'>
                <IconoMas size='16' color='#4d4d4d' />
            </button>
        </div>
    )
}
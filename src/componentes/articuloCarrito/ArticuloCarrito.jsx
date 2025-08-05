import { IconoCerrar } from '../Icons.jsx'
import './articuloCarrito.css'

export function ArticuloCarrito({id, imagen, nombre, precio, cantidad, removerDelCarrito}) {

    const handleClick = () => {
        removerDelCarrito(id)
    }

    return (
        <li className='articulo'>
            <div className='articulo__img'>
                <img className='img__miniatura' src={imagen} alt={nombre} />
            </div>
            <div className='articulo__nombre'>
                <strong className='nombre__producto'>{nombre}</strong>
            </div>
            <div className='articulo__cantidad'>
                <small className='cantidad__texto'>Cantidad</small>
                <input className='cantidad__input' type='number' value={cantidad} readOnly />
            </div>
            <div className='articulo__precio'>
                <small className='precio__total'>${precio}</small>
            </div>
            <div className='articulo__cerrar'>
                <button className='cerrar__boton' onClick={handleClick}>
                    <IconoCerrar size='32' color='#4d4d4d' />
                </button>
            </div>
        </li>
    )
}
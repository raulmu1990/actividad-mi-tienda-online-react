import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { IconoCerrar, Carrito } from '../Icons.jsx'
import { Boton } from '../boton/Boton.jsx'
import { BarraTarjeta } from '../../componentes/barraTarjeta/BarraTarjeta.jsx'
import { CarritoContext } from '../../context/carrito.jsx'
import './barraLateral.css'

export function BarraLateral() {

    const navigate = useNavigate()

    const verCarrito = () => {
        navigate('/carrito')
    }

    const {carrito, removerDelCarrito} = useContext(CarritoContext)

    const listaCarrito = carrito.map((producto) => {
        return (
            <BarraTarjeta
                key={producto.id} 
                id={producto.id} 
                imagen={producto.urlImagen} 
                nombre={producto.nombre}
                precio={producto.precio}
                cantidad={producto.cantidad}
                removerDelCarrito={removerDelCarrito}
            />
        )
    })

    const [visible, setVisible] = useState(false)

    const menuVisible = visible ? 'carritoBarra--visible' : 'carritoBarra'

    return (
        <>
            <aside className={menuVisible}>
                <header className='carritoBarra__encabezado'>
                    <strong className='encabezado__titulo'>
                        Carrito de compras
                    </strong>
                    <button onClick={() => setVisible(false)} className='encabezado__cerrar'>
                        <IconoCerrar size='24' color='#4d4d4d' />
                    </button>
                </header>
                <section className='carritoBarra__contenido'>
                    <ul className='contenido__lista' role='list'>
                        {listaCarrito}
                    </ul>
                </section>
                <footer className='carritoBarra__footer'>
                    <Boton texto='Ir al carrito' path={verCarrito} />
                </footer>
                <button onClick={() => setVisible(true)} className='carritoBarra__boton'>
                    <Carrito size='32' color='#4d4d4d' />
                    <span className='boton__cantidad'>{carrito.length}</span>
                </button>
            </aside>
        </>
        
    )
}
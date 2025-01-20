import { useState } from 'react'
import { useNavigate } from 'react-router'
import { IconoCerrar, Carrito } from '../Icons.jsx'
import { Boton } from '../boton/Boton.jsx'
import { BarraTarjeta } from '../../componentes/barraTarjeta/BarraTarjeta.jsx'
import { useCarrito } from '../../hooks/useCarrito.js'
import './barraLateral.css'

export function BarraLateral() {

    const navigate = useNavigate()

    const verCarrito = () => {
        navigate('/carrito')
    }

    const { carrito, agregarCarrito } = useCarrito()

    console.log(carrito)

    const listaCarrito = carrito.map((producto) => {
        return (
            <BarraTarjeta
                key={producto.id} 
                id={producto.id} 
                imagen={producto.imagen} 
                nombre={producto.nombre}
                precio={producto.precio}
                cantidad={producto.cantidad}
                agregarCarrito={agregarCarrito}
            />
        )
    })

    const [visible, setVisible] = useState(false)
    const [cantidadCarrito] = useState(carrito)

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
import { useContext } from 'react'
import { CarritoContext } from '../../context/carrito.jsx'
import { ArticuloCarrito } from '../articuloCarrito/ArticuloCarrito.jsx'
import { Boton } from '../boton/Boton.jsx'
import { useNavigate } from 'react-router'
import './tablaCarrito.css'

export function TablaCarrito() {

    const navigate = useNavigate()

    const irACheckout = () => {
        navigate('/checkout')
        window.scrollTo(0, 0)
    }

    const { carrito, removerDelCarrito, subTotal, impuesto, total } = useContext(CarritoContext)    

    const productosCarrito = carrito.map((producto) => {
        return (
            <ArticuloCarrito
                id={producto.id}
                key={producto.id} 
                imagen={producto.urlImagen} 
                nombre={producto.nombre} 
                precio={producto.precio*producto.cantidad}
                cantidad={producto.cantidad}
                removerDelCarrito={removerDelCarrito}
            />
        )
    })

    return (
        <>
            <section className='carrito'>
                <div className='carrito__articulos'>
                    <ul className='articulos__contenido' role='list'>
                        {
                            carrito.length > 0 
                                ? productosCarrito 
                                : (<p>No hay productos en carrito</p>)
                        }
                    </ul>
                </div>
                <div className='carrito__sumario'>
                    <strong className='sumario__titulo'>
                        Sumario
                    </strong>
                    <div className='sumario__fila'>
                        <p className='fila__texto'>
                            Subtotal {carrito.length} productos
                        </p>
                        <output className='fila__cantidad'>
                            {carrito.length > 0 ? `$${subTotal}` : 'N/A'}
                        </output>
                    </div>
                    <div className='sumario__fila'>
                        <p className='fila__texto'>
                            Cargo por envio
                        </p>
                        <output className='fila__cantidad'>
                            {carrito.length > 0 ? `$${8}` : 'N/A'}
                        </output>
                    </div>
                    <div className='sumario__fila'>
                        <p className='fila__texto'>
                            Impuestos 5%
                        </p>
                        <output className='fila__cantidad'>
                            {carrito.length > 0 ? `$${impuesto}` : 'N/A'}
                        </output>
                    </div>
                    <hr/>
                    <div className='sumario__total'>
                        <p className='total__texto'>
                            Total
                        </p>
                        <output className='total__cantidad'>
                            {carrito.length > 0 ? `$${total + 8}` : 'N/A'}
                        </output>
                    </div>
                    <Boton texto='Ir al Checkout' path={irACheckout} />
                </div>
            </section>
        </>
        
    )
}
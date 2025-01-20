import { ArticuloCarrito } from '../articuloCarrito/ArticuloCarrito.jsx'
import { Boton } from '../boton/Boton.jsx'
import { useCarrito } from '../../hooks/useCarrito.js'
import { useNavigate } from 'react-router'
import './tablaCarrito.css'

export function TablaCarrito() {

    const navigate = useNavigate()

    const irACheckout = () => {
        navigate('/checkout')
    }

    const { carrito, agregarCarrito } = useCarrito()

    const productosCarrito = carrito.map((producto) => {
        return (
            <ArticuloCarrito
                id={producto.id}
                key={producto.id} 
                imagen={producto.imagen} 
                nombre={producto.nombre} 
                precio={producto.precio*producto.cantidad}
                cantidad={producto.cantidad}
                agregarCarrito={agregarCarrito}
            />
        )
    })

    const subTotal = carrito.reduce((total, producto) => total + producto.precio*producto.cantidad, 0)

    return (
        <>
            <section className='carrito'>
                <div className='carrito__articulos'>
                    <ul className='articulos__contenido' role='list'>
                        {productosCarrito}
                    </ul>
                </div>
                <section className='carrito__sumario'>
                    <strong className='sumario__titulo'>
                        Sumario
                    </strong>
                    <div className='sumario__fila'>
                        <p className='fila__texto'>
                            Subtotal {carrito.length} productos
                        </p>
                        <output className='fila__cantidad'>
                            ${subTotal}
                        </output>
                    </div>
                    <div className='sumario__fila'>
                        <p className='fila__texto'>
                            Cargo por envio
                        </p>
                        <output className='fila__cantidad'>
                            $8
                        </output>
                    </div>
                    <div className='sumario__fila'>
                        <p className='fila__texto'>
                            Impuestos 5%
                        </p>
                        <output className='fila__cantidad'>
                            ${subTotal*0.05}
                        </output>
                    </div>
                    <hr/>
                    <div className='sumario__total'>
                        <p className='total__texto'>
                            Total
                        </p>
                        <output className='total__cantidad'>
                            ${subTotal + 8 + subTotal*0.05}
                        </output>
                    </div>
                    <Boton texto='Ir al Checkout' path={irACheckout} />
                </section>
            </section>
            
        </>
        
    )
}
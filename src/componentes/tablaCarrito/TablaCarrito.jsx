import { useContext } from 'react'
import { CarritoContext } from '../../context/carrito.jsx'
import { ArticuloCarrito } from '../articuloCarrito/ArticuloCarrito.jsx'
import { SumarioCarrito } from '../sumarioCarrito/SumarioCarrito.jsx'
import './tablaCarrito.css'

export function TablaCarrito() {

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
                {
                    carrito.length > 0 && (
                        <SumarioCarrito 
                            carrito={carrito} 
                            subTotal={subTotal} 
                            impuesto={impuesto} 
                            total={total} 
                        />
                    )
                }
                
            </section>
        </>
        
    )
}
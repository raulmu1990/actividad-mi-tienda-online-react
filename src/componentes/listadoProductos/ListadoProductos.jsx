import { ProductoTarjeta } from '../productoTarjeta/ProductoTarjeta.jsx'
import { useCarrito } from '../../hooks/useCarrito.js'
import './listadoProductos.css'

export function ListadoProductos({children, numero, productos}) {

    const { articulos, carrito, agregarCarrito} = useCarrito()

    const productosLista = productos.map((producto, indice) => {
        return (
                <ProductoTarjeta
                    id={producto.id}
                    key={producto.id}
                    urlImagen={producto.imagen} 
                    nombre={producto.nombre} 
                    precio={producto.precio}
                    estadoCarrito={articulos[indice].estadoCarrito}
                    cantidadCarrito={articulos[indice].cantidad}
                    agregarCarrito={agregarCarrito}
                />
        )
    })

    return (
        <section className='productos'>
            <h2 className='productos__titulo'>Explora nuestros productos</h2>
            {children}
            <ul className='productos__lista' role='list'>
                {productosLista.slice(0, numero)}
            </ul>
        </section>
    )
}
import { ProductoTarjeta } from '../productoTarjeta/ProductoTarjeta.jsx'
import { getImageURL } from '../../utils/imagen-util.js'
import './listadoProductos.css'

export function ListadoProductos({children, numero, productos}) {

    const productosLista = productos?.map((producto) => {
        return (
                <ProductoTarjeta
                    id={producto.id}
                    key={producto.id}
                    urlImagen={getImageURL(producto.imagen)} 
                    nombre={producto.nombre} 
                    precio={producto.precio}
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
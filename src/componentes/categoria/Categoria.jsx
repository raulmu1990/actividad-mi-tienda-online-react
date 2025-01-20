import './categoria.css'
import { productos } from '../../data/productos.js'

export function Categoria({nombre, genero}) {

    const producto = productos.find((elemento) => {
        return elemento.categoria === nombre && elemento.genero === genero
    })

    return (
        <article className='categoria'>
            <img 
                className='categoria__imagen' 
                src={producto.imagen} 
                alt='Imagen destacada para la categoria' 
            />
            <div className='categoria__texto'>
                <small className='texto__genero'>{genero}</small>
                <strong className='texto__nombre'>{nombre}</strong>
            </div>
        </article>
    )
}
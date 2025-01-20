import { Categoria } from '../categoria/Categoria.jsx'
import { categorias } from '../../data/categorias.js'
import './listadoCategorias.css'

export function ListadoCategorias() {

    const listadoCategorias = categorias.map((categoria) => {
        return (
            <li className='listado__item' key={categoria.id}>
                <Categoria 
                    nombre={categoria.nombre} 
                    genero={categoria.genero} 
                />
            </li>
        )
    })

    return (
        <section className='categorias'>
            <h2 className='categorias__titulo'>Nuestras categorías</h2>
            <ul className='categorias__listado' role='list'>
                {listadoCategorias}
            </ul>
        </section>
    )
}
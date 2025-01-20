import './filtros.css'

export function Filtros({cambiarFiltros}) {

    const filtrarCategoria = (event) => {
        cambiarFiltros(estadoPrevio => ({
            ...estadoPrevio,
            categoria: event.target.value
        }))
    }

    const filtrarGenero = (event) => {
        cambiarFiltros(estadoPrevio => ({
            ...estadoPrevio,
            genero: event.target.value
        }))
    }

    return (
        <header className='filtros'>
            <div className='filtros__genero'>
                <label className='genero__etiqueta' htmlFor='genero'>Filtrar por genero:</label>
                <select onChange={filtrarGenero} className='genero__seleccion' id='genero' defaultValue='ambos'>
                    <option value='ambos'>Ambos</option>
                    <option value='caballeros'>Caballeros</option>
                    <option value='damas'>Damas</option>
                </select>
            </div>
            <div className='filtros__categoria'>
                <label className='categoria__etiqueta' htmlFor='categoria'>Filtrar por categoria:</label>
                <select onChange={filtrarCategoria} className='categoria__seleccion' id='categoria' defaultValue='todas'>
                    <option value='todas'>Todas las categorias</option>
                    <option value='camisetas'>Camisetas</option>
                    <option value='camisas'>Camisas</option>
                    <option value='jeans'>Jeans</option>
                    <option value='blusas'>Blusas</option>
                </select>
            </div>
        </header>
    )
}
import { useState } from 'react'

export const useFiltros = () => {
        const [filtros, setFiltros] = useState({
            categoria: 'todas',
            genero: 'ambos'
        })
    
        const filtrarProductos = (productos) => {
            return productos.filter((producto) => {
                return (producto.categoria === filtros.categoria || filtros.categoria === 'todas') && 
                        (producto.genero === filtros.genero || filtros.genero === 'ambos')
            })
        }

        return { setFiltros, filtrarProductos }
}
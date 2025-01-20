import { productos } from '../data/productos.js'
import { createContext, useState } from 'react'

export const CarritoContext = createContext()

export function CarritoProvider({children}) {

    const productosCarrito = productos.map((producto) => {
        return (
            {
                ...producto,
                estadoCarrito: false,
                cantidad: 1
            }
        )
    })

    const [articulos, setArticulos] = useState(productosCarrito)

    const filtrarCarrito = (articulos) => {
        return articulos.filter(articulo => {
           return articulo.estadoCarrito === true
        })
    }
    const [carrito, setCarrito] = useState(filtrarCarrito(articulos))

    return (
        <CarritoContext.Provider value={{
            articulos,
            setArticulos,
            carrito,
            setCarrito,
            filtrarCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    )
}
import { createContext } from 'react'
import { useCarrito } from '../hooks/useCarrito.js'

export const CarritoContext = createContext()

export function CarritoProvider({children}) {

    const { carrito, agregarAlCarrito, removerDelCarrito, cambiarCantidad } = useCarrito()

    return (
        <CarritoContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removerDelCarrito,
            cambiarCantidad
        }}>
            {children}
        </CarritoContext.Provider>
    )
}
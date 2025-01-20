import { useContext } from 'react'
import {CarritoContext } from '../context/carrito.jsx'

export function useCarrito() {

    const { articulos, setArticulos, carrito, setCarrito, filtrarCarrito } = useContext(CarritoContext)

    const agregarCarrito = (identificador, estado, cantidad) => {
        const carritoClon = structuredClone(articulos)
        const indice = carritoClon.findIndex((producto) => producto.id === identificador)

        carritoClon[indice].estadoCarrito = estado
        carritoClon[indice].cantidad = cantidad
        setArticulos(carritoClon)
        setCarrito(filtrarCarrito(carritoClon))
    }

    return {articulos, carrito, agregarCarrito}
}
import { useState } from 'react'

export function useCarrito() {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (id, nombre, precio, cantidad, urlImagen) => {
        setCarrito([
            ...carrito,
            {
                id: id,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                urlImagen: urlImagen
            }
        ])
    }

    const removerDelCarrito = (id) => {
        const carritoResto = carrito.filter(producto => producto.id !== id)
        setCarrito(carritoResto)
    }

    const cambiarCantidad = (id, nuevaCantidad) => {
        const carritoClon = structuredClone(carrito)
        const productoIndice = carritoClon.findIndex(producto => producto.id === id)

        carritoClon[productoIndice].cantidad = nuevaCantidad
        setCarrito(carritoClon)
    }

    const subTotal = carrito.reduce((total, producto) => {
        return total + producto.precio*producto.cantidad
    }, 0)

    const impuesto = (subTotal * 0.05).toFixed(2)
    const total = subTotal + parseFloat(impuesto)

    return { carrito, subTotal, impuesto, total, agregarAlCarrito, removerDelCarrito, cambiarCantidad }
}
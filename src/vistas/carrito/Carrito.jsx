import { Header } from '../../componentes/header/Header.jsx'
import { TablaCarrito } from '../../componentes/tablaCarrito/TablaCarrito.jsx'
import { Footer } from '../../componentes/footer/Footer.jsx'
import './carrito.css'

export function Carrito() {
    return (
        <>
            <Header />
            <main className='principal'>
                <h2 className='principal__titulo'>Carrito de compras</h2>
                <TablaCarrito />
            </main>
            <Footer />
        </>
    )
}
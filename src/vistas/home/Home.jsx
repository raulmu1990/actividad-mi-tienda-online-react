import { Header } from '../../componentes/header/Header.jsx'
import { BarraLateral } from '../../componentes/barraLateral/BarraLateral.jsx'
import { Hero } from '../../componentes/hero/Hero.jsx'
import { ListadoProductos } from '../../componentes/listadoProductos/ListadoProductos.jsx'
import { ListadoCategorias } from '../../componentes/listadoCategorias/ListadoCategorias.jsx'
import { Footer } from '../../componentes/footer/Footer.jsx'
import './home.css'

export function Home({productos}) {
    return (
        <>
            <Header />
            <BarraLateral />
            <main className='contenedor'>
                <Hero />
                <ListadoProductos numero={12} productos={productos} />
                <ListadoCategorias />
            </main>
            <Footer />
        </>
    )
}
import { ListadoProductos } from '../../componentes/listadoProductos/ListadoProductos.jsx'
import { Header } from '../../componentes/header/Header.jsx'
import { BarraLateral } from '../../componentes/barraLateral/BarraLateral.jsx'
import { Footer } from '../../componentes/footer/Footer.jsx'
import { Filtros } from '../../componentes/filtros/Filtros.jsx'
import { useFiltros } from '../../hooks/useFiltros.js'

export function Productos({productos}) {

    const { setFiltros, filtrarProductos } = useFiltros()

    const productosFiltrados = filtrarProductos(productos)

    return (
        <>
            <Header />
            <BarraLateral />
            <main>
                <ListadoProductos numero={12} productos={productosFiltrados} >
                    <Filtros cambiarFiltros={setFiltros} />
                </ListadoProductos>
            </main>
            <Footer />
        </>
    )
}
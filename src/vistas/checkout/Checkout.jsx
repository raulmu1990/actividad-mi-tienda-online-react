import { Header } from '../../componentes/header/Header.jsx'
import { Formulario } from '../../componentes/formulario/Formulario.jsx'
import { Footer } from '../../componentes/footer/Footer.jsx'
import './checkout.css'

export function Checkout() {
    return (
        <>
            <Header />
            <main className='principal'>
                <Formulario />
            </main>
            <Footer />
        </>
    )
}
import { Boton } from '../boton/Boton.jsx'
import { useNavigate } from 'react-router'
import './footer.css'

export function Footer() {

    const navigate = useNavigate()

    const verProductos = () => {
        navigate('/productos')
    }

    return (
        <footer className='footer'>
            <section className='footer__cta'>
                <div className='cta__bloque'>
                    <h2 className='bloque__titulo'>
                        Encuentra tu estilo hoy
                    </h2>
                    <p className='bloque__descripcion'>
                        Encuentra tu look perfecto con solo un clic. 
                        ¡Compra ahora y eleva tu guardarropa
                    </p>
                    <div className='bloque__botones'>
                        <Boton texto='Ver productos' path={verProductos} />
                    </div>
                </div>
            </section>
            <section className='footer__barra'>
                <small className='barra__copyright'>Mi Tienda Online - Sitio desarrollado por Raul Eduardo Munguia Urbina</small>
            </section>
        </footer>
    )
}
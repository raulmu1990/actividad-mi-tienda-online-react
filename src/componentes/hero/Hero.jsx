import { useNavigate } from 'react-router'
import { Boton } from '../boton/Boton.jsx'
import { Categoria } from '../categoria/Categoria.jsx'
import heroImg from '../../assets/imagenes/hero-imagen.jpg'
import './hero.css'

export function Hero() {

    const navigate = useNavigate()

    const verProductos = () => {
        navigate('/productos')
        window.scrollTo(0, 0)
    }

    return (
        <section className='hero'>
            <div className='hero__columna'>
                <header className='columna__encabezado'>
                    <div className='encabezado__bloque'>
                        <h1 className='bloque__titulo'>
                            Tu estilo, tu esencia:  
                            <span className='titulo__resaltar'> moda</span> que inspira
                        </h1>
                        <p className='bloque_descripcion'>
                            Encuentra todo lo que necesitas para brillar en cualquier ocasión. 
                            ¡Viste tus sueños con nosotros!
                        </p>
                        <Boton texto='Ver productos' path={verProductos} />
                    </div>
                </header>
                <footer className='columna__categorias'>
                    <p className='categorias__titulo'>Categorias destacadas</p>
                    <div className='categorias__grupo'>
                        <Categoria nombre='blusas' genero='damas' />
                        <Categoria nombre='camisas' genero='caballeros' />
                    </div>
                </footer>
            </div>
            <img className='hero__imagen' src={heroImg} alt="Imagen de tienda" />
        </section>
    )
}
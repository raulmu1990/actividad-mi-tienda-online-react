import { useNavigate } from 'react-router'
import './header.css'

export function Header() {

    const navigate = useNavigate()

    const irAlInicio = () => {
        navigate('/')
    }

    const verProductos = () => {
        navigate('/productos')
    }

    const verCarrito = () => {
        navigate('/carrito')
    }

    const verCheckout = () => {
        navigate('/checkout')
    }

    return (
        <header className='header'>
            <nav className='header__nav'>
                <a className='nav__logo'>
                    <div className='logo__icon'>MiTienda</div>
                </a>
                <ul className='nav__lista'>
                    <li className="lista__elemento">
                        <a className='elemento__link' onClick={irAlInicio}>Home</a>
                    </li>
                    <li className="lista__elemento">
                        <a className='elemento__link' onClick={verProductos}>Productos</a>
                    </li>
                    <li className="lista__elemento">
                        <a className='elemento__link' onClick={verCarrito}>Carrito</a>
                    </li>
                    <li className="lista__elemento">
                        <a className='elemento__link' onClick={verCheckout}>Checkout</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
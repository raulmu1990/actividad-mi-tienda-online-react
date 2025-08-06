import { useNavigate } from 'react-router'
import { Menu, IconoCerrar } from '../Icons.jsx'
import './header.css'
import { useState } from 'react'

export function Header() {

    const navigate = useNavigate()

    const irAlInicio = () => {
        navigate('/')
        window.scrollTo(0, 0)
    }

    const verProductos = () => {
        navigate('/productos')
        window.scrollTo(0, 0)
    }

    const verCarrito = () => {
        navigate('/carrito')
        window.scrollTo(0, 0)
    }

    const verCheckout = () => {
        navigate('/checkout')
        window.scrollTo(0, 0)
    }

    const [menuActivo, setMenuActivo] = useState(false)

    const handleChange = (event) => {
        setMenuActivo(event.target.checked)
    }

    return (
        <header className='header'>
            <nav className='header__nav'>
                <a className='nav__logo'>
                    <div className='logo__icon'>MiTienda</div>
                </a>
                <div className='menuBtn-and-links'>
                    <input onChange={handleChange} type='checkbox' id='menuCheck' hidden />
                    <label htmlFor='menuCheck' className='menuBtn'>
                        {
                            menuActivo 
                                ? <IconoCerrar size="32px" color="#333" /> 
                                : <Menu size="32px" color="#333" />
                        }
                    </label>
                    <ul className='nav__lista'>
                        <li className='lista__elemento'>
                            <a className='elemento__link' onClick={irAlInicio}>Home</a>
                        </li>
                        <hr />
                        <li className='lista__elemento'>
                            <a className='elemento__link' onClick={verProductos}>Productos</a>
                        </li>
                        <hr />
                        <li className='lista__elemento'>
                            <a className='elemento__link' onClick={verCarrito}>Carrito</a>
                        </li>
                        <hr />
                        <li className='lista__elemento'>
                            <a className='elemento__link' onClick={verCheckout}>Checkout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
import { Boton } from "../boton/Boton.jsx"
import { useNavigate } from "react-router-dom"
import './sumarioCarrito.css'



export function SumarioCarrito({carrito, subTotal, impuesto, total}) {

    const navigate = useNavigate()

    const irACheckout = () => {
        navigate('/checkout')
        window.scrollTo(0, 0)
    }
    
    return (
        <div className='carrito__sumario'>
            <strong className='sumario__titulo'>
                Sumario
            </strong>
            <div className='sumario__fila'>
                <p className='fila__texto'>
                    Subtotal {carrito.length} productos
                </p>
                <output className='fila__cantidad'>
                    ${subTotal}
                </output>
            </div>
            <div className='sumario__fila'>
                <p className='fila__texto'>
                    Cargo por envio
                </p>
                <output className='fila__cantidad'>
                    $8
                </output>
            </div>
            <div className='sumario__fila'>
                <p className='fila__texto'>
                    Impuestos 5%
                </p>
                <output className='fila__cantidad'>
                    ${impuesto}
                </output>
            </div>
            <hr/>
            <div className='sumario__total'>
                <p className='total__texto'>
                    Total
                </p>
                <output className='total__cantidad'>
                    ${total + 8}
                </output>
            </div>
            <Boton texto='Ir al Checkout' path={irACheckout} />
        </div>
    )
}
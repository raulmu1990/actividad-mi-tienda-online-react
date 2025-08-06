import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/carrito.jsx'
import './formulario.css'

export function Formulario() {

    const { total } = useContext(CarritoContext)

    const [formData, setFormData] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        setFormData(data)
    }

    return (
        <section className='checkout'>
            <h2 className='formulario__titulo'>Formulario de checkout</h2>
            <div className='checkout__container'>
                <form className='checkout__formulario' onSubmit={handleSubmit}>
                        <div className='formulario__fila'>
                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='nombre'>Nombre completo</label>
                                <input
                                    className='elemento__input'
                                    type='text'
                                    id='nombre'
                                    name='nombre'
                                    required
                                />
                            </div>
                        </div>

                        <div className='formulario__fila'>
                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='email'>Email</label>
                                <input
                                className='elemento__input'
                                type='email'
                                id='email'
                                name='email'
                                required
                                />
                            </div>

                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='telefono'>Telefono</label>
                                <input
                                className='elemento__input'
                                type='tel'
                                id='telefono'
                                name='telefono'
                                required
                                />
                            </div>
                        </div>

                        <div className='formulario__fila'>
                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='direccion'>Direccion</label>
                                <input
                                className='elemento__input'
                                type='text'
                                id='direccion'
                                name='direccion'
                                required
                                />
                            </div>

                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='ciudad'>Ciudad</label>
                                <input
                                className='elemento__input'
                                type='text'
                                id='ciudad'
                                name='ciudad'
                                required
                                />
                            </div>
                        </div>
                    
                        <div className='formulario__fila'>
                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='metodoPago'>Metodo de pago</label>
                                <select className='elemento__input' id='metodoPago' name='metodoPago'>
                                    <option value='tarjeta'>Tarjeta de credito</option>
                                    <option  value='paypal'>Paypal</option>
                                    <option value='efectivo'>Efectivo contra entrega</option>
                                </select>
                            </div>

                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='ciudad'>Total a pagar</label>
                                <input
                                className='elemento__input'
                                type='number'
                                id='total'
                                name='total'
                                value={total}
                                readOnly
                                />
                            </div>
                        </div>
                        <button className='checkout__boton' type='submit'>Ordenar</button>
            </form>
            <div className='checkout__datos'>
                <strong className='datos__titulo'>Datos del cliente</strong>
                <div className='datos__caja'>
                    <ul className='caja__lista'>
                        {
                            formData.length == 0 
                                ? (<p>No hay datos</p>) 
                                : (
                                    <>
                                        <li>Nombre: <strong>{formData.get('nombre')}</strong></li>
                                        <li>Email: <strong>{formData.get('email')}</strong></li>
                                        <li>Telefono: <strong>{formData.get('telefono')}</strong></li>
                                        <li>Direccion: <strong>{formData.get('direccion')}</strong></li>
                                        <li>Nombre: <strong>{formData.get('ciudad')}</strong></li>
                                        <li>Metodo de pago: <strong>{formData.get('metodoPago')}</strong></li>
                                        <li>Total a pagar: <strong>{formData.get('total')}</strong></li>
                                    </>
                                )
                        }
                    </ul>
                </div>
            </div>
            </div>
            
        </section>
    )
}
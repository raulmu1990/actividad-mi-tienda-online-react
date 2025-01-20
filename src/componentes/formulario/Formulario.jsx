import { useState } from 'react'
import './formulario.css'

export function Formulario() {

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        metodoPago: 'tarjeta',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const datos = Object.entries(formData).map(([clave, valor], id) => {
            return (
                <li key={id} className='lista__dato'>{clave}: {valor}</li>
            )
        })

    return (
        <section className='checkout'>
            <form className='checkout__formulario'>
                        <h2 className='formulario__titulo'>Formulario de checkout</h2>

                        <div className='formulario__fila'>
                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='nombre'>Nombre completo</label>
                                <input
                                    className='elemento__input'
                                    type='text'
                                    id='nombre'
                                    name='nombre'
                                    value={formData.nombre}
                                    onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.telefono}
                                onChange={handleChange}
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
                                value={formData.direccion}
                                onChange={handleChange}
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
                                value={formData.ciudad}
                                onChange={handleChange}
                                required
                                />
                            </div>
                        </div>
                    
                        <div className='formulario__fila'>
                            <div className='fila__elemento'>
                                <label className='elemento__titulo' htmlFor='metodoPago'>Metodo de pago</label>
                                <select value={formData.metodoPago} onChange={handleChange} className='elemento__input' id='metodoPago' name='metodoPago'>
                                    <option value='tarjeta'>Tarjeta de credito</option>
                                    <option  value='paypal'>Paypal</option>
                                    <option value='efectivo'>Efectivo contra entrega</option>
                                </select>
                            </div>
                        </div>
                        <button className='checkout__boton' type="submit">Ordenar</button>
                </form>
                <section className='checkout__datos'>
                    <strong className='datos__titulo'>Datos del cliente</strong>
                    <div className='datos__caja'>
                        <ul className='caja__lista'>
                            {datos}
                        </ul>
                    </div>
                </section>
        </section>
    )
}
import './boton.css'

export function Boton({texto, path}) {
    return (
        <a className='link'>
            <button onClick={path} className='link__boton'>{texto}</button>
        </a>
    )
}
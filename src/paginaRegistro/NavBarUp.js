import './NavBarUp.css'
import imagenFlecha from './img/arrow.svg'
import imagenPersona from './img/persona.jpg'
import imagenCarrito from './img/carrito.svg'
import imagenLupa from './img/lupa.svg'
import { Link } from 'react-router-dom'
export const NavBarUp = ()=> {


    return(
        <>
        <div id="fondoUP">
            
           
        <Link to='/Carrito'>
            <img src={imagenCarrito} id='imagenCarrito' />
            </Link>
            <Link to='/Login'>
            <p id='textoNombre'>Iniciar sesión</p>
            </Link>
         
        </div>
        
        </>
    )
}
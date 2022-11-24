import './NavBarUp.css'
import {Cart} from "../../cart/Cart"
import imagenFlecha from './img/arrow.svg'
import imagenPersona from './img/persona.jpg'
import imagenCarrito from './img/carrito.svg'
import { Link } from 'react-router-dom'
export const NavBarUp = ()=> {


    return(
        <>
        <div id="fondoUP">
           
            <Link to='/Carrito'>
            <img src={imagenCarrito} id='imagenCarrito' />
            </Link>
            <h1 id='textoBienv'>Bienvenido a PanceEats</h1>
            
            <Link to='/Login'>
            <p id='textoNombre'>Iniciar sesión</p>
            {/* <img src={imagenCarrito} id='imagenCarrito' /> */}
            </Link>
            <Cart/>
        </div>
        
        </>
    )
}
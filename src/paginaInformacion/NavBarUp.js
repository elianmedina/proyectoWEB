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

           
            <img src={imagenCarrito} id='imagenCarrito' />
            <h1 id='textoBienv'>Bienvenido a PanceEats</h1>
            
            
            <p id='textoNombre'>Inicar sesión</p>
            <img src={imagenCarrito} id='imagenCarrito' />
          


            <Link to='/Login'>
            <p id='textoNombre'>Iniciar sesión</p>
            </Link>
            <Link to='/Carrito'>
            <img src={imagenCarrito} id='imagenCarrito' />
            </Link>

        </div>
        
        </>
    )
}
import './NavBarUp.css'
import imagenFlecha from './img/arrow.svg'
import imagenPersona from './img/persona.jpg'
import imagenCarrito from './img/carrito.svg'
import { Link } from 'react-router-dom'
import { CajonPerfil } from '../../perfil/perfilInformacion'
export const NavBarUp = (user)=> {


    return(
        <>
        <div id="fondoUP">
           
            <Link to='/Carrito'>
            <img src={imagenCarrito} id='imagenCarrito' />
            </Link>
            <h1 id='textoBienv'>Bienvenido a PanceEats</h1>
            
            <CajonPerfil user={user}/>
        </div>
        
        </>
    )
}
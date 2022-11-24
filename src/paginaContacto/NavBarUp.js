import './NavBarUp.css'

            import imagenCarrito from './img/carrito.svg'
import imagenLupa from './img/lupa.svg'
import { Link } from 'react-router-dom'
import { CajonPerfil } from '../perfil/perfilInformacion'
export const NavBarUp = ()=> {


    return(
        <>
        <div id="fondoUP">
            
            <img src={imagenLupa} id='imagenXD' />
            <input id="barrabusqueda"type="text" placeholder="Buscar tienda..."/>
            
            
            <CajonPerfil/>
            <Link to='/Carrito'>
            <img src={imagenCarrito} id='imagenCarrito' />
            </Link>
        </div>
        
        </>
    )
}
import './NavBarUp.css'
import imagenFlecha from './img/arrow.svg'
import imagenPersona from './img/persona.jpg'
import imagenCarrito from './img/carrito.svg'
import imagenLupa from './img/lupa.svg'
export const NavBarUp = ()=> {


    return(
        <>
        <div id="fondoUP">

            
            <p id='textoNombre'>Inicar sesión</p>
            <img src={imagenCarrito} id='imagenCarrito' />
        </div>
        
        </>
    )
}
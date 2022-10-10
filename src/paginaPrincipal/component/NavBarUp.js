import './NavBarUp.css'
import imagenFlecha from './img/arrow.svg'
import imagenPersona from './img/persona.jpg'
import imagenCarrito from './img/carrito.svg'

export const NavBarUp = ()=> {


    return(
        <>
        <div id="fondoUP">
           
            <img src={imagenCarrito} id='imagenCarrito' />
            <h1 id='textoBienv'>Bienvenido a PanceEats</h1>
            
            
            <p id='textoNombre'>Inicar sesión</p>
            <img src={imagenCarrito} id='imagenCarrito' />
          
        </div>
        
        </>
    )
}
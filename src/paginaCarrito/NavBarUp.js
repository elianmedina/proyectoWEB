import './NavBarUp.css'
import imagenFlecha from './img/arrow.svg'
import imagenPersona from './img/persona.jpg'
import imagenCarrito from './img/carrito.svg'
import imagenLupa from './img/lupa.svg'
export const NavBarUp = ()=> {


    return(
        <>
        <div id="fondoUP">
            
            <img src={imagenLupa} id='imagenXD' />
            <input id="barrabusqueda"type="text" placeholder="Buscar comida..."/>
            <div id='rectIconos6' />
            <img src={imagenCarrito} id='imagenCarrito' />
            
            <p id='textoNombre'>Inicar sesión</p>
         
        </div>
        
        </>
    )
}
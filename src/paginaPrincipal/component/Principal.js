import './Principal.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenCarrusel1 from './img/prmo1.jpg'
import imagenCarrusel2 from './img/PROMOCAO2.jpg'
import imagenCarrusel3 from './img/PRMOCAO3.jpg'
import videoFuego from './video/fuego.mp4'
import imagenFlecha from './img/arrow.svg'

export const Principal = () => {


    return (
        <>

            <div id='fondoPrincipal'>
                <h1 id='textoHOT'>HOT</h1>
                <h1 id='textoSALES'>SALES</h1>
                <div id='fondoCarrusel'>
                    <img src={imagenFlecha} id='imagenflechaCarruselIZQ' />
                    <img src={imagenFlecha} id='imagenflechaCarruselDER' />
                    <video id='videofondoCarrusel' autoPlay />
                </div>
                <img src={imagenCarrusel1} id='imagenC1' />
                <img src={imagenCarrusel2} class='imagenNOprincipal' id='imagenC2' />
                <img src={imagenCarrusel3} class='imagenNOprincipal' id='imagenC3' />
                <span class='puntoNOseleccionado' id='punto1' />
                <span class='puntoNOseleccionado' id='punto2'/>
                <span class='puntoSeleccionado' id='punto3'/>
                <span class='puntoNOseleccionado' id='punto4'/>
                <span class='puntoNOseleccionado' id='punto5'/>

            </div>

            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
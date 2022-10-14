import './Chat.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenInfoChat1 from './img/mcdonald.png'
import { Link } from 'react-router-dom'


export const Chat = () => {

  

    return (
        <>

            <div id='fondoPrincipalCHAT'>
            <div id="relleno1"></div>
                <h1 id='textoAclarador'>CHAT</h1>
                <Link to='/Contacto'>
                <button id="botonatrasCHAT" name="button">Atrás</button>
                </Link>
                
                
                
            </div>
            
            <div id="separacioninformacionrestaurante"></div>
            <img src={imagenInfoChat1} id='imagen1CHAT' />
            <h1 id="nombreInfoChat1">McDonald's</h1>

            <div id="globochatrect"></div>
                <div id="separacionbotonhamburguesa3d"></div>
                <input id="barraMensajes"type="text" placeholder="Escribe un mensaje..."/>


          
            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
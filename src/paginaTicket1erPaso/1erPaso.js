import './1erPaso.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenInfoChat1 from './img/mcdonald.png'
import { Link } from 'react-router-dom'


export const PrimerPaso = () => {

  

    return (
        <>

            <div id='fondoPrincipal'>
            
                <h1 id='textoAclarador'>TICKET</h1>
              
                <h1 id="cuentanos">Cuéntanos...</h1>
                <h1 id="cuentanosS">Sobre tí</h1>
                
                <h1 id="nombreCom">Nombre completo:</h1>
                <input id="nombreBarra"type="text" placeholder="Escribe aquí..."/>

                <h1 id="tipoID">Tipo de identificación:</h1>
                <input id="tipoBarra"type="text" placeholder="Escribe aquí..."/>
                
                <h1 id="numID">Número de identificación:</h1>
                <input id="numeroBarra"type="text" placeholder="Escribe aquí..."/>

                <span class='puntoSeleccionado' id='punto1ero'/>
                <span  class='puntoNOseleccionado'  id='punto2ndo'/>                 

<Link to='/Segundo-paso-ticket'>
                <button id="botonSiguiente" name="button">SIGUIENTE</button>
                </Link>
            </div>
            
           
           


          
            <NavBarUp />
            <NavBar />

        </>
    ) 
}
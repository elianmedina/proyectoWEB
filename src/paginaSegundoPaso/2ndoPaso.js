import './2ndoPaso.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenInfoChat1 from './img/mcdonald.png'
import { Link } from 'react-router-dom'


export const SegundoPaso = () => {

  

    return (
        <>

            <div id='fondoPrincipal'>
            
                <h1 id='textoAclarador'>TICKET</h1>
              
                <h1 id="cuentanos">Cuentanos...</h1>
                <h1 id="cuentanosD">Sobre el restaurante</h1>
                
                <h1 id="nombre">Nombre:</h1>
                <input id="nombreBarra"type="text" placeholder="Escribe aquí..."/>

                <h1 id="tipoRestau">Tipo de restaurante:</h1>
                <input id="tipoBarra"type="text" placeholder="Escribe aquí..."/>
                
                <h1 id="numTel">Número de teléfono:</h1>
                <input id="numeroBarra"type="text" placeholder="Escribe aquí..."/>

                <span class='puntoSeleccionado' id='punto1ero'/>
                <span  class='puntoSeleccionado'  id='punto2ndo'/>                 

<Link to='/Informacion'>
                <button id="botonFinalizar" name="button">FINALIZAR</button>
                </Link>
            </div>
            
           
           


          
            <NavBarUp />
            <NavBar />

        </>
    ) 
}
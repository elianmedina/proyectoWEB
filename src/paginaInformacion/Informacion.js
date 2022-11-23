import './Informacion.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenInfoChat1 from './img/mcdonald.png'
import { Link } from 'react-router-dom'


export const Informacion = () => {



    return (
        <>

            <div id='fondoPrincipalINFO'>

                <h1 id='textoAclarador9'>INFORMACIÓN</h1>

                <h1 id="pregunta">¿Tienes un restaurante nuevo en Pance?</h1>
                <h2 id="mensaje1">Manda tu solicitud aquí, para agregar tu restaurante a nuestra aplicación web</h2>

                <Link to='/Primer-paso-ticket'>
                    <button id="botonCrearTicket" name="button">CREAR TICKET</button>
                </Link>
                <h1 id="textoSobreNosotros">Sobre nosotros</h1>
                <h2 id="mision">Misión <br /><br /><br />Visión</h2>
                <h2 id="misionTexto">Somos un grupo de jovenes interesados en hacer crecer a la sociedad principalmente en el aspecto económico, ya que si la sociedad mejora, todo mejora.
                    <br /><br /><br /><br />De aquí al 2030 seremos la aplicación web de restaurantes número 1 para lugares remotos y de dificil acceso.</h2>
                <div id="barrera"></div>


            </div>






            <NavBarUp />
            <NavBar />

        </>
    )
}
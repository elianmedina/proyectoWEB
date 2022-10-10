import './Contacto.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenMapa from './img/map.svg'
import imagenTienda1 from './img/mcdonald.png'
import imagenTienda2 from './img/KFC-logo.png'
import imagenTienda3 from './img/logo-frisby.png'

export const Contacto = () => {

    var cantidad = 3;//funcion para calcular cuantos items hay

    return (
        <>

            <div id='fondoPrincipal'>
                
                <h1 id='textoAclarador'>TIENDA</h1>
                <div id="barraFiltro"></div>
                
                <h1 id="textoOrdenarPor">Ordenar por</h1>
                <select id="comboboxfiltro"name="select">
                    <option value="value1">Más elegidos</option>
                    <option value="value2" selected>Más baratos</option>
                    <option value="value3">Menos elegidos</option>
                </select>
                <img src={imagenMapa} id='imagenmap' />
                <h1 id="vermapa">Ver en mapa</h1>
            </div>
            <div id='tiendas'>
                <div>
                    <img src={imagenTienda1} id='imagen1' />
                    <h1 id="nombretienda1">McDonald's</h1>
                    <h2 id="textodescriptivo1">Contáctese para obtener más información a cerca de los pedidos:</h2>
                    <button id="boton14" name="button">CHAT EN LÍNEA</button>
                </div>
                <div>
                    <img src={imagenTienda2} id='imagen2' />
                    <h1 id="nombretienda2">KFC</h1>
                    <h2 id="textodescriptivo2">Contáctese para obtener más información a cerca de los pedidos:</h2>
                    <button id="boton24" name="button">CHAT EN LÍNEA</button>
                </div>
                <div>
                    <img src={imagenTienda3} id='imagen3' />
                    <h1 id="nombretienda3">Frisby</h1>
                    <h2 id="textodescriptivo3">Contáctese para obtener más información a cerca de los pedidos:</h2>
                    <button id="boton34" name="button">CHAT EN LÍNEA</button>
                </div>
                <h3 id="resultados">Se encontraron {cantidad} resultados</h3>
            </div>

            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
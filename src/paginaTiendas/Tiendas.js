import './Principal.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenMapa from './img/map.svg'
import imagenTienda1 from './img/mcdonald.png'
import imagenTienda2 from './img/KFC-logo.png'
import imagenTienda3 from './img/logo-frisby.png'

export const Tiendas = () => {

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
                    <h2 id="textodescriptivo1">Una franquicia de restaurantes de comida rápida estadounidense. Sus principales productos son las hamburguesas, las patatas fritas, los menús para el desayuno y los refrescos.</h2>
                    <button id="boton1" name="button">MENÚ</button>
                </div>
                <div>
                    <img src={imagenTienda2} id='imagen2' />
                    <h1 id="nombretienda2">KFC</h1>
                    <h2 id="textodescriptivo2">Es una cadena de restaurantes de comida rápida estadounidense especializada en pollo frito. También piezas de pollo crujientes que se preparan mediante un proceso de fritura a presión.</h2>
                    <button id="boton2" name="button">MENÚ</button>
                </div>
                <div>
                    <img src={imagenTienda3} id='imagen3' />
                    <h1 id="nombretienda3">Frisby</h1>
                    <h2 id="textodescriptivo3"> Cadena de restaurantes colombiana especializada en el pollo frito.
</h2>
                    <button id="boton3" name="button">MENÚ</button>
                </div>
                <h3 id="resultados">Se encontraron {cantidad} resultados</h3>
            </div>

            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
import './Comida.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenMapa from './img/map.svg'
import imagenComida1 from './img/MCBURGERCHEESE.jpg'
import imagenComida2 from './img/coca.jpg'
import imagenComida3 from './img/FKCCOMBO.png'
import { Link } from 'react-router-dom'

export const Comidas = () => {

    var cantidad = 0;//funcion para calcular cuantos items hay

    return (
        <>

            <div id='fondoPrincipal'>
                
                <h1 id='textoAclarador'>COMIDA</h1>
                <div id="barraFiltro"></div>
                
                <h1 id="textoOrdenarPor">Ordenar por</h1>
                <select id="comboboxfiltro"name="select1"  >
                    <option value="value1" selected >Más vendidos</option>
                    <option value="value2" >Más baratos</option>
                    <option value="value3">Promociones</option>
                </select>
                <img src={imagenMapa} id='imagenmap' />
                <h1 id="vermapa">Ver en mapa</h1>
            </div>
            <div id='tiendas'>
                <div>
                    <img src={imagenComida1} id='imagencomida1' />
                    <h1 id="nombrecomida1">Cheeseburger</h1>
                    <h2 id="textodescriptivo10">Simple y clásica Cheeseburger comienza con un patty de 100% carne sazonado con una pizca de sal y pimienta.</h2>
                    <h3 id="restaurante1">McDonald's</h3>
                    <h3 id="calorias1">300 Cal.</h3>
                    <h3 id="precio1">$ 10.000 COP</h3>
                    <button id="boton1" name="button">ORDENAR</button>
                    
                </div>
                <div>
                    <img src={imagenComida2} id='imagencomida2' />
                    <h1 id="nombrecomida2">Coca-Cola®</h1>
                    <h2 id="textodescriptivo20">Fría y refrescante. Va bien con cualquier opción de nuestro menú. Disponible en pequeña, mediana y grande.</h2>
                    <h3 id="restaurante2">McDonald's</h3>
                    <h3 id="calorias2">150 Cal.</h3>
                    <h3 id="precio2">$ 4.000 COP</h3>
                    <button id="boton2" name="button">ORDENAR</button>
                </div>
                <div>
                    <img src={imagenComida3} id='imagencomida3' />
                    <h1 id="nombrecomida3">Mega Supremo</h1>
                    <h2 id="textodescriptivo30">6 Presas + 4 Strips + 2 Ensaladas Coleslaw Personales + 2 Papas Pequeñas + 1 Sundae Arequipe</h2>
                    <h3 id="restaurante3">KFC</h3>
                    <h3 id="calorias3">100 Cal.</h3>
                    <h3 id="precio3">$ 60.000 COP</h3>
                    <button id="boton3" name="button">ORDENAR</button>
                </div>
                <h3 id="resultadoscomidas">Se encontraron {cantidad} resultados</h3>
                <div id="separacionbotonhamburguesa3d"></div>

                <Link to='/Hamburguesa3D'>
                <button id="botonhamburguesa3d" name="button">ARMA TU HAMBURGUESA EN 3D</button>
                </Link>
            </div>

            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
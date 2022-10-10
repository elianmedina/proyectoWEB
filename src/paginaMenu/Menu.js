import './Menu.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenInfoMenu1 from './img/mcdonald.png'
import imagenComida1 from './img/MCBURGERCHEESE.jpg'
import imagenComida2 from './img/coca.jpg'
import imagenComida3 from './img/sprite.jpg'

export const Menu = () => {

    var cantidad = 3;//funcion para calcular cuantos items hay

    return (
        <>

            <div id='fondoPrincipal'>
                
                <h1 id='textoAclarador'>MENÚ</h1>
                <div id="barraFiltro"></div>
                <img src={imagenInfoMenu1} id='imagen1Menu' />
                <h1 id="textoRestaurante">McDonald's</h1>
                <h1 id="textoOrdenarPor">Ordenar por</h1>
                <select id="comboboxfiltro"name="select1"  >
                    <option value="value1" selected >Todos</option>
                    <option value="value2" >Hamburguesas</option>
                    <option value="value3">Bebidas</option>
                    <option value="value4" >Frappés</option>
                    <option value="value5" >Especiales</option>
                    <option value="value6">Promociones</option>
                </select>
               
            </div>
            <div id='tiendas'>
                <div>
                    <img src={imagenComida1} id='imagencomida1' />
                    <h1 id="nombrecomida1">Cheeseburger</h1>
                    <h2 id="textodescriptivo10">Simple y clásica Cheeseburger comienza con un patty de 100% carne sazonado con una pizca de sal y pimienta.</h2>
                    
                    <h3 id="calorias1">300 Cal.</h3>
                    <h3 id="precio1">$ 10.000 COP</h3>
                    <button id="boton1" name="button">AÑADIR</button>
                    
                </div>
                <div>
                    <img src={imagenComida2} id='imagencomida2' />
                    <h1 id="nombrecomida2">Coca-Cola®</h1>
                    <h2 id="textodescriptivo20">Fría y refrescante. Va bien con cualquier opción de nuestro menú. Disponible en pequeña, mediana y grande.</h2>
                    
                    <h3 id="calorias2">150 Cal.</h3>
                    <h3 id="precio2">$ 4.000 COP</h3>
                    <button id="boton2" name="button">AÑADIR</button>
                </div>
                <div>
                    <img src={imagenComida3} id='imagencomida3' />
                    <h1 id="nombrecomida3">Mega Supremo</h1>
                    <h2 id="textodescriptivo30">Fría y refrescante. Va bien con cualquier opción de nuestro menú. Disponible en pequeña, mediana y grande.</h2>
                    
                    <h3 id="calorias3">150 Cal.</h3>
                    <h3 id="precio3">$ 4.000 COP</h3>
                    <button id="boton3" name="button">AÑADIR</button>
                </div>
                <h3 id="resultadoscomida3">Se encontraron {cantidad} resultados</h3>
                
            </div>

            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
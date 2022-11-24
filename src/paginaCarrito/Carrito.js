import './Carrito.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenInfoMenu1 from './img/mcdonald.png'
import imagenComida1 from './img/MCBURGERCHEESE.jpg'
import imagenComida2 from './img/coca.jpg'
import imagenComida3 from './img/sprite.jpg'

export const Carrito = () => {

    var cantidad = 3;//funcion para calcular cuantos items hay

    var numeroUnidadesItem1 = 1;
    var numeroUnidadesItem2 = 1;
    var numeroUnidadesItem3 = 1;
    return (
        <>

            <div id='fondoPrincipal'>
                
                <h1 id='textoAclarador'>CARRITO</h1>
                
                <img src={imagenInfoMenu1} id='imagenCarrito10' />
                <img src={imagenInfoMenu1} id='imagenCarrito20' />
                <img src={imagenInfoMenu1} id='imagenCarrito30' />
                
               
               
            </div>
            <div id='tiendas'>
                <div>
                    <img src={imagenComida1} id='imagenCarrito1' />
                    <h1 id="nombrecomida1">Cheeseburger</h1>
                   
                    
                    <h3 id="calorias1">300 Cal.</h3>
                    <h1 id='cantidadUnidades1'>{numeroUnidadesItem1} unidad(es)</h1>
                    <h3 id="precio1">$ 10.000 COP</h3>
                 
                    
                </div>
                <div>
                    <img src={imagenComida2} id='imagenCarrito2' />
                    <h1 id="nombrecomida2">Coca-Cola®</h1>
                    
                    
                    <h3 id="calorias2">150 Cal.</h3>
                    <h1 id='cantidadUnidades2'>{numeroUnidadesItem2} unidad(es)</h1>
                    <h3 id="precio2">$ 4.000 COP</h3>
                    
                </div>
                <div>
                    <img src={imagenComida3} id='imagenCarrito3' />
                    <h1 id="nombrecomida3">Mega Supremo</h1>
                  
                    
                    <h3 id="calorias3">150 Cal.</h3>
                    <h1 id='cantidadUnidades3'>{numeroUnidadesItem3} unidad(es)</h1>
                       
                    <h3 id="precio3">$ 4.000 COP</h3>
                 
                </div>
                <h3 id="resultadoscomida6">Se encontraron {cantidad} resultados</h3>
                <button id="botonPagar" name="button">PROCEDER A PAGAR</button>
            </div>

            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
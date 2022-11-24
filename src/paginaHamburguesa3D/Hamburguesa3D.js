import './Hamburguesa3D.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import {Render3D} from'./Render3D'
import imagenMapa from './img/map.svg'
import imagenComida1 from './img/MCBURGERCHEESE.jpg'
import imagenComida2 from './img/coca.jpg'
import imagenComida3 from './img/FKCCOMBO.png'
import { Link } from 'react-router-dom'
import React from 'react'



export const Hamburguesa3D = () => {
    
    



  

    return (
        <>

            <div id='fondoPrincipal'>
                
                <h1 id='textoAclarador'>ARMA TU HAMBURGUESA</h1>
                
                <Link to='/Comidas'>
                <button id="botonatrasespacio3D" name="button">Atrás</button>
                </Link>
                
                <div id="espacio3D">
                    <Render3D/>
                </div>
                
                
                <select id="comboboxRestaurante"name="select1">
                    <option value="" selected disabled hidden>Restaurante</option>
                    <option value="value1" >McDonald's</option>
                    <option value="value2" >KFC</option>
                    <option value="value3">Frisby</option>
                </select>
                
                
            </div>
            
            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
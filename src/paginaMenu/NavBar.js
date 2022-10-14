import React from 'react'

import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'

import { Link } from 'react-router-dom'


export const NavBar = () => {
    //HOLA


    

    return (
        <>

            <div id="fondo">
                <div id='rectIconos1' />


     <Link to='/'>
                <img src={imagenHome} id='imagenhome1'/>
                </Link>

                <Link to='/Tiendas'>
                <img src={imagenStore} id='imagenstore1'/>
                </Link>
                
                <Link to='/Comidas'>
                <img src={imagenFood} id='imagenfood1' />
                </Link>

                <Link to='/Contacto'>
                <img src={imagenAsesoria} id='imagenasesoria1' />
                </Link>

                <Link to='/Informacion'>
                <img src={imagenInfo} id='imageninfo1' />
                </Link>


            </div>

         
        </>
    )

}

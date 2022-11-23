import React from 'react'

import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'
import { Contacto } from './Contacto'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    //HOLA


    

    return (
        <>

            <div id="fondo">
                <div id='rectIconos9' />


                <Link to='/'>
                <img src={imagenHome} id='imagenhome4'/>
                </Link>

                <Link to='/Tiendas'> 
                <img src={imagenStore} id='imagenstore4'/>
                </Link>
                
                <Link to='/Comidas'>
                <img src={imagenFood} id='imagenfood4' />
                </Link>

                <Link to='/Contacto'>
                <img src={imagenAsesoria} id='imagenasesoria4' />
                </Link>

                <Link to='/Informacion'>
                <img src={imagenInfo} id='imageninfo4' />
                </Link>


            </div>

         
        </>
    )

}

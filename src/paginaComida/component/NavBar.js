import React from 'react'

import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'
import { Comidas } from './Comidas'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    //HOLA




    return (
        <>

            <div id="fondo">
                <div id='rectIconos2' />


                <Link to='/'>
                    <img src={imagenHome} id='imagenhome2' />
                </Link>

                <Link to='/Tiendas'>
                    <img src={imagenStore} id='imagenstore2' />
                </Link>

                <Link to='/Comidas'>
                    <img src={imagenFood} id='imagenfood2' />
                </Link>

                <Link to='/Contacto'>
                    <img src={imagenAsesoria} id='imagenasesoria2' />
                </Link>

                <Link to='/Informacion'>
                    <img src={imagenInfo} id='imageninfo2' />
                </Link>


            </div>


        </>
    )

}

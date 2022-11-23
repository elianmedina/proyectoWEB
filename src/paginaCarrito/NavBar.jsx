import React from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'
import { Carrito } from './Carrito'
import { Principal } from '../paginaPrincipal/component/Principal';
import { Tiendas } from '../paginaTiendas/Tiendas';
import { Comidas } from '../paginaComida/component/Comidas';
import { Hamburguesa3D } from '../paginaHamburguesa3D/Hamburguesa3D';
import { Contacto } from '../paginaContacto/Contacto';
import { Chat } from '../paginaChat/Chat';
import { Informacion } from '../paginaInformacion/Informacion';
import { PrimerPaso } from '../paginaTicket1erPaso/1erPaso';
import { SegundoPaso } from '../paginaSegundoPaso/2ndoPaso';
import { Menu } from '../paginaMenu/Menu'



export const NavBar = () => {
    //HOLA




    return (
        <>

            <div id="fondo">


                <Link to='/'>
                    <img src={imagenHome} id='imagenhome222' />
                </Link>


                <Link to='/Tiendas'>
                    <img src={imagenStore} id='imagenstore222' />
                </Link>


                <Link to='/Comidas'>
                <img src={imagenFood} id='imagenfood222' />
                </Link>



                <Link to='/Contacto'>
                <img src={imagenAsesoria} id='imagenasesoria222' />
                </Link>



                <Link to='/Informacion'>
                <img src={imagenInfo} id='imageninfo2' />
                </Link>




            </div>



        </>
    );

}

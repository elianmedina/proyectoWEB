import React from 'react'

import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'
import { Tiendas } from './Tiendas'


export const NavBar = () => {
    //HOLA


    

    return (
        <>

            <div id="fondo">
                <div id='rectIconos1' />


     
                <img src={imagenHome} id='imagenhome1'/>
             

                
                <img src={imagenStore} id='imagenstore1'/>
               
                
                <img src={imagenFood} id='imagenfood1' />
              

                
                <img src={imagenAsesoria} id='imagenasesoria1' />
               

                
                <img src={imagenInfo} id='imageninfo1' />
             


            </div>

         
        </>
    )

}

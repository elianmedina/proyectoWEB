import React from 'react'

import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'
import { Chat } from './Chat'


export const NavBar = () => {
    //HOLA


    

    return (
        <>

            <div id="fondo">
                <div id='rectIconos40' />


     
                <img src={imagenHome} id='imagenhome4'/>
             

                
                <img src={imagenStore} id='imagenstore4'/>
               
                
                <img src={imagenFood} id='imagenfood4' />
              

                
                <img src={imagenAsesoria} id='imagenasesoria4' />
               

                
                <img src={imagenInfo} id='imageninfo4' />
             


            </div>

         
        </>
    )

}

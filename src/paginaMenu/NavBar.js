import React from 'react'

import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'
import { Menu } from './Menu'


export const NavBar = () => {
    //HOLA


    

    return (
        <>

            <div id="fondo">
                <div id='rectIconos2' />


     
                <img src={imagenHome} id='imagenhome2'/>
             

                
                <img src={imagenStore} id='imagenstore2' />
               
                
                <img src={imagenFood} id='imagenfood2'/>
              

                
                <img src={imagenAsesoria} id='imagenasesoria2' />
               

                
                <img src={imagenInfo} id='imageninfo2'  />
             


            </div>

         
        </>
    )

}

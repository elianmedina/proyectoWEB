import React from 'react'
import { BrowserRouter,Link,Navigate,NavLink,Route,Routes } from 'react-router-dom'
import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'



export const NavBar = () => {
    //HOLA


    

    return (
        <>

            <div id="fondo">
                


                <img src={imagenHome} id='imagenhome222'/>
      


            
                <img src={imagenStore} id='imagenstore222' />
             
                
               
             
                <img src={imagenFood} id='imagenfood222'/>
             
                
              

                
                 <img src={imagenAsesoria} id='imagenasesoria222' />
             
               
               

                
                 <img src={imagenInfo} id='imageninfo2'  />
            
               
             
                

            </div>

          
             
        </>
    );

}

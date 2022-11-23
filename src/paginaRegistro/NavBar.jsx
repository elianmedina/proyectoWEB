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
                

<Link to ='/'>
                <img src={imagenHome} id='imagenhome222'/>
                </Link>


            <Link to='/Tiendas'>
                <img src={imagenStore} id='imagenstore222' />
                </Link>
                
               
             <Link to='/Comidas'>
                <img src={imagenFood} id='imagenfood222'/>
                </Link>
                
              

                <Link to='/Contacto'>
                 <img src={imagenAsesoria} id='imagenasesoria222' />
             
                 </Link>
               

                <Link to='/Informacion'>
                 <img src={imagenInfo} id='imageninfo2'  />
                 </Link>
               
             
                

            </div>

          
             
        </>
    );

}

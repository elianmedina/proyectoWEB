import React from 'react'

import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'
import { Principal } from './Principal'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    //HOLA


    function  seleccionarHome(){
        
        document.getElementById('imagenhomme').style.filter =  "invert(57%)  | sepia(57%) | saturate(2531%) | hue-rotate(342deg) | brightness(108%) | contrast(101%)";
        document.getElementById('imagenstore').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenfood').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenasesoria').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imageninfo').style.filter ="invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
    }

    
    function  seleccionarStore(){
        
        document.getElementById('imagenhomme').style.filter("invert(57%)  | sepia(57%) | saturate(2531%) | hue-rotate(342deg) | brightness(108%) | contrast(101%)");
        document.getElementById('imagenstore').style.filter("invert(87%) , sepia(7%) , saturate(21%) , hue-rotate(348deg) , brightness(88%) , contrast(84%)");
        document.getElementById('imagenfood').style.filter("invert(87%) , sepia(7%) , saturate(21%) , hue-rotate(348deg) , brightness(88%) , contrast(84%)");
        document.getElementById('imagenasesoria').style.filter("invert(87%) , sepia(7%) , saturate(21%) , hue-rotate(348deg) , brightness(88%) , contrast(84%)");
        document.getElementById('imageninfo').style.filter("invert(87%) , sepia(7%) , saturate(21%) , hue-rotate(348deg) , brightness(88%) , contrast(84%)");
    }

    
    function  seleciconarfood(){
        
        document.getElementById('imagenhomme').style.filter =  "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenstore').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenfood').style.filter = "invert(57%)  | sepia(57%) | saturate(2531%) | hue-rotate(342deg) | brightness(108%) | contrast(101%)";
        document.getElementById('imagenasesoria').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imageninfo').style.filter ="invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
    }

    function  seleccionarasesoria(){
        
        document.getElementById('imagenhomme').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenstore').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenfood').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenasesoria').style.filter = "invert(57%)  | sepia(57%) | saturate(2531%) | hue-rotate(342deg) | brightness(108%) | contrast(101%)";
        document.getElementById('imageninfo').style.filter ="invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
    }

    function  seleccionarinfo (){
        
        document.getElementById('imagenhomme').style.filter =  "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenstore').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenfood').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imagenasesoria').style.filter = "invert(87%) | sepia(7%) | saturate(21%) | hue-rotate(348deg) | brightness(88%) | contrast(84%)";
        document.getElementById('imageninfo').style.filter ="invert(57%)  | sepia(57%) | saturate(2531%) | hue-rotate(342deg) | brightness(108%) | contrast(101%)";
    }

    return (
        <>

            <div id="fondo">
                <div id='rectIconos' />


                <Link to='/'>
                <img src={imagenHome} id='imagenhome' button onClick={seleccionarHome}/>
                </Link>
                

                <Link to='/Tiendas'>
                <img src={imagenStore} id='imagenstore' button onClick={seleccionarStore}/>
                </Link>
               
               
                <Link to='/Comidas'>
                <img src={imagenFood} id='imagenfood' button onClick={seleciconarfood}/>
                </Link>
               
              

                <Link to='/Contacto'>
                <img src={imagenAsesoria} id='imagenasesoria' button onClick={seleccionarasesoria}/>
                </Link>
               
               

                <Link to='/Informacion'>
                <img src={imagenInfo} id='imageninfo' button onClick={seleccionarinfo} />
                </Link>
               
             


            </div>

         
        </>
    )

}

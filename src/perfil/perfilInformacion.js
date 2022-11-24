import React from 'react'

import { useState } from 'react'
import './perfilInformacion.css'
import { IniciarSesionBoton } from './IniciarSesionBoton'
import { InformacionPerfil } from './InfoPerfil'
import { LoginUnido } from '../paginaInicioSesion/component/LoginUnido'
import { App } from '../App'
export const CajonPerfil = () =>{

    
    

    return (
        <>
            <div id="cajonNombre">{App.user && App.user._id?<InformacionPerfil />:<IniciarSesionBoton />}</div>
        </>
    )
}
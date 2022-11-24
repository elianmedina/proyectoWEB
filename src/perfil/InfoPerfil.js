import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Login } from '../paginaInicioSesion/component/Login'
export const InformacionPerfil = () => {

    

    

    const NombreUsuario = Login.NombreUsuario;

    console.log(NombreUsuario)
    return(
        <>
           
            <p>{NombreUsuario}</p>
            
        </>
    )
}
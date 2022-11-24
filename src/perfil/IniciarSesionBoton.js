import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../paginaInicioSesion/component/Login'
export const IniciarSesionBoton = () => {

    
    return(
        <>
          
            <Link to='/Login'>
            <p>Iniciar sesión</p>
            </Link>

        </>
    )
}
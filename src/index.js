import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Link,Navigate,NavLink,Route,Routes } from 'react-router-dom'
import { Principal } from './paginaPrincipal/component/Principal';
import { Tiendas } from './paginaTiendas/Tiendas';
import { Comidas } from './paginaComida/component/Comidas';
import { Hamburguesa3D } from './paginaHamburguesa3D/Hamburguesa3D';
import { Contacto } from './paginaContacto/Contacto';
import { Chat } from './paginaChat/Chat';
import { Informacion } from './paginaInformacion/Informacion';
import { PrimerPaso } from './paginaTicket1erPaso/1erPaso';
import { SegundoPaso } from './paginaSegundoPaso/2ndoPaso';
import { Menu } from './paginaMenu/Menu';
import { Carrito } from './paginaCarrito/Carrito';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Carrito />

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

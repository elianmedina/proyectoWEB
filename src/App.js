import logo from './logo.svg';
import './App.css';
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
import { LoginUnido } from './paginaInicioSesion/component/LoginUnido';
import { RegistroUnido } from './paginaRegistro/RegistroUnido';
import { Routes,Route} from 'react-router-dom';
import { useState } from 'react';
//daniel

export const App = () => {
  const [user, setLoginUser] = useState({})
  return (
   <>
   <Routes>
    
    <Route exact path='/' element={<Principal/>}></Route>
    <Route exact path='/Tiendas' element={user && user._id?<Tiendas/>:<LoginUnido setLoginUser={setLoginUser}/>}></Route>
    <Route exact path='/Comidas' element={user && user._id?<Comidas/>:<LoginUnido setLoginUser={setLoginUser}/>}></Route>
    <Route exact path='/Hamburguesa3D' element={<Hamburguesa3D/>}></Route>
    <Route exact path='/Contacto' element={user && user._id?<Contacto/>:<LoginUnido setLoginUser={setLoginUser}/>}></Route>
    <Route exact path='/Chat' element={<Chat/>}></Route>
    <Route exact path='/Informacion' element={user && user._id?<Informacion/>:<LoginUnido setLoginUser={setLoginUser}/>}></Route>
    <Route exact path='/Primer-paso-ticket' element={<PrimerPaso/>}></Route>
    <Route exact path='/Segundo-paso-ticket' element={<SegundoPaso/>}></Route>
    <Route exact path='/Menu' element={<Menu/>}></Route>
    <Route exact path='/Carrito' element={user && user._id?<Carrito/>:<LoginUnido setLoginUser={setLoginUser}/>}></Route>
    <Route exact path='/Login' element={<LoginUnido setLoginUser={setLoginUser}/>}></Route>
    <Route exact path='/Registro' element={<RegistroUnido/>}></Route>
   </Routes>
   </>
  )
}



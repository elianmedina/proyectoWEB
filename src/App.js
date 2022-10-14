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
//daniel

export const App = () => {
  
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Principal/>}></Route>
    <Route exact path='/Tiendas' element={<Tiendas/>}></Route>
    <Route exact path='/Comidas' element={<Comidas/>}></Route>
    <Route exact path='/Hamburguesa3D' element={<Hamburguesa3D/>}></Route>
    <Route exact path='/Contacto' element={<Contacto/>}></Route>
    <Route exact path='/Chat' element={<Chat/>}></Route>
    <Route exact path='/Informacion' element={<Informacion/>}></Route>
    <Route exact path='/Primer-paso-ticket' element={<PrimerPaso/>}></Route>
    <Route exact path='/Segundo-paso-ticket' element={<SegundoPaso/>}></Route>
    <Route exact path='/Menu' element={<Menu/>}></Route>
    <Route exact path='/Carrito' element={<Carrito/>}></Route>
    <Route exact path='/Login' element={<LoginUnido/>}></Route>
    <Route exact path='/Registro' element={<RegistroUnido/>}></Route>
   </Routes>
   </>
  )
}



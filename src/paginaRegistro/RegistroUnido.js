import './RegistroUnido.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'

import { Register } from './Register'
export const RegistroUnido = () => {

  

   
    return (
        <>

            <div id='fondoPrincipal'>
                
                <h1 id='textoAclarador'>REGISTRO</h1>
                
                
                <Register/>
               
               
            </div>
            
          

            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
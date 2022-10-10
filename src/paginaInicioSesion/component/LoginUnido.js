import './LoginUnido.css'
import { NavBar } from './NavBar'
import { NavBarUp } from './NavBarUp'
import imagenInfoMenu1 from './img/mcdonald.png'
import imagenComida1 from './img/MCBURGERCHEESE.jpg'
import imagenComida2 from './img/coca.jpg'
import imagenComida3 from './img/sprite.jpg'
import { Login } from './Login'
export const LoginUnido = () => {

    
    return (
        <>

            <div id='fondoPrincipal'>
                
                <h1 id='textoAclarador'>LOGIN</h1>
                
                
                <Login/>
               
               
            </div>
            
          

            <NavBarUp />
            <NavBar />

        </>
    ) /* AL VIDEO LE FALTA EL SRC*/
}
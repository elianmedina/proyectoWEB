import './NavBar.css'
import imagenHome from './img/home.svg'
import imagenStore from './img/store.svg'
import imagenFood from './img/food.svg'
import imagenAsesoria from './img/asesoria.svg'
import imagenInfo from './img/info.svg'


export const NavBar = () => {


    return (
        <>

            <div id="fondo">
                <div id='rectIconos' />



                <img src={imagenHome} id='imagenhome' button/>


                <img src={imagenStore} id='imagenstore' button/>



                <img src={imagenFood} id='imagenfood' button/>

                <img src={imagenAsesoria} id='imagenasesoria' button/>


                <img src={imagenInfo} id='imageninfo' button/>

            </div>

        </>
    )

}

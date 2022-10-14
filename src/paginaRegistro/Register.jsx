import { useState } from "react"
import "./Register.css"
import {createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../paginaInicioSesion/component/config"
import { useRef } from "react"
export const Register = ()=>{
    
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState({})
    const refCorreo = useRef(null)
    const refPassword = useRef(null)

    onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
    })

    const logOut = async() =>{
        await signOut(auth);
        console.log(user)

    }
    const register = async()=>{

        try{
            const user = await createUserWithEmailAndPassword(auth, refCorreo.current.value, refPassword.current.value);
            console.log(user.displayName)
        } catch(error){
            console.log(error.message);
        }}
        

    
    return(<>
        <div>
            <div id="login">
                <h3 id='iniciaSESIONTEXTO'>REGÍSTRATE</h3>
                <h4 id='nombreCompletoTEXTO'>Nombre Completo:</h4>
                <input placeholder="Nombre completo" id="nombre" /> {/* ASIGNARLE UNA REFnombre*/}

                <h4 id='correoElectronicoTEXTO'>Correo electrónico:</h4>
                <input placeholder="Email" id="email3" ref={refCorreo}/>

                <h4 id='CONTRASEnaTTEXTO'>Contraseña:</h4>
                <input id="password3" placeholder="Contraseña" ref={refPassword}/>
                <button id="iniciar3" onClick={register}><span id="textRegister">REGISTRARME</span></button>
            </div>
            <div>
                {/* Log out/Cerrar sesioon */}
                {user?.email}
                <button  onClick={logOut}>Salir de la cuenta</button>
            </div>
            
        </div>
    
    </>)
}
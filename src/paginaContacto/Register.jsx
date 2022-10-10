import { useState } from "react"
import "./Register.css"
import {createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, signOut} from "firebase/auth"
import {auth} from "./config.js"
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
        <div id="fondoPrincipal">
            <div id="register">
                <h3>Register</h3>
                <input placeholder="Email" id="email" ref={refCorreo}/>
                <input id="password" placeholder="Password" ref={refPassword}/>
                <button id="iniciar" onClick={register}><span id="textRegister">Registrarse</span></button>
            </div>
            <div>
                {/* Log out/Cerrar sesioon */}
                {user.email}
                <button  onClick={logOut}>Log Out</button>
            </div>
            
        </div>
    
    </>)
}
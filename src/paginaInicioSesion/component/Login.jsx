import { useState } from "react"
import "./Login.css"
import {
    createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, signOut
} from "firebase/auth"
import { auth } from "./config.js"
import { useRef } from "react"
import { async } from "@firebase/util"
export const Login = () => {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState({})
    const refCorreo = useRef(null);
    const refPassword = useRef(null);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, refCorreo.current.value, refPassword.current.value);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }
    const logOut = async () => {
        await signOut(auth);
        console.log(user)

    }
    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }



    return (<>
        <div id="Menu_login">
            <div id="login">
                <h3 id='iniciaSESIONTEXTO'>INICIA SESIÓN</h3>

                <h4 id='CorreoElectronicoTEXTO'>Correo Electrónico:</h4>
                <input ref={refCorreo} id="email" placeholder="Email" type={"email"} />

                <h4 id='ContrasenaTEXTO'>Contraseña:</h4>
                <input ref={refPassword} id="password2" placeholder="Contraseña" />
                <button id="iniciar2" onClick={login}><span id="textLogin">INICIAR SESIÓN</span></button>
            </div>

            <div>
                {/* <h2>Usuario actual</h2> */}
                {user?.email}
                <button onClick={logOut}>Log Out</button>
            </div>

        </div>

    </>)
}
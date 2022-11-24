import { useState } from "react"
import "./Login.css"
import {
    createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, signOut
} from "firebase/auth"
import { auth } from "./config.js"
import { useRef } from "react"
import { async } from "@firebase/util"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export const Login = ({ setLoginUser }) => {


let navigate = useNavigate()
const [user , setUser] = useState({
    email: "",
    password: ""
   })

   const handleChange = e => {
    
    const {name, value} = e.target
    setUser({
        ...user,
        [name]:value
    })

    
   }
    const [userName, setUserName] = useState("")

   const login = () =>{
    axios.post("http://localhost:9001/Login", user)
    .then(res => {
        alert(res.data.message)  
        setLoginUser(res.data.user)   
        navigate("/")
        setUserName(res.data.user.name)
        console.log(res.data.user.name)
        
    })
  
    
   
    
}
    return (<>
        <div id="Menu_login">
            <div id="login">
                {console.log("User", user)}
                <h3 id='iniciaSESIONTEXTO'>INICIA SESIÓN</h3>

                <h4 id='CorreoElectronicoTEXTO'>Correo Electrónico:</h4>
                <input value={user.email} name="email" type="email" id="email" placeholder="Escribe aquí tu email" onChange={handleChange}/>

                <h4 id='ContrasenaTEXTO'>Contraseña:</h4>
                <input value={user.password} name="password" type="password" id="password2" placeholder="Escribe aquí tu contraseña"  onChange={handleChange}/>
                <button id="iniciar2" onClick={login}><span id="textLogin">INICIAR SESIÓN</span></button>
            </div>

          

        </div>

    </>)
}
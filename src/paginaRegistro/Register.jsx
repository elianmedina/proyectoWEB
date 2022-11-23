import { useState } from "react"
import "./Register.css"
import {createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "../paginaInicioSesion/component/config"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Register = ()=>{
 
     let navigate = useNavigate()
   const [user , setUser] = useState({
    name:"",
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

   const register = () =>{
    const {name, email,password}= user
    if(name && email && password){
        
      axios.post("http://localhost:9001/Registro", user)

      .then(res=>{
        alert(res.data.message)
        navigate("/Login")
    }) 
    }else{
        alert("Datos inválidos")
    }
    
   }
    
    return(<>
        <div>
            <div id="login">
                {console.log("User", user)}
                <h3 id='iniciaSESIONTEXTO'>REGÍSTRATE</h3>
                <h4 id='nombreCompletoTEXTO'>Nombre Completo:</h4>
                <input name="name" placeholder="Escribe aquí tu nombre completo" id="nombre" value={user.name} onChange={handleChange}></input>

                <h4 id='correoElectronicoTEXTO'>Correo electrónico:</h4>
                <input name="email" placeholder="Escribe aquí tu email" id="email3" value={user.email} onChange={handleChange}></input>

                <h4 id='CONTRASEnaTTEXTO'>Contraseña:</h4>
                <input name="password" type="password" id="password3" placeholder="Escribe aquí tu contraseña" value={user.password} onChange={handleChange}></input>
                <button id="iniciar3" onClick={register}><span id="textRegister">REGISTRARME</span></button>
            </div>
         
            
        </div>
    
    </>)
}
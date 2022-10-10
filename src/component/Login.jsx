import { useState } from "react"
import "./Login.css"
import {createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, signOut} from "firebase/auth"
import {auth} from "./config.js"
export const Login = ()=>{
    
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
    })

    const login = async() =>{
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
        } catch(error){
            console.log(error.message);
        }
    } 
    const logOut = async() =>{
        await signOut(auth);
        console.log(user)

    }
    const register = async()=>{

        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        } catch(error){
            console.log(error.message);
        }}
        

    
    return(<>
        <div>
            <div id = "login">
                <h3>Login</h3>
                <input id="email" placeholder="Email" type={"email"} onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}/>
                <input id = "password" placeholder="Password" onChange={(event) => {
                    setLoginPassword(event.target.value);
                }}/>
                <button id = "iniciar"onClick={login}><span id ="textLogin">Login</span></button>
            </div>
            <div>
                <h3>Register</h3>
                <input placeholder="Email" onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}/>
                <input placeholder="Password" onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}/>
                <button onClick={register}>Register</button>
            </div>
            <div>
                <h2>Usuario actual</h2>
                {user.email}
                <button onClick={logOut}>Log Out</button>
            </div>
            
        </div>
    
    </>)
}
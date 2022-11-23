import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express();

app.use(express.json());

app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://admin:Adaly132-@cluster0.r2msmgy.mongodb.net/", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () => {
    console.log("DB connected")
})

const userSchema =new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes

app.post("/Login", (req,res)=>{
    const {email, password} = req.body
    User.findOne({email:email}, (err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Inicio de sesión exitoso", user: user})
            }else{
                res.send({message:"Contraseña incorrecta"})
            }
        }else{
            res.send({message:"Usuario no registrado"})
        }
    })
})
app.post("/Registro", (req,res)=>{
    const {name, email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"Usuario ya está registrado"})
            console.log("Usuario ya está registrado")
        }else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Registro completado con éxito, ahora inicia sesión"})
                    console.log("Registro completado con éxito")
                }
            })
        }
    })
   
})
app.listen(9001,()=>{//ES CAMBIAR EL PUERTO PARA SEGUI PROBANDO COSAS
    console.log("Se inició en el puerto 9001")
})
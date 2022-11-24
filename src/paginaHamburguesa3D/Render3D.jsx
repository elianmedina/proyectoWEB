
import React from "react"
import { useCallback } from "react"
import { useState } from "react"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { Scene, Vector3 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export const Render3D = () =>{
    const newMaterialMeat = new THREE.MeshBasicMaterial({color:0x57140f })
    const newMaterial1 = new THREE.MeshBasicMaterial({color:0xE5AF74})


    const[distancia, setDistancia] = useState(0)
    const [hamburguesa, setHamburguesa] = useState({
        Meat:0,
        Veg:0,
        Tomatoe:0,
        Cheese:0,
        TopBread:0,
        Bread:1
    })
    const [ingrediente, setIngrediente] = useState({
        nombre:"Bread",
        posision: new THREE.Vector3()
    })

    const gltfLoader = new GLTFLoader()
    const scene = new Scene()
    // scene.fog = 1
   

    const mountRef = useRef(null)
    useEffect(() =>{
        const currentMount = mountRef.current

        
        const camera = new THREE.PerspectiveCamera(
            25,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000 
        )
        camera.position.z = 8
        camera.position.y = -3

        scene.add(camera)

        //renderer

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(currentMount.clientWidth, 
                        currentMount.clientHeight)

        currentMount.appendChild(renderer.domElement)

        //controls 
        const controls = new OrbitControls(camera, renderer.domElement)

        controls.update()
        

        //cube 
        // const cube = new THREE.Mesh(
        //     new THREE.BoxGeometry(1,1,1),
        //     new THREE.MeshBasicMaterial()
        // )

        // scene.add(cube)

        //Lights
        const AO = new THREE.AmbientLight(0xf4fe62, 4)
        scene.add(AO)
        var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        camera.add( pointLight );

        //Loader 

        gltfLoader.load('./modelos3D/Bread.gltf',
            (gltf)=>{
                var model1 = gltf.scene
                model1.position.y = -1

                
                model1.traverse((o) =>{
                    if(o.isMesh) o.material = newMaterial1 
                })

                var v = new THREE.Vector3(model1.position.x, -1, model1.position.z)
                ingrediente.nombre = "Bread"
                ingrediente.posision = v
                setIngrediente(ingrediente)
                scene.add(gltf.scene)
                console.log(v)
                console.log(ingrediente)
            },
            ()=>{},
            ()=>{
                console.log("error cargando modelo")
            })
        
        
        

        

        //Render scene 
        const animate = () =>{
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
            controls.update()
        }
        animate()
        

        //clean scene
        return() =>{
            currentMount.removeChild(renderer.domElement)
        }



    }, [])

    //Funiciones para determinar espacio entre objetos
    


    //funcion botones
    const addElement = useCallback((elemento) =>{

        const determinarDistanciaMeat = (elemento) =>{
            console.log(elemento)
    
            switch(elemento){
                case "Bread":setDistancia(0.025)
                            
                case "Meat":var d=0.025
                            setDistancia(d)
                case "Tomatoe":var d=0.025
                setDistancia(d)
                case "Cheese":var d=0.025
                setDistancia(d)
                case "Veg":var d=0.025
                setDistancia(d)
            }
        }

        
        
        if (hamburguesa[elemento] < 1 && hamburguesa.TopBread < 1){
            hamburguesa[elemento] +=1
            var path = './modelos3D/'+elemento+'.gltf'

            switch(elemento){
                case "Meat":
                    determinarDistanciaMeat(ingrediente["nombre"])
                    gltfLoader.load(path,
                        (gltf)=>{

                            var modelMeat = gltf.scene
                            // modelMeat.updateMatrix()
                            var ori = ingrediente["posision"].y
                            console.log(distancia)
                            modelMeat.position.y += (ori + distancia)
                            
            
                            
                            modelMeat.traverse((o) =>{
                                if(o.isMesh) o.material = newMaterialMeat 
                            })
                            var v1 = new THREE.Vector3(modelMeat.position.x, modelMeat.position.y, modelMeat.position.z)
                            ingrediente.nombre = elemento
                            ingrediente.posision = v1
                            
                            setIngrediente(ingrediente)
                            console.log(ingrediente)
                            scene.add(gltf.scene)

                        },
                        ()=>{},
                        ()=>{
                            console.log("error cargando modelo")
                        })
                    break
                case "Tomatoe":
                    gltfLoader.load(path,
                        (gltf)=>{

                            var modelTomatoe = gltf.scene
                            modelTomatoe.position.y = ingrediente.posision.y + distancia
            
                            var newMaterialTom = new THREE.MeshBasicMaterial({color:0xf60404 })
                            modelTomatoe.traverse((o) =>{
                                if(o.isMesh) o.material = newMaterialTom 
                            })
                            var v2 = new THREE.Vector3(modelTomatoe.position.x, modelTomatoe.position.y, modelTomatoe.position.z)
                            ingrediente.nombre = elemento
                            ingrediente.posision = v2
                            scene.add(gltf.scene)
                            setIngrediente(ingrediente)
                            console.log(ingrediente)

                        },
                        ()=>{},
                        ()=>{
                            console.log("error cargando modelo")
                        })
                    break
                case "Veg":
                    gltfLoader.load(path,
                        (gltf)=>{
                            
                            var modelVeg = gltf.scene
                            modelVeg.position.y = ingrediente.posision.y + distancia
            
                            var newMaterialVeg = new THREE.MeshBasicMaterial({color:0x72fb28 })
                            modelVeg.traverse((o) =>{
                                if(o.isMesh) o.material = newMaterialVeg 
                            })
                            var v3 = new THREE.Vector3(modelVeg.position.x, modelVeg.position.y, modelVeg.position.z)
                            ingrediente.nombre = elemento
                            ingrediente.posision = v3
                            scene.add(gltf.scene)
                            setIngrediente(ingrediente)
                            console.log(ingrediente)

                        },
                        ()=>{},
                        ()=>{
                            console.log("error cargando modelo")
                        })
                    break
                case "Cheese":
                    gltfLoader.load(path,
                        (gltf)=>{

                            var modelChee = gltf.scene
                            modelChee.position.y = ingrediente.posision.y + distancia
            
                            var newMaterialChee = new THREE.MeshBasicMaterial({color:0xac9b2a })
                            modelChee.traverse((o) =>{
                                if(o.isMesh) o.material = newMaterialChee 
                            })
                            var v4 = new THREE.Vector3(modelChee.position.x, modelChee.position.y, modelChee.position.z)
                            ingrediente.nombre = elemento
                            ingrediente.posision = v4
                            scene.add(gltf.scene)
                            setIngrediente(ingrediente)
                            console.log(ingrediente)

                        },
                        ()=>{},
                        ()=>{
                            console.log("error cargando modelo")
                        })
                    break
                case "TopBread":
                    gltfLoader.load(path,
                        (gltf)=>{
                            
                            var modelTop = gltf.scene
                            modelTop.position.y = ingrediente.posision.y + distancia
            
                            var newMaterialTop = new THREE.MeshBasicMaterial({color:0xE5AF74 })
                            modelTop.traverse((o) =>{
                                if(o.isMesh) o.material = newMaterialTop 
                            })
                            var v5 = new THREE.Vector3(0, modelTop.position.y, 0)
                            ingrediente.nombre = elemento
                            ingrediente.posision = v5
                            scene.add(gltf.scene)
                            setIngrediente(ingrediente)
                            console.log(ingrediente)

                        },
                        ()=>{},
                        ()=>{
                            console.log("error cargando modelo")
                        })
                    break
            }
        }else{
            console.log(hamburguesa[elemento]+ "no se puede mas")
        }
        
        // console.log(ingrediente)

    })

    const eliminar = () =>{
        const h = new hamburguesa(0,0,0,0,0,1)
        setHamburguesa(h)
        while(scene.children.length > 3){ 
            scene.remove(scene.children[0]); 
        }
    }


    return (
        <>
        <div className="render"
        style={{widt:'100%', height:'100%'}}
        ref={mountRef}>
        </div>
        <div id="separacionbotonhamburguesa3d"></div>
        <button id="botonhamburguesa3d" name="button">HACER PEDIDO</button>
        
        <button id="card1" onClick={()=>addElement("Meat")}><h1>carne</h1></button>
        <button id="card2" onClick={()=>addElement("Tomatoe")}><h1>Tomate</h1></button>
        <button id="card3" onClick={()=>addElement("Veg")}><h1>Vegetales</h1></button>
        <button id="card4" onClick={()=>addElement("Cheese")}><h1>Queso</h1></button>
        <button id="card5" onClick={()=>addElement("TopBread")}><h1>Pan</h1></button>
        <button id="card6" onClick={()=>eliminar()}><h1>Eliminar</h1></button>
        </>

    )


}
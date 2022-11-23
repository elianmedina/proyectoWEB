
import React from "react"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { Scene } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export const Render3D = () =>{

    const mountRef = useRef(null)
    useEffect(() =>{
        const currentMount = mountRef.current

        const scene = new Scene()
        const camera = new THREE.PerspectiveCamera(
            25,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000 
        )
        camera.position.z = 4

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
        const AO = new THREE.AmbientLight(0x404040, 4)
        scene.add(AO)

        //Loader 
        const gltfLoader = new GLTFLoader()
        gltfLoader.load('./modelos3D/Meat.gltf',
            (gltf)=>{
                scene.add(gltf.scene)
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

    return (
        <>
        <div className="render"
        style={{widt:'100%', height:'100%'}}
        ref={mountRef}>
        </div>
        <div id="separacionbotonhamburguesa3d"></div>
        <button id="botonhamburguesa3d" name="button">HACER PEDIDO</button>
        
        <div id="card1"></div>
        <div id="card2"></div>
        <div id="card3"></div>
        <div id="card4"></div>
        <div id="card5"></div>
        <div id="card6"></div>
        </>

    )


}
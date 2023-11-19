
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Model} from '@/components/Table'

function Tp1() {
  return (

    <div>
        <Canvas
          camera={{ position: [-10, 5, 7] }}
          style={{ width: "1280px", height: "720px" }}
        >
          
          <ambientLight intensity={0.5} />
          
          <directionalLight position={[20, 10, 10]} intensity={1} />
          <directionalLight position={[0, 0, 0]} intensity={1} />
          <directionalLight position={[-10, -10, -10]} intensity={1} />
          <directionalLight position={[-20, -20, -20]} intensity={1} />
          
          <pointLight position={[10, 10, 10]} />
          <Model /> 
          <OrbitControls />
        </Canvas>
    </div>
    
  )
}

export default Tp1
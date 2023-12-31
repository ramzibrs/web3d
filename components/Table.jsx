/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 TP1.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/TP1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[0, 4.828, -12.641]} scale={[7.249, 0.206, 4.117]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials.Material} position={[-7.532, 3.104, -12.699]} rotation={[Math.PI, -1.56, Math.PI]} scale={[1.657, 0.089, 1.696]} />
      <mesh geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} position={[-8.787, 5.153, -12.713]} rotation={[Math.PI, -1.56, Math.PI]} scale={[1.699, 0.598, 0.25]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Material} position={[0.036, 3.059, -18.674]} rotation={[-Math.PI, 0.001, -Math.PI]} scale={[1.657, 0.089, 1.696]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.002']} position={[0.037, 5.108, -19.929]} rotation={[-Math.PI, 0.001, -Math.PI]} scale={[1.699, 0.598, 0.25]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Material} position={[8.269, 3.067, -12.779]} rotation={[0, 1.567, 0]} scale={[1.657, 0.089, 1.696]} />
      <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[9.524, 5.116, -12.774]} rotation={[0, 1.567, 0]} scale={[1.699, 0.598, 0.25]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.Material} position={[0.036, 3.059, -18.674]} rotation={[-Math.PI, 0.001, -Math.PI]} scale={[1.657, 0.089, 1.696]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials.Material} position={[0.037, 3.051, -6.53]} rotation={[0, -0.004, 0]} scale={[1.657, 0.089, 1.696]} />
      <mesh geometry={nodes.Cube010.geometry} material={nodes.Cube010.material} position={[0.031, 5.1, -5.275]} rotation={[0, -0.004, 0]} scale={[1.699, 0.598, 0.25]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials.Material} position={[0.037, 3.051, -6.53]} rotation={[0, -0.004, 0]} scale={[1.657, 0.089, 1.696]} />
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[0, -2.485, 4.595]} scale={[53.926, 1, 63.932]} />
    </group>
  )
}

useGLTF.preload('/TP1.glb')

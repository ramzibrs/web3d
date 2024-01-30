/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { MeshStandardMaterial } from "three"; // Import MeshStandardMaterial from three.js

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/scene.glb");
  const { actions } = useAnimations(animations, group);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Plane" />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={new MeshStandardMaterial({ color: 0x00ff00 })} // Green color
          position={[-4.038, 1.499, 0]}
          scale={0.295}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={new MeshStandardMaterial({ color: 0x3366ff })} // Replaced with a shade of blue
          position={[-0.01, 0, 0]}
          scale={19.749}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={new MeshStandardMaterial({ color: 0x99ccff })} // Light blue color
          position={[3.432, -0.499, 0]}
          scale={[0.805, 1.39, 1.595]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={new MeshStandardMaterial({ color: 0xffff00 })} // Yellow color
          position={[-3.74, 1.499, 0]}
          scale={0.295}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.003"]}
          position={[-3.74, 1.499, 0]}
          scale={0.295}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.003"]}
          position={[-4.038, 1.499, 0]}
          scale={0.295}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.003"]}
          position={[-4.038, 1.499, 0]}
          scale={0.295}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.003"]}
          position={[-4.038, 1.499, 0]}
          scale={0.295}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.003"]}
          position={[-4.038, 1.499, 0]}
          scale={0.295}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.003"]}
          position={[-4.038, 1.499, 0]}
          scale={0.295}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.005"]}
          position={[-21.482, 4.227, 4.159]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.glb");
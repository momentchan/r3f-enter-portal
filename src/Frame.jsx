import * as THREE from 'three'
import { MeshPortalMaterial, RoundedBox } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";
import { useRef } from 'react';
extend(geometry)

export default function Frame({ id, name, width = 1, height = 1.61803398875, children, ...props }) {
    const portal = useRef()

    return <>
        <group {...props}>
            <mesh>
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial ref={portal} side={THREE.DoubleSide}>
                    {children}
                </MeshPortalMaterial>
            </mesh>
        </group>
    </>
}
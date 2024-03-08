import { Canvas } from '@react-three/fiber'
import Frame from "./Frame";
import { Gltf, OrbitControls } from "@react-three/drei";
import CameraMotion from "./CameraMotion";

export default function App() {
    return <>
        <Canvas
            camera={{ fov: 75, position: [0, 0, 20] }}
            eventSource={document.getElementById('root')}
            eventPrefix='client'>

            <color attach={'background'} args={['#f0f0f0']} />

            <Frame id="01" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
                <Gltf src="pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
            </Frame>
            <Frame id="02" name="tea" author="Omar Faruq Tawsif">
                <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, -3]} />
            </Frame>
            <Frame id="03" name="still" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]}>
                <Gltf src="still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
            </Frame>

            <CameraMotion />

        </Canvas>
    </>
}
import { Canvas } from '@react-three/fiber'
import Frame from "./Frame";
import { Gltf, OrbitControls } from "@react-three/drei";
import CameraMotion from "./CameraMotion";

export default function App() {
    return <>
        <Canvas
            shadows
            camera={{
                fov: 75,
                position: [0, 0, 20]
            }}>

            <color attach={'background'} args={['#f0f0f0']} />

            <Frame>
                <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, 3]} />
            </Frame>

            <CameraMotion />

        </Canvas>
    </>
}
import { Gltf, OrbitControls } from "@react-three/drei";
import Frame from "./Frame";
import CameraMotion from "./CameraMotion";

export default function Experience() {
    return <>

        <color attach={'background'} args={['#f0f0f0']} />

        <Frame>
            <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, 3]} />
        </Frame>
        
        <CameraMotion />
    </>
}
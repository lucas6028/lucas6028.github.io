import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Define the props for the Ball component
interface BallProps {
  imgUrl: string;
}

// Ball component that renders a 3D ball with a decal texture
const Ball = (props: BallProps) => {
  // Load the texture from the provided image URL
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Float component to add floating animation to the ball
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />{" "}
      {/* Ambient light for general illumination */}
      <directionalLight position={[0, 0, 0.05]} />{" "}
      {/* Directional light for shading */}
      <mesh receiveShadow castShadow scale={2.75}>
        {" "}
        {/* Mesh for the ball */}
        <icosahedronGeometry args={[1, 1]} /> {/* Geometry of the ball */}
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />{" "}
        {/* Material of the ball */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />{" "}
        {/* Decal texture on the ball */}
      </mesh>
    </Float>
  );
};

// Define the props for the BallCanvas component
interface BallCanvasProps {
  icon: string;
}

// BallCanvas component that sets up the 3D canvas and renders the Ball component
const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        {" "}
        {/* Suspense for lazy loading */}
        <OrbitControls enableZoom={false} />{" "}
        {/* Orbit controls for rotating the view */}
        <Ball imgUrl={icon} />{" "}
        {/* Render the Ball component with the provided icon */}
      </Suspense>
      <Preload all /> {/* Preload all assets */}
    </Canvas>
  );
};

export default BallCanvas;

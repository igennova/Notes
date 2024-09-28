import { useAnimations, useGLTF, OrbitControls } from "@react-three/drei"; // Import OrbitControls
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/3d/book.glb";

const Book1 = ({ scale, position }) => {
    const spacemanRef = useRef();
    const { scene, animations } = useGLTF(spacemanScene);
    const { actions } = useAnimations(animations, spacemanRef);
  
    useEffect(() => {
      if (actions && actions["Idle"]) {
        actions["Idle"].play();
      }
    }, [actions]);
  
    return (
      <mesh ref={spacemanRef} position={position} scale={scale} rotation={[0, 50, 0]}>
        <primitive object={scene} />
      </mesh>
    );
};

const Book = ({ scrollContainer }) => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [scale, setScale] = useState([1, 1, 1]); // Start with a larger scale
    const [position, setPosition] = useState([0, 0, 0]); // Centered position

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = scrollContainer.current.scrollTop;
            const rotationXValue = scrollTop * -0.0006;
            const rotationYValue = scrollTop * -0.00075;
            setRotationX(rotationXValue);
            setRotationY(rotationYValue);
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScale([0.5, 0.5, 0.5]); // Larger scale for smaller screens
                setPosition([0, -0.2, 0]); 
            } else if (window.innerWidth < 1024) {
                setScale([0.8, 0.8, 0.8]); // Slightly larger scale
                setPosition([0, -0.3, 0]);
            } else if (window.innerWidth < 1280) {
                setScale([1, 1, 1]); // Standard scale
                setPosition([0, -0.4, 0]);
            } else if (window.innerWidth < 1536) {
                setScale([1.2, 1.2, 1.2]); // Larger scale
                setPosition([0, -0.5, 0]);
            } else {
                setScale([2.5, 2.5, 2.5]); // Maximum scale
                setPosition([  0, -0.7, 0]);
            }
        };

        handleResize();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [scrollContainer]);

    return (
        <Canvas className="relative h-screen w-full" camera={{ position: [0, 50, 120], near: 0.1, far: 1000 }}> {/* Adjusted camera position */}
            <Suspense>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                
                {/* Add OrbitControls to enable cursor-based rotation */}
                <OrbitControls autoRotate autoRotateSpeed={0.6} />
                
                <Book1 rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
            </Suspense>
        </Canvas>
    );
};

export default Book;

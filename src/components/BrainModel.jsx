import { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useModelContext } from "../ModelContext";

const Wrapper = styled.div`
  max-width: 70%;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 50vh;
  }
`;
export const BrainModel = () => {
  const object = useLoader(OBJLoader, "/models/brain.obj");
  const [clickedPart, setClickedPart] = useState(null);
  const { brainPart, selectBrainPart } = useModelContext();

  // Define colors for areas based on design
  const areaColors = {
    eye: "#c7b8f5", // Light Purple (similar to nucleo)
    nerve: "#f6d06c", // Yellow (similar to testiculos)
    globus: "#d6e9c6", // Light Green (similar to torus)
    thalamus: "#f9c5d5", // Light Pink (similar to dendritas)
    cerebellum: "#f6d06c", // Yellow (testiculos variant)
    reticular: "#c7b8f5", // Light Purple (nucleo variant)
    encephalon: "#d6e9c6", // Light Green (torus variant)
    limbic: "#f9c5d5", // Light Pink (dendritas variant)
    gyrus: "#f6d06c", // Yellow (testiculos variant)
    stalk: "#d8d8d8", // Light Gray (default)
    encephalon001: "#d6e9c6", // Light Green (torus variant)
    hypothalamus: "#c7b8f5", // Light Purple (nucleo variant)
    midbrain: "#f9c5d5", // Light Pink (dendritas variant)
    medulla: "#d6e9c6",
    pons: "#f6d06c",
    corpus: "#c7b8f5",
    default: "#d8d8d8",
  };

  const clonedObject = object.clone();

  clonedObject.traverse((child) => {
    if (child.isMesh) {
      if (!child.name) {
        child.name = `unnamed`;
      }

      child.name = child.name.split("_")[0].replace(/[0-9]/g, "").toLowerCase();

      child.material = child.material.clone();
      const color = areaColors[child.name] || areaColors.default;

      child.material.transparent = true;
      child.material.opacity = clickedPart === child.name ? 0.8 : 0.5; // Highlight when clicked
      child.material.color.set(color); // Set color from areaColors
    }
  });

  const onClick = (e) => {
    e.stopPropagation();
    setClickedPart(e.object.name);
    selectBrainPart(e.object.name);
  };

  useEffect(() => {
    if (brainPart && brainPart !== clickedPart) {
      setClickedPart(brainPart); // Sync local state with context when brainPart changes
    }
  }, [brainPart]);

  return (
    <Wrapper id="brain">
      <Canvas
        shadows
        camera={{
          position: [2000, 600, 100],
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <hemisphereLight
          skyColor={"#ffffff"}
          groundColor={"#444444"}
          intensity={0.9}
        />

        <primitive
          object={clonedObject}
          scale={[0.5, 0.5, 0.5]}
          onClick={(e) => onClick(e)}
        />

        <OrbitControls minDistance={120} maxDistance={120} />
      </Canvas>
    </Wrapper>
  );
};

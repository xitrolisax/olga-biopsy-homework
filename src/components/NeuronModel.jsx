import { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useModelContext } from "../ModelContext";

const Wrapper = styled.div`
  width: 100%;
  max-width: 70%;
  height: 100vh;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 50vh;
  }
`;

export const NeuronModel = () => {
  const object = useLoader(OBJLoader, "/models/neuron.obj");
  const [clickedPart, setClickedPart] = useState(null);
  const { neuronPart, selectNeuronPart } = useModelContext();

  // Define colors for the model parts
  const areaColors = {
    nucleo: "#c7b8f5",
    testiculos: "#f6d06c",
    torus: "#d6e9c6",
    dendritas: "#f9c5d5",
    default: "#d8d8d8",
  };

  const clonedObject = object.clone();

  clonedObject.traverse((child) => {
    child.name = child.name.split("_")[0].toLowerCase();

    if (child.isMesh) {
      child.material = child.material.clone();
      const color = areaColors[child.name] || areaColors.default;

      // Highlight the selected part
      child.material.transparent = true;
      child.material.opacity = clickedPart === child.name ? 0.8 : 0.5;
      child.material.color.set(color);
    }
  });

  const onPointerOver = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
  };

  const onPointerOut = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "grab";
  };

  const onClick = (e) => {
    e.stopPropagation();
    const partName = e.object.name;

    if (clickedPart !== partName) {
      setClickedPart(partName); // Update local state
      selectNeuronPart(partName); // Update global context
    }
  };

  useEffect(() => {
    if (neuronPart !== clickedPart) {
      setClickedPart(neuronPart); // Sync local state with context
    }
  }, [clickedPart, neuronPart]);

  return (
    <Wrapper id="neuron">
      <Canvas
        shadows
        camera={{
          position: [3000, 600, 100],
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1.5} castShadow />
        <primitive
          object={clonedObject}
          scale={[0.5, 0.5, 0.5]}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        />
        <OrbitControls minDistance={850} maxDistance={850} />
      </Canvas>
    </Wrapper>
  );
};

import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [neuronPart, setNeuronPart] = useState(null);
  const [brainPart, setBrainPart] = useState(null);

  const selectNeuronPart = (part) => setNeuronPart(part);
  const selectBrainPart = (part) => setBrainPart(part);

  return (
    <ModelContext.Provider
      value={{
        neuronPart,
        brainPart,
        selectNeuronPart,
        selectBrainPart,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export const useModelContext = () => useContext(ModelContext);

ModelProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

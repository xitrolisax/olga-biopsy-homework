import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useModelContext } from "../ModelContext";

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const AccordionItemWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 15px #6666772b;
`;

const AccordionButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: ${({ isOpen }) => (isOpen ? "8px 8px 0 0" : "8px")};
  cursor: pointer;
  transition: background-color 0.2s, border-radius 0.2s;
  font-weight: bold;
  appearance: none;
  outline: none;

  &:hover {
    background-color: #f5f1ff;
  }

  &:active,
  &:focus {
    outline: none;
    appearance: none;
  }
`;

const AccordionContent = styled.div`
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 8px 8px;
  border-top: 1px solid #f5f1ff;
`;

export const Accordion = ({ sections = [] }) => {
  const { neuronPart, brainPart, selectNeuronPart, selectBrainPart } =
    useModelContext();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Check if any section id matches the selected neuron or brain part
    const matchingIndex = sections.findIndex(
      (section) => section.id === neuronPart || section.id === brainPart
    );
    if (matchingIndex !== -1) {
      setOpenIndex(matchingIndex);
    }
  }, [neuronPart, brainPart, sections]);

  const handleToggle = (index, id, type) => {
    setOpenIndex(openIndex === index ? null : index);

    if (type === "neuron") {
      selectNeuronPart(id);
    } else {
      selectBrainPart(id);
    }
  };

  return (
    <AccordionWrapper>
      {Array.isArray(sections) &&
        sections.map((section, index) => (
          <AccordionItem
            key={index}
            title={section.title}
            content={section.content}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index, section.id, section.type)}
          />
        ))}
    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <AccordionItemWrapper>
      <AccordionButton isOpen={isOpen} onClick={onToggle}>
        {title}
      </AccordionButton>
      {isOpen && (
        <AccordionContent>
          <p>{content}</p>
        </AccordionContent>
      )}
    </AccordionItemWrapper>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

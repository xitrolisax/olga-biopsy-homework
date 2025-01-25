import styled from "styled-components";
import PropTypes from "prop-types";

const FlexContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const FlexContainer = ({ children }) => {
  return <FlexContainerStyle>{children}</FlexContainerStyle>;
};

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

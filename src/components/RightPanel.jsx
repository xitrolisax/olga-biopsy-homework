import styled from "styled-components";
import PropTypes from "prop-types";

const RightPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  max-width: calc(30%-20px);
  height: 75vh;
  cursor: default;
  border-radius: 30px;
  box-shadow: 0px 0px 15px #6666772b;
  background-color: rgba(250, 248, 248, 0.7);
  padding: 30px 20px;
  overflow: scroll;

  * {
    margin: 0px;
    line-height: 100%;
    color: #213547;
  }

  p {
    line-height: 130%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 50vh;
  }
`;

export const RightPanel = ({ children }) => {
  return <RightPanelStyle>{children}</RightPanelStyle>;
};

RightPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

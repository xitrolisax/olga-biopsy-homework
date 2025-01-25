import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: relative; /* Устанавливаем для использования абсолютного позиционирования */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  border-radius: 50px;
  background-color: rgba(250, 248, 248, 0.6);
  font-family: "Inter", sans-serif;
  width: 90%;
  margin: 0px auto;
  position: sticky;
  top: 20px;
  z-index: 100;
  box-shadow: 0px 0px 15px #6666772b;

  @media (max-width: 800px) {
    padding: 10px 15px;
  }
`;

const Logo = styled.a`
  font-size: 20px;
  font-weight: 900;
  color: #213547;
  &:hover,
  &:active {
    color: #213547; /* Сиреневый при наведении */
  }

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const Nav = styled.nav`
  position: absolute; /* Абсолютное позиционирование */
  left: 50%; /* Отталкиваемся от центра */
  transform: translateX(-50%); /* Центрируем по оси X */
  display: flex;
  gap: 50px;

  a {
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    transition: color 0.3s ease;
    color: #213547;
    &:hover {
      color: #213547;
    }

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }

  @media (max-width: 800px) {
    gap: 10px;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo href="#hero">OlgaNeely</Logo>

      <Nav>
        <a href="#neuron">Neuron</a>
        <a href="#brain">Brain</a>
      </Nav>
    </HeaderWrapper>
  );
};

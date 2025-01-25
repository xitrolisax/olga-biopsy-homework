import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 40px;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 20px 10px;
  }
`;

const Heading = styled.h1`
  font-size: 8rem;
  margin: 0px;

  @media (max-width: 800px) {
    font-size: 40px;
  }
`;

const TextWrapper = styled.div`
  padding: 20px 40px;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  gap: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 20px 0px;
  }
`;

const Subheading = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0px;
`;

const Button = styled.a`
  background-color: rgba(250, 248, 248, 0.9);
  padding: 20px 30px;
  border-radius: 50px;
  margin: auto;
  display: block;
  width: fit-content;
  font-size: 1.5rem;
  color: currentColor;
  box-shadow: 0px 0px 15px #6666772b;
  text-align: center;

  &:hover {
    color: currentColor;
  }
`;

export const Hero = () => {
  return (
    <Wrapper id="hero">
      <TextWrapper>
        <Heading>Olga&apos;s elaborate homework</Heading>
        <Subheading>
          Neuron & brain anatomy, how they work and how our behavior depends on
          them. Explore the 3D models below and click on it to find out what
          part of brain/neuron it is. Utilize the button below and the
          navigation to get to the models.
        </Subheading>
        <Button href="#neuron">Take me to 3d models!</Button>
      </TextWrapper>
    </Wrapper>
  );
};

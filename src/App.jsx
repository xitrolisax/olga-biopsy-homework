import {
  Header,
  FlexContainer,
  RightPanel,
  BrainModel,
  NeuronModel,
  Hero,
  Accordion,
} from "./components";
import styled from "styled-components";
import { neuronSectionData } from "./neuronSectionData";
import { ModelProvider } from "./ModelContext";
import { brainSectionData } from "./brainSectionData";

const Wrapper = styled.div`
  padding: 20px 30px;

  li {
    margin: 10px 0px;
  }
`;

const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 800;
`;

const Paragraph = styled.p``;

const Subheading = styled.h4`
  font-size: 1.5rem;
  font-weight: 800;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <ModelProvider>
        <FlexContainer>
          <NeuronModel />
          <RightPanel>
            <Heading>Neuron</Heading>
            <Paragraph>
              Neurons are the building blocks of the nervous system and play a
              critical role in our behavior, sense of self, and overall health.
              They form networks in the brain, with each connection contributing
              to specific brain patterns, such as writing, holding a spoon, or
              drinking. Maintaining brain and neural health is crucial for a
              good memory. Neural degradation can lead to memory-related
              illnesses like Alzheimer’s disease.
            </Paragraph>

            <Subheading>Neurons and Mental Wellbeing:</Subheading>
            <Paragraph>
              Neurons regulate neurotransmitters, which are essential for mental
              health. For example, antidepressants targeting serotonin uptake
              ensure more serotonin remains in the brain, improving mood.
              Serotoning sprays (e.g., triptans) are also used to treat
              migraines (not related to antidepressants, but related to
              serotonin).
            </Paragraph>
            <Heading>Parts of neuron</Heading>
            <Paragraph>
              Click on any part of the 3d model or on the neuron parts below to
              see the description. This panel is scrollable, ensure that you
              read all the content.
            </Paragraph>
            <Accordion sections={neuronSectionData} />
          </RightPanel>
        </FlexContainer>

        <FlexContainer>
          <BrainModel />
          <RightPanel>
            <Heading>Brain</Heading>
            <Paragraph></Paragraph>
            <Subheading>Brain Function and Aging:</Subheading>
            <ul>
              <li>
                <strong>At 20:</strong> Brain development reaches maturity.
                Problem-solving, reasoning, learning, and memory are at their
                peak.
              </li>
              <li>
                <strong>At 30:</strong> Cognitive speed and efficiency begin to
                decline slightly, but working memory—used for quick recall and
                manipulation of information—is at its best.
              </li>
              <li>
                <strong>At 40:</strong> Subtle memory changes may appear, such
                as difficulty remembering names or details. Multitasking becomes
                harder, but reasoning skills and the ability to understand
                emotions improve.
              </li>
              <li>
                <strong>At 50:</strong> Forgetfulness may increase, and
                absorbing new information becomes more challenging. Dividing
                attention between tasks becomes harder, but vocabulary and
                general knowledge improve.
              </li>
              <li>
                <strong>At 60:</strong> Memory and processing skills continue to
                decline, but vocabulary and knowledge remain stable.
              </li>
              <li>
                <strong>At 70:</strong> Working memory weakens, making tasks
                like mental calculations harder. Recalling familiar names or
                objects becomes more difficult.
              </li>
            </ul>

            <Subheading>Brain and Mental Wellbeing:</Subheading>
            <Paragraph></Paragraph>
            <Heading>
              Parts of brain (scroll down, there&apos;s more in this box)
            </Heading>
            <Paragraph>
              Click on any part of the 3d model or on the neuron parts below to
              see the description. This panel is scrollable, ensure that you
              read all the content.
            </Paragraph>
            <Accordion sections={brainSectionData} />
          </RightPanel>
        </FlexContainer>
      </ModelProvider>
    </Wrapper>
  );
};

export default App;

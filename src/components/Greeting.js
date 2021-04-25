import React from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

const StyledGreeting = styled.div`
  grid-column: 2/3;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: calc(36px + 1.5vw);
  font-weight: 600;
  line-height: 1.2;
`;

const Paragraph = styled.p`
  margin-top: 2rem;
  font-size: calc(18px + 0.5vw);
  font-weight: 300;
  line-height: 1.5;
`;

const Greeting = () => {
  const isSmallDevice = useMediaQuery({ query: "(max-width: 414px)" });

  return (
    <StyledGreeting>
      <Heading>
        Hello, <br />
        it's Hung-Chen
      </Heading>
      <Paragraph>
        I am a Frontend developer based in Berlin, {!isSmallDevice && <br />}
        helping to create meaningful experiences {!isSmallDevice && <br />}
        through web applications.
      </Paragraph>
    </StyledGreeting>
  );
};

export default Greeting;

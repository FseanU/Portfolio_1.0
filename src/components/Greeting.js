import React from "react";
import styled from "styled-components/macro";

const StyledGreeting = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Paragraph = styled.p`
  margin-top: 2rem;
`;

const Greeting = () => {
  return (
    <StyledGreeting>
      <h1>
        Hello, <br />
        it's Hung-Chen
      </h1>
      <Paragraph>
        I am a Frontend developer based in Berlin, <br />
        helping to create meaningful experiences <br />
        through web applications.
      </Paragraph>
    </StyledGreeting>
  );
};

export default Greeting;

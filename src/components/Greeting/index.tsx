import React from "react";
import { useMediaQuery } from "react-responsive";
import * as Styled from "./styles";

const Greeting = () => {
  const isSmallDevice = useMediaQuery({ query: "(max-width: 414px)" });

  return (
    <Styled.Container>
      <Styled.Heading>
        Hello, <br />
        it's Hung-Chen
      </Styled.Heading>
      <Styled.Paragraph>
        I am a Frontend developer based in Berlin, {!isSmallDevice && <br />}
        helping to create meaningful experiences {!isSmallDevice && <br />}
        through web applications.
      </Styled.Paragraph>
    </Styled.Container>
  );
};

export default Greeting;

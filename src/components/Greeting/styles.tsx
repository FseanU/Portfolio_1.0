import styled from "styled-components/macro";

const Container = styled.div`
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

export { Container, Heading, Paragraph };

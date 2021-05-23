import styled, { keyframes } from "styled-components/macro";

const fadeIn = keyframes`
  0% {opacity: 0;}
  60% {opacity: 0;}
  100% {opacity: 1;}
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2.4rem 0 1.6rem 0;
  grid-column: 2/3;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Paragraph = styled.p`
  font-size: 18px;
`;

export { ProjectInfoContainer, Paragraph };

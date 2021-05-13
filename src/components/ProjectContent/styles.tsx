import styled, { keyframes } from "styled-components/macro";

const fadeIn = keyframes`
  0% {opacity: 0;}
  35% {opacity: 0;}
  100% {opacity: 1;}
`;

const ProjectContentContainer = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-gap: 8rem 0;
  animation: ${fadeIn} 1.8s ease-in;
`;

export { ProjectContentContainer };

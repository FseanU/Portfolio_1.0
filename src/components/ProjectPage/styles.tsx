import styled, { keyframes } from "styled-components/macro";
import { Link } from "@reach/router";

type DividerProps = {
  marginTop?: string;
  borderWidth?: string;
};

const fadeIn = keyframes`
  0% {opacity: 0;}
  50% {opacity: 0;}
  100% {opacity: 1;}
`;

const slideIn = keyframes`
  0% {transform: scaleX(0)}
  100% {transform: scaleX(1)}
`;

const ProjectPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  animation: ${fadeIn} 0.8s ease-in;
`;

const RouterLink = styled(Link)`
  grid-column: 2/3;
  margin: 1rem 0;
  font-size: 18px;
  font-weight: 300;
  transition: color 0.3s ease-in;

  &:hover {
    color: var(--highlight);
  }
`;

const Divider = styled.div<DividerProps>`
  margin-top: ${(props) => props.marginTop || "0"};
  grid-column: 2/3;
  border-bottom: ${(props) => props.borderWidth || "2px"} solid var(--black);
  animation: ${slideIn} 0.8s ease-out;
  transform-origin: 0% 100%;
`;

const Spacer = styled.div`
  grid-column: 2/3;
  padding: 2rem 0;
`;

export { ProjectPageContainer, RouterLink, Divider, Spacer };

import React from "react";
import { Link } from "@reach/router";
import styled, { keyframes } from "styled-components/macro";
import ProjectInfo from "./ProjectInfo";
import ProjectContent from "./ProjectContent";
import { projects } from "../utils/_DATA";

const fadeIn = keyframes`
  0% {opacity: 0;}
  35% {opacity: 0;}
  100% {opacity: 1;}
`;

const slideIn = keyframes`
  0% {transform: scaleX(0)}
  100% {transform: scaleX(1)}
`;

const StyledProjectPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  animation: ${fadeIn} 0.5s ease-in;
`;

const StyledLink = styled(Link)`
  grid-column: 2/3;
  margin: 1rem 0;
  font-size: 18px;
  font-weight: 300;
  transition: color 0.3s ease-in;

  &:hover {
    color: var(--highlight);
  }
`;

const Divider = styled.div`
  margin-top: ${(props) => props.marginTop || "0"};
  grid-column: 2/3;
  border-bottom: ${(props) => props.borderWidth || "2px"} solid var(--black);
  animation: ${slideIn} 0.5s ease-in;
  transform-origin: 0% 100%;
`;

const Spacer = styled.div`
  grid-column: 2/3;
  padding: 2rem 0;
`;

const ProjectPage = ({ projectId }) => {
  const { projectInfo, content } = projects[projectId];

  return (
    <StyledProjectPage>
      <StyledLink to="/">{"<< back"}</StyledLink>
      <Divider></Divider>
      <ProjectInfo
        projectTitle={projectInfo.name}
        projectYear={projectInfo.year}
      />
      <Divider></Divider>
      <Spacer></Spacer>
      <ProjectContent content={content} />
      <Divider marginTop="8rem" borderWidth="1px"></Divider>
      <StyledLink to="/">{"<< back"}</StyledLink>
      <Spacer></Spacer>
    </StyledProjectPage>
  );
};

export default ProjectPage;

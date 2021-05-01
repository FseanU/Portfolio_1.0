import React from "react";
import styled, { keyframes } from "styled-components/macro";

type ProjectInfoProps = {
  projectTitle: string;
  projectYear: string;
};

const fadeIn = keyframes`
  0% {opacity: 0;}
  35% {opacity: 0;}
  100% {opacity: 1;}
`;

const StyledProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2.4rem 0 1.6rem 0;
  grid-column: 2/3;
  animation: ${fadeIn} 1s ease-in;
`;

const Paragraph = styled.p`
  font-size: 18px;
`;

const ProjectInfo = ({ projectTitle, projectYear }: ProjectInfoProps) => {
  return (
    <StyledProjectInfo>
      <h1>{projectTitle}</h1>
      <Paragraph>{projectYear}</Paragraph>
    </StyledProjectInfo>
  );
};

export default ProjectInfo;

import React from "react";
import styled from "styled-components/macro";

const StyledProjectInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 3px solid var(--black);
  border-bottom: 3px solid var(--black);
  padding: 4rem 0 2rem 0;
  grid-column: 2/3;
`;

const Paragraph = styled.p`
  font-size: 18px;
`;

const ProjectInfo = ({ projectTitle, projectYear }) => {
  return (
    <StyledProjectInfo>
      <h1>{projectTitle}</h1>
      <Paragraph>{projectYear}</Paragraph>
    </StyledProjectInfo>
  );
};

export default ProjectInfo;

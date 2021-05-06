import React from "react";
import * as Styled from "./styles";

type ProjectInfoProps = {
  projectTitle: string;
  projectYear: string;
};

const ProjectInfo = ({ projectTitle, projectYear }: ProjectInfoProps) => {
  return (
    <Styled.ProjectInfoContainer>
      <h1>{projectTitle}</h1>
      <Styled.Paragraph>{projectYear}</Styled.Paragraph>
    </Styled.ProjectInfoContainer>
  );
};

export default ProjectInfo;

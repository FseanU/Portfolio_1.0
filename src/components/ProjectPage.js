import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";
import ProjectContent from "./ProjectContent";
import { projects } from "../utils/_DATA";

const StyledProjectPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
`;

const StyledLink = styled(Link)`
  grid-column: 2/3;
  margin: 1rem 0;
  font-size: 18px;
`;

const ProjectPage = ({ projectId }) => {
  const { projectInfo, content } = projects[projectId];

  return (
    <StyledProjectPage>
      <StyledLink to="/">{"<< back"}</StyledLink>
      <ProjectInfo
        projectTitle={projectInfo.name}
        projectYear={projectInfo.year}
      />
      <ProjectContent content={content} />
    </StyledProjectPage>
  );
};

export default ProjectPage;

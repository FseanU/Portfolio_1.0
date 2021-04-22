import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
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
  transition: color 0.3s ease-in;

  &:hover {
    color: var(--highlight);
  }
`;

const Divider = styled.div`
  margin-top: 8rem;
  grid-column: 2/3;
  border-bottom: 1px solid var(--black);
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
      <ProjectInfo
        projectTitle={projectInfo.name}
        projectYear={projectInfo.year}
      />
      <Spacer></Spacer>
      <ProjectContent content={content} />
      <Divider></Divider>
      <StyledLink to="/">{"<< back"}</StyledLink>
      <Spacer></Spacer>
    </StyledProjectPage>
  );
};

export default ProjectPage;

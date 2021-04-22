import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import { projects } from "../utils/_DATA";

const StyledProjectList = styled.div`
  grid-column: 2/3;
  border-top: solid 0.2rem var(--black);
`;

const Heading = styled.h3`
  border-bottom: solid 0.2rem var(--black);
  margin: 0;
  padding: 2rem 0;
  font-size: calc(48px + 1.5vw);
  font-weight: 400;
  color: var(--black);
  display: block;
  transition: all 0.3s ease-in;
  -webkit-text-stroke: 1.5px var(--black);
  letter-spacing: 0.1rem;

  &:hover {
    color: transparent;
    -webkit-text-stroke: 1.5px var(--highlight);
    border-bottom: solid 0.2rem var(--highlight);
  }
`;

const ProjectList = () => {
  return (
    <StyledProjectList id="project">
      {Object.keys(projects).map((projectKey) => {
        const projectName = projects[projectKey].projectInfo.name;
        const id = projects[projectKey].id;

        return (
          <Link to={`/projects/${id}`}>
            <Heading>{projectName}</Heading>
          </Link>
        );
      })}
    </StyledProjectList>
  );
};

export default ProjectList;

import React from "react";
import { Link } from "@reach/router";
import { projects } from "../../utils/_DATA";
import * as Styled from "./styles";

const ProjectList = () => {
  return (
    <>
      <Styled.Divider></Styled.Divider>
      <Styled.Container id="project">
        {Object.keys(projects).map((projectKey) => {
          const projectName = projects[projectKey].projectInfo.name;
          const id = projects[projectKey].id;

          return (
            <Link to={`/projects/${id}`} key={id}>
              <Styled.Title>{projectName}</Styled.Title>
            </Link>
          );
        })}
      </Styled.Container>
    </>
  );
};

export default ProjectList;

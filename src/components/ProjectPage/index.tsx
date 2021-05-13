import React from "react";
import { RouteComponentProps } from "@reach/router";
import ProjectInfo from "../ProjectInfo";
import ProjectContent from "../ProjectContent";
import { projects } from "../../utils/_DATA";
import * as Styled from "./styles";

interface ProjectPageProps extends RouteComponentProps {
  projectId: string;
}

const ProjectPage = ({ projectId }: ProjectPageProps) => {
  const { projectInfo, content } = projects[projectId];

  return (
    <Styled.ProjectPageContainer>
      <Styled.RouterLink to="/">{"<< back"}</Styled.RouterLink>
      <Styled.Divider />
      <ProjectInfo
        projectTitle={projectInfo.name}
        projectYear={projectInfo.year}
      />
      <Styled.Divider />
      <Styled.Spacer />
      <ProjectContent content={content} />
      <Styled.Divider marginTop="8rem" borderWidth="1px"></Styled.Divider>
      <Styled.RouterLink to="/">{"<< back"}</Styled.RouterLink>
      <Styled.Spacer />
    </Styled.ProjectPageContainer>
  );
};

export default ProjectPage;

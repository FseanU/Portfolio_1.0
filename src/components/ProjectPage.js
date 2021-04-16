import React from "react";
import { Link } from "@reach/router";
import ProjectInfo from "./ProjectInfo";
import ProjectContentBlock from "./ProjectContentBlock";
import { projects } from "../utils/_DATA";

const ProjectPage = ({ projectId }) => {
  const { projectInfo, content } = projects[projectId];

  return (
    <div className="project-page">
      <Link to="/">
        <p style={{ margin: "1rem 0", fontSize: "18px" }}>{"<< back"}</p>
      </Link>
      <ProjectInfo
        projectTitle={projectInfo.name}
        projectYear={projectInfo.year}
      />
      {content.map(({ imgUrl, title, paragraph }) => (
        <ProjectContentBlock
          imgUrl={imgUrl}
          title={title}
          paragraph={paragraph}
          key={imgUrl}
        />
      ))}
    </div>
  );
};

export default ProjectPage;

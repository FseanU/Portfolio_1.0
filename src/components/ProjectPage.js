import React from "react";
import { Link } from "@reach/router";
import ProjectInfo from "./ProjectInfo";
import ProjectContent from "./ProjectContent";
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
      <ProjectContent content={content} />
    </div>
  );
};

export default ProjectPage;

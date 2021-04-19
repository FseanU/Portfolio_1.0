import React from "react";
import "../stylesheets/projectInfo.css";

const ProjectInfo = ({ projectTitle, projectYear }) => {
  return (
    <div className="project-info">
      <h1>{projectTitle}</h1>
      <p>{projectYear}</p>
    </div>
  );
};

export default ProjectInfo;

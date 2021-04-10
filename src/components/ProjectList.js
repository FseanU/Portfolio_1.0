import React from "react";
import "../stylesheets/projectList.css";

const ProjectList = () => {
  const projects = ["Jamin", "WYR"];

  return (
    <div className="project-list">
      {projects.map((project) => (
        <a href="">
          <div className="project-card">
            <h3>{project}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectList;

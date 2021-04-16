import React from "react";
import { Link } from "@reach/router";
import "../stylesheets/projectList.css";
import { projects } from "../utils/_DATA";

const ProjectList = () => {
  return (
    <div className="project-list">
      {Object.keys(projects).map((projectKey) => {
        const projectName = projects[projectKey].projectInfo.name;
        const id = projects[projectKey].id;

        return (
          <Link to={`/projects/${id}`}>
            <div className="project-card">
              <h3>{projectName}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;

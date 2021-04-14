import React from "react";
import { Link } from "@reach/router";
import ProjectInfo from "./ProjectInfo";
import "../stylesheets/projectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <Link to="/">
        <p style={{ margin: "1rem 0", fontSize: "18px" }}>{"<< back"}</p>
      </Link>
      <ProjectInfo />
    </div>
  );
};

export default ProjectPage;

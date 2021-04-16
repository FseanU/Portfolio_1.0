import React from "react";

const ProjectContentBlock = ({ imgUrl, title, paragraph }) => (
  <div>
    {title ? <h3>{title}</h3> : ""}
    <p>{paragraph}</p>
    <img src={process.env.PUBLIC_URL + imgUrl} alt="" />
  </div>
);

export default ProjectContentBlock;

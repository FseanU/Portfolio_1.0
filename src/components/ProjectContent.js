import React from "react";
import ProjectContentBlock from "./ProjectContentBlock";

const ProjectContent = ({ content }) => {
  return (
    <>
      {content.map(({ imgUrl, title, paragraph }) => (
        <ProjectContentBlock
          imgUrl={imgUrl}
          title={title}
          paragraph={paragraph}
          key={imgUrl}
        />
      ))}
    </>
  );
};

export default ProjectContent;

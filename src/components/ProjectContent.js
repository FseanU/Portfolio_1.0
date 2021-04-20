import React from "react";
import ProjectContentBlock from "./ProjectContentBlock";
import styled from "styled-components";

const StyledProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  grid-gap: 8rem 0;
`;

const ProjectContent = ({ content }) => {
  return (
    <StyledProjectContent>
      {content.map(({ imgUrl, title, paragraph }, index) => {
        const textLeft = index % 2 === 0;

        return (
          <ProjectContentBlock
            imgUrl={imgUrl}
            title={title}
            paragraph={paragraph}
            key={imgUrl}
            textLeft={textLeft}
          />
        );
      })}
    </StyledProjectContent>
  );
};

export default ProjectContent;
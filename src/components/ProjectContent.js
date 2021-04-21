import React from "react";
import styled from "styled-components/macro";
import ProjectContentBlock from "./ProjectContentBlock";

const StyledProjectContent = styled.div`
  margin: 8rem auto;
  grid-column: 2/3;
  display: grid;
  grid-gap: 8rem 0;
`;

const ProjectContent = ({ content }) => {
  return (
    <StyledProjectContent>
      {content.map(({ imgUrl, title, paragraph }, index) => {
        const isTextLeft = index % 2 === 0;
        const isIntroSection = index === 0;

        return (
          <ProjectContentBlock
            imgUrl={imgUrl}
            title={title}
            paragraph={paragraph}
            key={imgUrl}
            isTextLeft={isTextLeft}
            isIntroSection={isIntroSection}
          />
        );
      })}
    </StyledProjectContent>
  );
};

export default ProjectContent;

import React from "react";
import styled, { keyframes } from "styled-components/macro";
import ProjectContentBlock from "./ProjectContentBlock";

type ProjectContentProps = {
  content: Content[];
};

type Content = {
  imgUrl: string;
  title?: string;
  paragraphs: string[];
};

const fadeIn = keyframes`
  0% {opacity: 0;}
  35% {opacity: 0;}
  100% {opacity: 1;}
`;

const StyledProjectContent = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-gap: 8rem 0;
  animation: ${fadeIn} 1.8s ease-in;
`;

const ProjectContent = ({ content }: ProjectContentProps) => {
  return (
    <StyledProjectContent>
      {content.map(({ imgUrl, title, paragraphs }, index) => {
        const isTextLeft = index % 2 === 0;
        const isIntroSection = index === 0;

        return (
          <ProjectContentBlock
            imgUrl={imgUrl}
            title={title ? title : ""}
            paragraphs={paragraphs}
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

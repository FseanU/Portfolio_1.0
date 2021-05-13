import React from "react";
import ProjectContentBlock from "../ProjectContentBlock";
import * as Styled from "./styles";

type ProjectContentProps = {
  content: Content[];
};

type Content = {
  imgUrl: string;
  title?: string;
  paragraphs: string[];
};

const ProjectContent = ({ content }: ProjectContentProps) => {
  return (
    <Styled.ProjectContentContainer>
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
    </Styled.ProjectContentContainer>
  );
};

export default ProjectContent;

import React from "react";
import { useMediaQuery } from "react-responsive";
import TextContent from "../TextContent";
import * as Styled from "./styles";

type ProjectContentBlockProps = {
  imgUrl: string;
  title: string;
  paragraphs: string[];
  isTextLeft: boolean;
  isIntroSection: boolean;
};

const ProjectContentBlock = ({
  imgUrl,
  title,
  paragraphs,
  isTextLeft,
  isIntroSection,
}: ProjectContentBlockProps) => {
  const isSmallDevice = useMediaQuery({ query: "(max-width: 414px)" });
  return (
    <Styled.ProjectContentBlockContainer>
      {isSmallDevice ? (
        <>
          <Styled.ImgContent gridColumn="1 / 13">
            <img
              src={process.env.PUBLIC_URL + imgUrl}
              alt=""
              style={{ width: "100%" }}
            />
          </Styled.ImgContent>
          <TextContent
            title={title}
            paragraphs={paragraphs}
            gridColumn={"1 / 13"}
          />
        </>
      ) : isTextLeft ? (
        <>
          <TextContent
            title={title}
            paragraphs={paragraphs}
            gridColumn={isIntroSection ? "1 / 7" : "1 / 5"}
          />
          <Styled.ImgContent gridColumn={isIntroSection ? "8 / 13" : "6 / 13"}>
            <img
              src={process.env.PUBLIC_URL + imgUrl}
              alt=""
              style={{ width: "100%" }}
            />
          </Styled.ImgContent>
        </>
      ) : (
        <>
          <Styled.ImgContent gridColumn={"1 / 8"}>
            <img
              src={process.env.PUBLIC_URL + imgUrl}
              alt=""
              style={{ width: "100%" }}
            />
          </Styled.ImgContent>
          <TextContent
            title={title}
            paragraphs={paragraphs}
            gridColumn={"9 / 13"}
          />
        </>
      )}
    </Styled.ProjectContentBlockContainer>
  );
};

export default ProjectContentBlock;

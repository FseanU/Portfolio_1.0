import React from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";
import TextContent from "./TextContent";

interface ImgContentProps {
  readonly gridColumn: string;
}

type ProjectContentBlockProps = {
  imgUrl: string;
  title: string;
  paragraphs: string[];
  isTextLeft: boolean;
  isIntroSection: boolean;
};

const StyledProjectContentBlock = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 8rem 0;
  align-items: center;

  @media screen and (max-width: 414px) {
    grid-gap: 2rem 0;
  }
`;

const ImgContent = styled.div<ImgContentProps>`
  grid-column: ${(props) => props.gridColumn};
`;

const ProjectContentBlock = ({
  imgUrl,
  title,
  paragraphs,
  isTextLeft,
  isIntroSection,
}: ProjectContentBlockProps) => {
  const isSmallDevice = useMediaQuery({ query: "(max-width: 414px)" });
  return (
    <StyledProjectContentBlock>
      {isSmallDevice ? (
        <>
          <ImgContent gridColumn="1 / 13">
            <img
              src={process.env.PUBLIC_URL + imgUrl}
              alt=""
              style={{ width: "100%" }}
            />
          </ImgContent>
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
          <ImgContent gridColumn={isIntroSection ? "8 / 13" : "6 / 13"}>
            <img
              src={process.env.PUBLIC_URL + imgUrl}
              alt=""
              style={{ width: "100%" }}
            />
          </ImgContent>
        </>
      ) : (
        <>
          <ImgContent gridColumn={"1 / 8"}>
            <img
              src={process.env.PUBLIC_URL + imgUrl}
              alt=""
              style={{ width: "100%" }}
            />
          </ImgContent>
          <TextContent
            title={title}
            paragraphs={paragraphs}
            gridColumn={"9 / 13"}
          />
        </>
      )}
    </StyledProjectContentBlock>
  );
};

export default ProjectContentBlock;

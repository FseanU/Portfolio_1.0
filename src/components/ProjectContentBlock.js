import React from "react";
import styled from "styled-components/macro";
import TextContent from "./TextContent";

const StyledProjectContentBlock = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 8rem 0;
  align-items: center;
`;

const ImgContent = styled.div`
  grid-column: ${(props) => props.gridColumn};
`;

const ProjectContentBlock = ({
  imgUrl,
  title,
  paragraph,
  isTextLeft,
  isIntroSection,
}) => {
  return (
    <StyledProjectContentBlock>
      {isTextLeft ? (
        <>
          <TextContent
            title={title}
            paragraph={paragraph}
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
            paragraph={paragraph}
            gridColumn={"9 / 13"}
          />
        </>
      )}
    </StyledProjectContentBlock>
  );
};

export default ProjectContentBlock;

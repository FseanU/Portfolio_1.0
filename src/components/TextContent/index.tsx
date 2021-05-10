import React from "react";
import * as Styled from "./styles";

type TextContentProps = {
  title: string;
  paragraphs: string[];
  gridColumn: string;
};

const TextContent = ({ title, paragraphs, gridColumn }: TextContentProps) => {
  return (
    <Styled.TextContentContainer gridColumn={gridColumn}>
      {title ? <Styled.Heading>{title}</Styled.Heading> : ""}
      {paragraphs.map((paragraph: string) =>
        paragraph ? (
          <Styled.Paragraph key={paragraph}>
            {paragraph}
            <br></br>
            <br></br>
          </Styled.Paragraph>
        ) : (
          ""
        )
      )}
    </Styled.TextContentContainer>
  );
};

export default TextContent;

import React from "react";
import styled from "styled-components/macro";

interface StyledTextContentProps {
  readonly gridColumn: string;
  readonly textAlign?: string;
}

type TextContentProps = {
  title: string;
  paragraphs: string[];
  gridColumn: string;
};

const StyledTextContent = styled.div<StyledTextContentProps>`
  grid-column: ${(props) => props.gridColumn};
  text-align: ${(props) => props.textAlign};
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: calc(14px + 0.5vw);
  line-height: 1.5;
`;

const Heading = styled.h3`
  font-weight: 400;
  margin-bottom: 2rem;
  font-size: 24px;
`;

const TextContent = ({ title, paragraphs, gridColumn }: TextContentProps) => {
  return (
    <StyledTextContent gridColumn={gridColumn}>
      {title ? <Heading>{title}</Heading> : ""}
      {paragraphs.map((paragraph: string) =>
        paragraph ? (
          <Paragraph key={paragraph}>
            {paragraph}
            <br></br>
            <br></br>
          </Paragraph>
        ) : (
          ""
        )
      )}
    </StyledTextContent>
  );
};

export default TextContent;

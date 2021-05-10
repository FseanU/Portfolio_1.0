import styled from "styled-components/macro";

interface TextContentContainerProps {
  readonly gridColumn: string;
  readonly textAlign?: string;
}

const TextContentContainer = styled.div<TextContentContainerProps>`
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

export { TextContentContainer, Paragraph, Heading };

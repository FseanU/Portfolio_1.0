import styled from "styled-components/macro";

interface ImgContentProps {
  readonly gridColumn: string;
}

const ProjectContentBlockContainer = styled.div`
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

export { ProjectContentBlockContainer, ImgContent };

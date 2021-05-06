import { Link } from "@reach/router";
import styled from "styled-components/macro";

interface IntroTextProps {
  readonly gridColumn: string;
}

interface ImgContainerProps {
  readonly gridColumn: string;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
`;

const RouterLink = styled(Link)`
  font-size: 18px;
  font-weight: 300;
  transition: color 0.3s ease-in;

  &:hover {
    color: var(--highlight);
  }
`;

const LinkContainer = styled.div`
  grid-column: 2/3;
  padding: 1rem 0;
`;

const Divider = styled.div`
  grid-column: 2/3;
  border-bottom: 1px solid var(--black);
`;

const Spacer = styled.div`
  grid-column: 2/3;
  padding: 1rem 0;
`;

const AboutPageContainer = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 7fr 5fr;
  min-height: 88vh;
`;

const IntroText = styled.div<IntroTextProps>`
  grid-column: ${(props) => props.gridColumn};
  align-self: center;
`;

const Title = styled.h1`
  font-size: calc(36px + 1.5vw);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: calc(14px + 0.5vw);
  font-weight: 300;
  line-height: 1.8;
`;

const ImgContainer = styled.div<ImgContainerProps>`
  grid-column: ${(props) => props.gridColumn};
  align-self: center;
`;

export {
  GridContainer,
  RouterLink,
  LinkContainer,
  Divider,
  Spacer,
  AboutPageContainer,
  IntroText,
  Title,
  Paragraph,
  ImgContainer,
};

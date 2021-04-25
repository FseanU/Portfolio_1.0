import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";
import ProfileImg from "../assets/img/profile_with_cat.png";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  height: 90vh;
`;

const StyledLink = styled(Link)`
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

const StyledAboutPage = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 7fr 5fr;
`;

const IntroText = styled.div`
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

const ImgContainer = styled.div`
  grid-column: ${(props) => props.gridColumn};
  align-self: center;
`;

const AboutPage = () => {
  const isSmallDevice = useMediaQuery({ query: "(max-width: 414px)" });
  return (
    <GridContainer>
      <LinkContainer>
        <StyledLink to="/">{"<< back"}</StyledLink>
      </LinkContainer>
      {isSmallDevice && (
        <>
          <Divider></Divider>
          <Spacer></Spacer>
        </>
      )}
      <StyledAboutPage>
        <IntroText gridColumn={isSmallDevice ? "1 / 3" : "1 / 2"}>
          <Title>A little about me</Title>
          <Paragraph>
            I'm a Frontend Developer with a design background. With a strong
            interest in building digital products and services, I started my
            adventure into software development in late 2019. I'm currently
            working as a freelance Frontend Developer helping to create
            delightful interactive experiences through web applications.
          </Paragraph>
          <Paragraph>
            When I'm not writing code or designing websites, I enjoy playing
            with plants and my cat.
          </Paragraph>
        </IntroText>
        <ImgContainer gridColumn={isSmallDevice ? "1 / 3" : "2 / 3"}>
          <img src={ProfileImg} alt="" style={{ width: "100%" }} />
        </ImgContainer>
      </StyledAboutPage>
      {isSmallDevice && <Divider></Divider>}
      <LinkContainer>
        <StyledLink to="/">{"<< back"}</StyledLink>
      </LinkContainer>
      {isSmallDevice && <Spacer></Spacer>}
    </GridContainer>
  );
};

export default AboutPage;

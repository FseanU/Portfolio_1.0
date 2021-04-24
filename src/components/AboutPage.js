import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import ProfileImg from "../assets/img/profile_with_cat.png";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  height: 90vh;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  transition: color 0.3s ease-in;

  &:hover {
    color: var(--highlight);
  }
`;

const LinkContainer = styled.div`
  grid-column: 2/3;
  padding: 1rem 0;
`;

const StyledAboutPage = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 7fr 5fr;
`;

const IntroText = styled.div`
  grid-column: 1/2;
  align-self: center;
`;

const Title = styled.h1`
  font-size: calc(40px + 1.5vw);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: calc(14px + 0.5vw);
  font-weight: 300;
  line-height: 1.8;
`;

const ImgContainer = styled.div`
  grid-column: 2/3;
  align-self: center;
`;

const AboutPage = () => (
  <GridContainer>
    <LinkContainer>
      <StyledLink to="/">{"<< back"}</StyledLink>
    </LinkContainer>
    <StyledAboutPage>
      <IntroText>
        <Title>A little about me</Title>
        <Paragraph>
          I'm a Frontend Developer with a design background. With a strong
          interest in building digital products and services, I started my
          adventure into software development in late 2019. I'm currently
          working as a freelance Frontend Developer helping to create delightful
          interactive experiences through web applications.
        </Paragraph>
        <Paragraph>
          When I'm not writing code or designing websites, I enjoy playing with
          plants and my cat.
        </Paragraph>
      </IntroText>
      <ImgContainer>
        <img src={ProfileImg} alt="" style={{ width: "100%" }} />
      </ImgContainer>
    </StyledAboutPage>
  </GridContainer>
);

export default AboutPage;

import React from "react";
import { useMediaQuery } from "react-responsive";
import * as Styled from "./styles";
import ProfileImg from "../../assets/img/profile_with_cat.png";

const AboutPage = () => {
  const isSmallDevice = useMediaQuery({ query: "(max-width: 414px)" });

  return (
    <Styled.GridContainer>
      <Styled.LinkContainer>
        <Styled.RouterLink to="/">{"<< back"}</Styled.RouterLink>
      </Styled.LinkContainer>

      {isSmallDevice && (
        <>
          <Styled.Divider />
          <Styled.Spacer />
        </>
      )}

      <Styled.AboutPageContainer>
        <Styled.IntroText gridColumn={isSmallDevice ? "1 / 3" : "1 / 2"}>
          <Styled.Title>A little about me</Styled.Title>
          <Styled.Paragraph>
            I'm a Frontend Developer with a design background. With a strong
            interest in building digital products and services, I started my
            adventure into software development in late 2019. I'm currently
            working as a freelance Frontend Developer helping to create
            delightful interactive experiences through web applications.
          </Styled.Paragraph>
          <Styled.Paragraph>
            When I'm not writing code or designing websites, I enjoy playing
            with plants and my cat.
          </Styled.Paragraph>
        </Styled.IntroText>

        <Styled.ImgContainer gridColumn={isSmallDevice ? "1 / 3" : "2 / 3"}>
          <img src={ProfileImg} alt="Profile" style={{ width: "100%" }} />
        </Styled.ImgContainer>
      </Styled.AboutPageContainer>

      {isSmallDevice && (
        <>
          <Styled.Divider />
          <Styled.LinkContainer>
            <Styled.RouterLink to="/">{"<< back"}</Styled.RouterLink>
          </Styled.LinkContainer>
          <Styled.Spacer />
        </>
      )}
    </Styled.GridContainer>
  );
};

export default AboutPage;

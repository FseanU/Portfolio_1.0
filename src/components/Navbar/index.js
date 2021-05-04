import React from "react";
import { useMediaQuery } from "react-responsive";
import * as Styled from "./styles";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const isTabletOrBigger = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Styled.Nav>
      <Styled.LogoLink to="/">
        <img src={logo} alt="logo" style={{ width: "45px" }} />
      </Styled.LogoLink>
      <Styled.UL>
        <Styled.List>
          <Styled.StyledLink to="/about">About</Styled.StyledLink>
        </Styled.List>
        {isTabletOrBigger && (
          <>
            <Styled.List>
              <Styled.SectionLink href="#project">Project</Styled.SectionLink>
            </Styled.List>
            <Styled.List>
              <Styled.SectionLink href="#contact">Contact</Styled.SectionLink>
            </Styled.List>
          </>
        )}
      </Styled.UL>
    </Styled.Nav>
  );
};

export default Navbar;

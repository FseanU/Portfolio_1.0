import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import logo from "../assets/img/logo.png";

const StyledNav = styled.nav`
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 0 0;
`;

const StyledLink = styled(Link)`
  font-size: calc(18px+0.5vw);
  color: var(--black);
  font-weight: 300;
  transition: color 0.3s ease-in;
  padding-bottom: 0.5rem;

  &:hover {
    color: var(--highlight);
  }
`;

const SectionLink = styled.a`
  font-size: calc(18px+0.5vw);
  color: var(--black);
  font-weight: 300;
  transition: color 0.3s ease-in;
  padding-bottom: 0.5rem;

  &:hover {
    color: var(--highlight);
  }
`;

const LogoLink = styled(Link)`
  width: 45px;
  height: 45px;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: row;
`;

const StyledList = styled.li`
  padding-left: 55px;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <LogoLink to="/">
        <img src={logo} alt="logo" style={{ width: "45px" }} />
      </LogoLink>
      <StyledUL>
        <StyledList>
          <StyledLink to="/about">About</StyledLink>
        </StyledList>
        <StyledList>
          <SectionLink href="#project">Project</SectionLink>
        </StyledList>
        <StyledList>
          <SectionLink href="#contact">Contact</SectionLink>
        </StyledList>
      </StyledUL>
    </StyledNav>
  );
};

export default Navbar;

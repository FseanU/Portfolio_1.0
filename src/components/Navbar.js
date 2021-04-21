import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import logo from "../assets/img/logo.png";

const StyledNav = styled.nav`
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
  transition: border 0.4s ease-in;
  border-bottom: solid var(--main-color) 2px;
  padding-bottom: 0.5rem;

  &:hover {
    border-bottom: solid var(--highlight) 2px;
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
          <StyledLink to="#">Project</StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink to="#">Contact</StyledLink>
        </StyledList>
      </StyledUL>
    </StyledNav>
  );
};

export default Navbar;

import styled from "styled-components/macro";
import { Link } from "@reach/router";

const Nav = styled.nav`
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

const UL = styled.ul`
  display: flex;
  flex-direction: row;
`;

const List = styled.li`
  padding-left: 55px;
`;

export { Nav, StyledLink, SectionLink, LogoLink, UL, List };

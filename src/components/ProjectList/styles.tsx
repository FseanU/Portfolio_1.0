import styled from "styled-components/macro";

const Container = styled.div`
  grid-column: 2/3;
`;

const Divider = styled.div`
  grid-column: 2/3;
  border-bottom: 2px solid var(--black);
`;

const Title = styled.h3`
  border-bottom: solid 2px var(--black);
  margin: 0;
  padding: 2rem 0;
  font-size: calc(48px + 1.5vw);
  font-weight: 400;
  color: var(--black);
  display: block;
  transition: all 0.3s ease-in;
  -webkit-text-stroke: 1.5px var(--black);
  letter-spacing: 0.1rem;

  &:hover {
    color: transparent;
    -webkit-text-stroke: 1.5px var(--highlight);
    border-bottom: solid 2px var(--highlight);
  }
`;

export { Container, Divider, Title };

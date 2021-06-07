import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #353535;
    --main-color: #dcd6d0;
    --highlight: #fc3e1d;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  body {
    margin: 0;
    font-family: Montserrat, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--main-color);
    color: var(--black);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  li {
    list-style-type: none;
  }

  h1 {
    font-size: calc(36px + 1.5vw);
    font-weight: 600;
  }

  p {
    font-size: calc(18px + 0.5vw);
  }
`;

export default GlobalStyle;

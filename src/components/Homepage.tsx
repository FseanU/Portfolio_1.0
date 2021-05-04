import React from "react";
import styled from "styled-components/macro";
import Navbar from "./Navbar/index";
import Greeting from "./Greeting";
import ProjectList from "./ProjectList";
import Contact from "./Contact/index";

const StyledHomepage = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
`;

const Homepage = () => {
  return (
    <StyledHomepage>
      <Navbar />
      <Greeting />
      <ProjectList />
      <Contact />
    </StyledHomepage>
  );
};

export default Homepage;

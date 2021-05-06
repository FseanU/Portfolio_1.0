import React from "react";
import Navbar from "../Navbar";
import Greeting from "../Greeting";
import ProjectList from "../ProjectList";
import Contact from "../Contact";
import * as Styled from "./styles";

const Homepage = () => {
  return (
    <Styled.HomepageContainer>
      <Navbar />
      <Greeting />
      <ProjectList />
      <Contact />
    </Styled.HomepageContainer>
  );
};

export default Homepage;

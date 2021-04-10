import React from "react";
import Greeting from "./Greeting";
import ProjectList from "./ProjectList";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <div>
      <Greeting />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default Homepage;

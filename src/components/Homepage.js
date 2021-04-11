import React from "react";
import Navbar from "./Navbar";
import Greeting from "./Greeting";
import ProjectList from "./ProjectList";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Greeting />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default Homepage;

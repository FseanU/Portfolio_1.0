import React from "react";
import "../stylesheets/greeting.css";

const Greeting = () => {
  return (
    <div className="greeting">
      <h1>
        Hello, <br />
        it's Hung-Chen
      </h1>
      <p>
        I am a full stack developer based in Berlin, <br />
        helping to create meaningful experiences <br />
        through web applications.
      </p>
    </div>
  );
};

export default Greeting;

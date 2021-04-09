import React from "react";
import Textbox from "./Textbox";

const Greeting = () => {
  const title = (
    <h1>
      Hello, <br />
      it's Hung-Chen
    </h1>
  );
  const paragraph = (
    <p>
      I am a full stack developer based in Berlin, <br />
      helping to create meaningful experiences <br />
      through web applications.
    </p>
  );

  return (
    <div className="greeting">
      <Textbox title={title} paragraph={paragraph} />
    </div>
  );
};

export default Greeting;

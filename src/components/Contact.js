import React from "react";
import styled from "styled-components/macro";

const StyledContact = styled.div`
  margin: 16rem 0 8rem 0;
`;

const Paragraph = styled.p`
  margin-top: 2rem;
`;

const Contact = () => {
  return (
    <StyledContact>
      <h1>Contact</h1>
      <Paragraph>
        I'm always open to new challenges, <br />
        so feel free to drop me a line at <br />
        contact@hungchenfu.com
      </Paragraph>
    </StyledContact>
  );
};

export default Contact;

import React from "react";
import styled from "styled-components";

const StyledTextContent = styled.div`
  grid-column: ${(props) => props.gridColumn};
  text-align: ${(props) => props.textAlign};
`;

const TextContent = ({ title, paragraph, gridColumn }) => {
  return (
    <StyledTextContent gridColumn={gridColumn}>
      {title ? <h3>{title}</h3> : ""}
      <p>{paragraph}</p>
    </StyledTextContent>
  );
};

export default TextContent;

import React from "react";
import styled from "styled-components/macro";

const StyledFooter = styled.div`
  grid-column: 2/3;
  padding: 1rem 0;
`;

const CopyrightText = styled.p`
  font-size: 12px;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <CopyrightText>Hung-Chen Fu © 2020</CopyrightText>
  </StyledFooter>
);

export default Footer;

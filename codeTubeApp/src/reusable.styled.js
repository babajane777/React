import React from "react";
import styled from "styled-components";

// Button component with background color property
export const Button = styled.button`
  background-color: ${(props) => props.bg};
`;

// Container component with flex property
export const Container = styled.div`
  display: ${(props) => props.display};
  
`;
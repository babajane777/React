import styled from "styled-components";

export const ButtonView = styled.button`
  border: 1px solid black;
  color: black;
  background-color: white;
  padding:20px

  ${(props) =>
    props.filled &&
    `
    background-color: #42f2f5;
    color: red;
    padding:20px
  `}

  ${(props) =>
    props.bg &&
    `
    background-color: ${props.bg};
  `}

  ${(props) =>
    props.color &&
    `
    color: ${props.color};
  `}
`;
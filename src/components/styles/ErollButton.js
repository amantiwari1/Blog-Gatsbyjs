import styled from "styled-components"


export const ErollButton = styled.button`
  transition: all 0.5s ease-out;
  background-color: "#e3f6f5";
  width: 130px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 6px;
  color: "#393e46";
  margin-left: auto;
  margin-right: auto;
  display: block;

  &:hover {
    filter: brightness(130%);
    outline: none;
  }

  &:focus {
    opacity: 1;
    outline: none;
    border: none;
  }
`

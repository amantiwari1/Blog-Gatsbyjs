import styled from "styled-components";
import { Link } from "gatsby";

export const LinkButton = styled(Link)`
transition: all 0.5s ease-out;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  &:focus,
  &:hover {
    color: ${(props) => props.theme.textColor};
  }
`;
export const TitleCardLink = styled(Link)`
/* background: rgb(238,174,202); */
/* background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */
/* 
background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in; */
  color: ${(props) => props.theme.textColor};

  &:hover {
    /* background-size: 100% 88%; */
   color: #98dfaf;

  }
`;

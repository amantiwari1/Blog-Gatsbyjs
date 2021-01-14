import styled from "styled-components";
import { LinkButton } from "../styles/Link";
import Img from "gatsby-image";




export const CardImgCustom = styled(Img)`
  height: 60%;
  position: relative;
  overflow: hidden;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const BodyCardText = styled(LinkButton)`
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
  display: block;
  font-size: 20px;
  text-transform: capitalize; 
`;

export const Category = styled.button`
  background-color: ${(props) => props.theme.textColor};
  width: auto;
  height: auto;
  outline: none;
  border: none;
  color: ${(props) => props.theme.background};
  margin: 10px;

  &:hover {
    outline: none;
  }

  &:focus {
    opacity: 1;
    outline: none;
    border: none;
  }
`;

const TimeToRead = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
  opacity: 0.6;
  margin-left: 4px; 
  display: inline;
  &:hover {
    outline: none;
    color: none;
  }

  &:focus {
    outline: none;
    border: none;
    color: none;
  }
`





export {BodyCardText,TimeToRead}

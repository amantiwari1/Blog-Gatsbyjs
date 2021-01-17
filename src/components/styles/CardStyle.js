import styled from "styled-components";
import { LinkButton } from "../styles/Link";
import Img from "gatsby-image";

export const CardImgCustom = styled(Img)`
  /* max-height: 100px; */

  /* box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); */
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
  text-transform: capitalize;
  background-color: ${(props) => props.theme.textColor};
  width: auto;
  height: auto;
  outline: none;
  border: none;
  color: ${(props) => props.theme.background};
  margin: 10px;
  margin-left: 0;

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
`;
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
  height: 100%;
  margin: 0 -8px;
`;

const CardBody = styled.div`
  padding: 10px;
`;

export { BodyCardText, TimeToRead, Card, CardBody };

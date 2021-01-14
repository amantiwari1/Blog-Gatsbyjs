import styled from "styled-components";
import { LinkButton } from "../styles/Link";

const Card = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 50px;
`;

const Header = styled.h4`
  margin-bottom: 20px;
  margin-top: 20px;
  border: 2px solid ${(props) => props.theme.textColors};
  padding: 20px;
`;

const Item = styled(LinkButton)`
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 20px;
  display: block;
  font-size: 20px;
  text-transform: capitalize; 

`;

export { Card, Header, Item };

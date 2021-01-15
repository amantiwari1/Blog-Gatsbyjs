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
  padding: 10px;
  text-transform: capitalize; 
  text-align: center;
`;

const Item = styled(LinkButton)`
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 20px;
  display: block;
  font-size: 16px;
  text-transform: capitalize; 

`;
const ItemCat = styled(LinkButton)`
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 10px;
  display: block;
  font-size: 18px;
  text-transform: capitalize; 
  text-align: center;

`;

export { Card, Header, Item, ItemCat };

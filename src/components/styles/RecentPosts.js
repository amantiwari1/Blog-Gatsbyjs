import styled from "styled-components";
import { LinkButton } from "../styles/Link";

const Card = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 20px;
  
`;

const Header = styled.h4`
  margin-bottom: 20px;
  border: 2px solid ${(props) => props.theme.textColors};
  padding: 10px;
  text-transform: capitalize; 
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

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

export { Card,  Header, Item, ItemCat };

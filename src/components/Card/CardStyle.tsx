import styled from "styled-components"
import { Link } from "gatsby"




const BodyCardText = styled.div`
  display: block;
  font-size: 20px;
  text-transform: capitalize;
`

export const Category = styled.button`
  text-transform: capitalize;
  background-color: ${props => props.theme.textColor};
  width: auto;
  height: auto;
  outline: none;
  border: none;
  color: ${props => props.theme.background};
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
`

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
`
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
  height: 100%;
  margin: 0 -8px;
`

const CardBody = styled.div`
  padding: 10px;
`

const TitleCardLink = styled(Link)`
  color: ${props => props.theme.textColor};
  &:hover {
    color: ${props => props.theme.textColor};
  }
`

export { BodyCardText, TimeToRead, Card, CardBody, TitleCardLink }

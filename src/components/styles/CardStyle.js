import styled from "styled-components";
import { Card } from "react-bootstrap";



export const CardImgCustom = styled(Card.Img)`
        height: 60%;
        position: relative;
        overflow: hidden;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        border-radius: 6px;
        box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);      
`

export const CardCustom = styled(Card)`
        max-width: 21rem;
        background-color: ${(props) => props.theme.cardBackground};
        color: ${(props) => props.theme.textColor};
        transition: all 0.5s ease-out;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
`

export const Category = styled.button`
        background-color: ${(props) => props.theme.textColor};
    width: auto;
    height: auto;
    outline: none;
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme.background};
    margin-bottom: 10px;
    
    &:hover {
        outline: none;
        
    }

    &:focus {
        opacity: 1;
        outline: none;
        border: none;
    }

`

export const CardBorder = styled.div`

 border: 2px solid ${(props) => props.theme.textColors};
  border-radius: 30px;
  padding: 20px;
  padding-bottom: 5px !important;

` 
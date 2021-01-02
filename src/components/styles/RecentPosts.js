import styled from "styled-components";
import {LinkButton} from "../styles/Link"


const Card = styled.div`
    width: 20rem;
    height: auto;
    text-align: center;
    border: 2px solid ${props => props.theme.textColors};
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
    /* position: sticky; */
    /* top: 60px; */
    /* z-index: 1; */
    margin-bottom: 50px;



`

const Header = styled.h2`
    margin-bottom: 20px;
    margin-top: 20px;
    border-bottom: 2px solid ${props => props.theme.textColors};
    padding-bottom: 20px;
    border-radius: 30px;


`

const Item = styled(LinkButton)`
    &:hover {
        cursor: pointer;
        color: grey;

    }
    margin-bottom: 20px;
    display: block;
    font-size: 20px;
    text-decoration: underline;


`




export {Card, Header,Item}
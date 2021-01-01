import styled from "styled-components";



export const Button = styled.button`
    background-color: "#e3f6f5";
    width: 130px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 6px;
    color: "#393e46";
    
    &:hover {
        filter: brightness(130%);
        outline: none;
        border: none;
    }

    &:focus {
        opacity: 1;
        outline: none;
        border: none;
    }
`
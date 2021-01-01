import styled from "styled-components";



const Body = styled.div`
    min-height: 100vh;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    transition: all 0.5s ease-out;
`

export {Body}
import styled from "styled-components"

export const TOC = styled.div`
  position: sticky;
  top: 80px;
  padding: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  h5 {
    margin-bottom: 10px;
    margin-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 25px;
  }
  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }

  li {
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px;
  }

  a {
    text-decoration: "none";
    color: ${props => props.theme.textColor};
    text-align: center;
    display: block;
  }
`

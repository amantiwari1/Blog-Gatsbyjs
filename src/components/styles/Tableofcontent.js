import styled from "styled-components";

export const TOC = styled.div`
  position: sticky;
  top: 80px;
  border: 2px solid ${(props) => props.theme.textColors};
  border-radius: 30px;
  margin-bottom: 20px;

  h5 {
    margin-bottom: 10px;
    margin-top: 20px;
    border-bottom: 2px solid ${(props) => props.theme.textColor};
    padding-bottom: 20px;
    border-radius: 30px;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }

  li {
    text-align: center;
    margin-bottom: 5px;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.textColor};
    text-align: center;
    display: block;
  }
`;


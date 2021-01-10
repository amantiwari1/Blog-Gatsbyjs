import styled from "styled-components";

const HeaderImage = styled.img`
  height: 300px;
  width: 400px;
  margin: 0 auto;
  display: block;

  @media (max-width: 560px) {
    width: 300px;
    height: 200px;
  }
`;
const Topicstyle = styled.p`
  margin-right: 20px !important;
  font-size: 1.2rem;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.textColors};
  width: 100%;
  border-radius: 30px;
  text-align: center;
  margin-top: 20px;
`;

export { HeaderImage, Topicstyle };

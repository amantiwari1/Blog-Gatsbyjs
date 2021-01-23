import styled from "styled-components"

const HeaderImage = styled.img`
  height: 300px;
  width: 400px;
  margin: 0 auto;
  display: block;

  @media (max-width: 560px) {
    width: 300px;
    height: 200px;
  }
`
const Topicstyle = styled.p`
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 10px;
  border: 2px solid ${props => props.theme.textColors};
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  text-align: center;
`

export { HeaderImage, Topicstyle }

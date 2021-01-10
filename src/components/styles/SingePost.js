import styled from "styled-components";

const Post = styled.div`
  border: 2px solid ${(props) => props.theme.textColors};
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 20px;
`;
const MdxPost = styled.div`
  border: 2px solid ${(props) => props.theme.textColors};
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 20px;
`;

export { Post,MdxPost };

import styled from "styled-components"
import { Link } from "gatsby"

export const LinkButton = styled(Link)`
  transition: all 0.5s ease-out;
  text-decoration: none;
  color: ${props => props.theme.textColor};
  &:focus,
  &:hover {
    color: ${props => props.theme.textColor};
  }
`



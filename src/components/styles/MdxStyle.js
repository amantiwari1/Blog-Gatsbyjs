import { down } from "styled-breakpoints";

import React from 'react'
import styled, { css } from 'styled-components'
import 'victormono'

export const inlineCode = css`
  padding: 0 3px;
  background-color: #e2e8f0;
  font-family: 'Victor Mono', monospace;
  border-radius: 0.125rem;
`

const StyledText = styled.code`
  ${inlineCode}
`

export const InlineCode = ({ children }) => {
  return <StyledText>{children}</StyledText>
}

const H2 = styled.h2`
  ${down("sm")} {
    position: none;
    padding-top: 0;
  }
  position: relative;
  padding-top: 60px;
  svg {
    display: none;
  }
`;
const H6 = styled.h6`
  svg {
    display: none;
  }
`;
const H3 = styled.h3`
  svg {
    display: none;
  }
`;
const H4 = styled.h4`
  svg {
    display: none;
  }
`;
const H5 = styled.h5`
  svg {
    display: none;
  }
`;

const P = styled.p`
  strong {
    font-weight: 500;
  }
  em {
    font-style: italic;
    code {
      ${inlineCode}
    }
  }
  img {
    width: 100%;
  }
  word-break: break-word;
`

const Blockquote = styled.blockquote`
  margin: 20px;
  p {
    margin-top: 0;
    border-left: 5px solid #4a5568;
    padding-left: 15px;
    font-style: italic;
    font-size: 1.5rem;
    word-break: break-word;
  }
`

const A = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.textColor};
  &:hover {
    opacity: 0.5;
  color: ${(props) => props.theme.textColor};

  }
  code {
    ${inlineCode}
  }
`
  

export { H2, H3, H4, H5, H6, P, Blockquote , A};

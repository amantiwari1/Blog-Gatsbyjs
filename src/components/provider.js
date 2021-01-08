import React from "react";
import { Navbar } from ".";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "styled-components";
import theme, {GlobalStyle} from "../themes/theme";
import { useTheme } from "../hooks/useTheme";
import { MDXProvider } from '@mdx-js/react';
import styled from "styled-components";
import {Code, CodeWrapper} from "./Code";
import { down } from 'styled-breakpoints';




const H2 = styled.h2`
${down('md')} {
  position: none;
padding-top: 0;
  }
 position: relative;
padding-top: 60px;
a {
    float: left;
    margin-left: -24px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    svg {
      visibility: visible;
      height: 25px;
      width: 20px;
    }
  }

`

const components = {
  h2: props => <H2 {...props} />,
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <CodeWrapper>
          <Code
            codeString={props.children.trim()}
            language={
              props.className &&
              props.className.replace('language-', '')
            }
            {...props}
          />
        </CodeWrapper>
      )
    }
  },
  wrapper: ({children}) => <> {children} </>, 
}



const Provider = ({ children }) => {
  const [mode, toggleMode] = useTheme();
  const themeMode = mode === "light" ? theme.light : theme.dark;
  const [show, setShow] = React.useState(false);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <MDXProvider components={components}>
        <Navbar
          isOpen={show}
          toggleOpen={setShow}
          mode={mode}
          toggleMode={toggleMode}
        />
        <br></br>
        {children}
      </MDXProvider>
    </ThemeProvider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;

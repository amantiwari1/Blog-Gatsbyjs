import React from "react"
import { Navbar } from "."
import { ThemeProvider } from "styled-components"
import theme, { GlobalStyle } from "../themes/theme"
import { useTheme } from "./hooks/useTheme"
import { MDXProvider } from "@mdx-js/react"
import { Code, CodeWrapper } from "./Code/Code"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "../components/Footer/footer"
import {
  H2,
  H3,
  H4,
  H5,
  H6,
  InlineCode,
  P,
  Blockquote,
  A,
  Table,
} from "../components/styles/MdxStyle"


const components = {
  table: props => <Table {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  h6: props => <H6 {...props} />,
  p: props => <P {...props} />,
  a: props => <A {...props} />,
  blockquote: props => <Blockquote {...props} />,
  "p.inlineCode": props => <InlineCode {...props} />,
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <CodeWrapper>
          <Code
            codeString={props.children.trim()}
            language={
              props.className && props.className.replace("language-", "")
            }
            {...props}
          />
        </CodeWrapper>
      )
    }
  },
  wrapper: ({ children }) => <> {children} </>,
}

const Layout = ({ children }) => {
  const [mode, toggleMode] = useTheme()
  const themeMode = mode === "light" ? theme.light : theme.dark
  const [show, setShow] = React.useState(false)

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <MDXProvider components={components}>
      <div
    key={`loader`}
              id="___loader"
              style={{
                alignItems: "center",
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
              }}
           >
              
        </div>
        <Navbar
          isOpen={show}
          toggleOpen={setShow}
          mode={mode}
          toggleMode={toggleMode}
        />
        <br></br>
        {children}
        <br></br>
        <Footer />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default Layout

import React from "react"
import { Navbar } from "./Navbar/Navbar";
import { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme, darkTheme } from "../themes/theme"
import { useTheme } from "./hooks/useTheme"
import { MDXProvider } from "@mdx-js/react"
import { Code, CodeWrapper } from "./Code/Code"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "./Footer/footer"
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
} from "./styles/MdxStyle"

const components = {
  table: (props: any) => <Table {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  h5: (props: any) => <H5 {...props} />,
  h6: (props: any) => <H6 {...props} />,
  p: (props: any) => <P {...props} />,
  a: (props: any) => <A {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  "p.inlineCode": (props: any) => <InlineCode {...props} />,
  pre: ({ children: { props}}: any) => {
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
  wrapper: ({ children }: any) => <> {children} </>,
}

const Layout = ({ children }: any) => {
  const [mode, toggleMode] = useTheme()
  const themeMode = mode === "light" ? lightTheme : darkTheme
  const [show, setShow] = React.useState(false)

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
        <br></br>
        <Footer />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default Layout

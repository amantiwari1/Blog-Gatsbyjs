import React from "react";
import { Navbar } from ".";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from 'styled-components';
import {Body} from "./styles/GlobalStyle";
import theme from '../themes/theme';
import { useTheme } from '../hooks/useTheme'




const Provider = ({ children }) => {

  const [mode, toggleMode] = useTheme()
  const themeMode = mode === 'light' ? theme.light : theme.dark

  const [show, setShow] = React.useState(false)


  return (
    <ThemeProvider theme={themeMode}>
      <Body>

      <Navbar  isOpen={show} toggleOpen={setShow} mode={mode} toggleMode={toggleMode} />
      <br></br>
       {children}
      </Body>
    </ThemeProvider>
  );
};


export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
)


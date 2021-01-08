import { createGlobalStyle } from 'styled-components'


const theme = {
  light: {
    background: "#d6d8ec",
    textColor: "#000",
    textSecondary: "#37364d",
    buttonPrimary: "#5a4fff",
    buttonGhost: "transparent",
    cardBackground: "#ffffff",
  },
  dark: {
    background: "#5d4561",
    textColor: "#fff",
    textSecondary: "#37364d",
    buttonPrimary: "#fff",
    buttonGhost: "transparent",
    cardBackground: "#403C5B",
  },
};

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-align: center;

  }

body {
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  transition: all 0.5s ease-out;
  scrollbar-width: thin;
  scrollbar-color: #e76f51 #1d3557;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: #1d3557;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e76f51;
    border-radius: 14px;
    border: 3px solid #1d3557;
  }
}

`

export default theme;

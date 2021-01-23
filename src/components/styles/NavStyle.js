import styled from "styled-components";
import { motion } from "framer-motion";

const NavDesktop = styled.div.attrs((props) => ({
  margintop: props.margintop || "10px",
}))`
  max-width: 1140px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${(props) => props.margintop};
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-out;

  @media (max-width: 940px) {
    padding-top: 28px;
    -webkit-box-shadow: 0 4px 6px -4px #222;
    -moz-box-shadow: 0 4px 6px -4px #222;
    box-shadow: 0 4px 6px -4px #222;
  }
`;
const P = styled.p`
  display: inline-block;
  position: relative;
  padding: 2px;
  margin-right: 20px !important;
  margin-bottom: 5px;
  font-size: 1.2rem;

  &:last-child {
    margin-right: 0;
  }

  &:after {
    content: "";
    display: block;
    margin: auto;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.5s ease, background-color 0.5s ease;
  }
  &:hover:after {
    width: 100%;
    background: blue;
  }
`;

const NavMobile = styled(motion.nav)`

  top: 0;
  left: 0;
  bottom: 0;
  @media (min-width: 940px) {
    display: none;
  }
  transition: all 0.5s ease-out;
  z-index: 1;
`;

const BackgroundNav = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background: ${(props) => props.theme.background};
  transition: background 0.5s ease-out !important;

  box-shadow: 20px 0px 48px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 20px 0px 48px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 20px 0px 48px 0px rgba(0, 0, 0, 0.75);
`;

const sidebar = {
  open: (height = 2000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    zIndex: 1,
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: { zIndex: 0 },
  },
};

const fixednavbar = {
  open:  {
    position: "fixed"
    
  },
  closed: {
    position: "absolute"
  },
};

const Brand = styled.h1`
  padding-bottom: 20px;

  @media (max-width: 940px) {
    margin-left: 60px;
    font-size: 25px;
  padding-bottom: 10px;


  }
`;

const SearchButtonStyle = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  padding: 0 !important;
  margin: 0;
  &:focus {
    border: none;
    outline: none;
  }
  transition: all 0.5s ease-out;
`;

const NavBackgroudColor = styled.div`
  top: 0;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  transition: all 0.5s ease-out;
  position: sticky;
  z-index: 1;
  -webkit-box-shadow: 0 4px 6px -4px #222;
  -moz-box-shadow: 0 4px 6px -4px #222;
  box-shadow: 0 4px 6px -4px #222;

  @media (max-width: 940px) {
    display: none;
  }
`;

export {
  NavBackgroudColor,
  NavDesktop,
  P,
  NavMobile,
  BackgroundNav,
  sidebar,
  Brand,
  SearchButtonStyle,
  fixednavbar,
};

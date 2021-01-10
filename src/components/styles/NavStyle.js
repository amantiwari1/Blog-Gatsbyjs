import styled from "styled-components";
import { motion } from "framer-motion";

const NavShort = styled.div.attrs((props) => ({
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
  content: '';
  display: block;
  margin: auto;
  height: 3px;
  width: 0px;
  background: transparent;
  transition: width .5s ease, background-color .5s ease;
}
&:hover:after {
  width: 100%;
  background: blue;
}
 



`;

const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  @media (min-width: 940px) {
    display: none;
  }
  transition: all 0.5s ease-out;

`;

const BackgroundNav = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background: ${(props) => props.theme.background};
  transition: all 0.5s ease-out;
`;

const sidebar = {
  open: (height = 1000) => ({
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
      delay: 0.25,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: { zIndex: 0 },
  },
};

const Brand = styled.h1`
  padding-bottom: 20px;

  @media (max-width: 940px) {
    margin-left: 60px;
    font-size: 25px;
  }
`;

const SearchBtton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  padding: 0 !important;
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
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;

  @media (max-width: 940px) {
    display: none;
  }
`;

export {
  NavBackgroudColor,
  NavShort,
  P,
  Nav,
  BackgroundNav,
  sidebar,
  Brand,
  SearchBtton,
};

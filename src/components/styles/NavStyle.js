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

  @media (max-width: 940px) {
    padding-top: 28px;
  }
`;
const P = styled.p`
  display: inline;
  margin-right: 20px !important;
  font-size: 1.2rem;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.textColors};
  border-radius: 30px;

  filter: brightness(80%);

  &:hover {
    cursor: pointer;
    filter: brightness(150%);
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
  padding: 0px;
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
  padding-bottom: 15px;
  height: 65px;
  padding-top: 5px;

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

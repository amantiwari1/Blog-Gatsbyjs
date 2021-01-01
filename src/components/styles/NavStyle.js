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

  &:hover {
    border-bottom: 2px ridge red;
    cursor: pointer;
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

`

 const BackgroundNav = styled(motion.div)`

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background:  ${props => props.theme.background};
  z-index: 1;

`

 const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


const Brand = styled.h1`

@media (max-width: 940px) {
      margin-left: 60px;
      font-size: 25px;
  }
` 

 const SearchBtton = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    outline:none;
    padding: 0px;
    &:focus {
      border: none;
    outline:none;
    }
`


const NavBackgroudColor = styled.div`
  top: 0;
  background-color:  ${props => props.theme.background};
  color: ${props => props.theme.textColor};
  transition: all 0.5s ease-out;
  position: sticky;
  z-index: 1;
  padding-bottom: 15px;
  height: 65px;

  @media (max-width: 940px) {
      display: none;
  }
`



 export {NavBackgroudColor, NavShort, P, Nav, BackgroundNav, sidebar, Brand, SearchBtton}

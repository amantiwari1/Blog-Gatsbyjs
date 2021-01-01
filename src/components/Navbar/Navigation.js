import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components"
import { CloseIcon, SearchIcon } from "./Search";
import { FormControl } from "react-bootstrap";



const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Ul = styled(motion.ul)`
padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
  z-index: 1;



`

const SearchBtton = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;

    &:focus {
      border: none;
    outline:none;
    }


`


export const Navigation = ({isDark}) => {
  const [close, isClose ] = React.useState(false)
  
  
  return (
  <Ul variants={variants}>
    <MenuItem key="tiwari" style={{display: "inline-block"}} > 


{close ?  <FormControl placeholder="Your Search" style={{display: "inline-block"}} ></FormControl> : null } 
<SearchBtton onClick={()=> isClose(!close)} >

{ !close
? <SearchIcon  color={isDark ?  "#fff" : "#000"} />:

<CloseIcon  color={isDark ?  "#fff" : "#000"} />  }


</SearchBtton>
</MenuItem>
    {itemIds.map((i) => (
      <MenuItem key={i} > {i}</MenuItem>
    ))}



  </Ul>
)};

const itemIds = ["Home", "Internship", "Course" , "Data structure"];

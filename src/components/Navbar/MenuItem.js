import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Li = styled(motion.li)`
  list-style: none;
  margin: 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
`



export const MenuItem = ({children}) => {
  return (
    <Li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div>
      {children}
      </div>
      
    </Li>
  );
};

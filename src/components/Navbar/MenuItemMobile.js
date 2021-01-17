import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: {
    opacity: 1,
    display: "inherit",
    y: 0,
  },
  closed: {
    y: 50,
    
    opacity: 0,
    transitionEnd: { display: "none" },



  },
};

const Li = styled(motion.li)`
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
`;

export const MenuItemMobile = ({ children }) => {
  return (
    <Li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div>{children}</div>
    </Li>
  );
};

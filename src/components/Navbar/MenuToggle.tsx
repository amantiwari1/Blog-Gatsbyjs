import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const Pathstyle = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
)

const Path = styled(Pathstyle)`
  stroke: ${props => props.theme.textColor};
`

const Buttom = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  left: 10px;
  width: 60px;
  height: 60px;
  z-index: 1;
  transition: all 0.5s ease-out !important;
  background-color: transparent;

  &:focus {
    border: none;
    outline: none;
  }
`

export const MenuToggle = ({ toggle }: {toggle: any}) => (
  <Buttom onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </Buttom>
)

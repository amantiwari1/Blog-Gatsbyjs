import * as React from "react"
import { motion } from "framer-motion"
import { MenuItemMobile } from "./MenuItemMobile"
import styled from "styled-components"
import { CloseIcon, SearchIcon } from "./SearchIcons"
import { FormControl } from "react-bootstrap"
import { P } from "./NavStyle"
import { LinkButton } from "../styles/Link"
import { itemIds } from "./DataMenuItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    zIndex: 1,
  },
  closed: {
    transitionEnd: { zIndex: 0 },
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Ul = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`

const SearchBtton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  margin-bottom: 10px;

  &:focus {
    border: none;
    outline: none;
  }
`

export const NavBarMobile = ({ isDark, remove }) => {
  const [close, isClose] = React.useState(false)

  return (
    <Ul variants={variants}>
      <MenuItemMobile>
        {close ? <FormControl placeholder="Your Search"></FormControl> : null}
        <SearchBtton onClick={() => isClose(!close)}>
          {!close ? (
            <SearchIcon color={isDark ? "#fff" : "#000"} />
          ) : (
            <CloseIcon color={isDark ? "#fff" : "#000"} />
          )}
        </SearchBtton>
      </MenuItemMobile>
      {itemIds.map(i => (
        <div key={i.name}>
          <LinkButton
            onClick={remove}
            style={{ textDecoration: "none" }}
            to={`${i.slug}`}
          >
            {" "}
            <MenuItemMobile>
              {" "}
              <P>{i.name}</P>
            </MenuItemMobile>{" "}
          </LinkButton>
          <br />{" "}
        </div>
      ))}
    </Ul>
  )
}

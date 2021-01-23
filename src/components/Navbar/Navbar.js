import React from "react"
import { MenuToggle } from "./MenuToggle"
import { NavBarMobile } from "./NavBarMobile"
import Icon from "../icon"
import { SearchButton } from "./SearchButton"
import { itemIds } from "./DataMenuItem"
import {
  NavBackgroudColor,
  NavDesktop,
  NavMobile,
  BackgroundNav,
  sidebar,
  Brand,
  fixednavbar,
} from "./NavStyle"
import { MenuItemDesktop } from "./MenuItemDeskop"

export const Navbar = ({ isOpen, toggleOpen, mode, toggleMode }) => {
  return (
    <>
      {/*  Navbar Mobile */}

      <NavDesktop margintop="50px">
        <Brand>Clock Education</Brand>
        <div>
          <Icon mode={mode} toggleMode={toggleMode} />
        </div>
      </NavDesktop>
      <NavBackgroudColor>
        <NavDesktop>
          <div>
            {itemIds.map(item => (
              <MenuItemDesktop key={item.name} to={item.slug}>
                {item.name}
              </MenuItemDesktop>
            ))}
          </div>

          <SearchButton mode={mode} />
        </NavDesktop>
      </NavBackgroudColor>

      {/*  Navbar Mobile */}

      <NavMobile
        variants={fixednavbar}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <BackgroundNav variants={sidebar} />
        <NavBarMobile
          remove={() => toggleOpen(!isOpen)}
          isDark={mode === "dark"}
        />
        <MenuToggle toggle={() => toggleOpen(!isOpen)} />
      </NavMobile>
    </>
  )
}

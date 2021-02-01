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

interface NavbarProps {
  isOpen: boolean
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
  mode: string 
  toggleMode: (() => void)
}

export const Navbar = ({ isOpen, toggleOpen, mode, toggleMode }: NavbarProps) => {
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

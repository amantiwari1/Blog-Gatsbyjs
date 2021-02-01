import React from "react"
import { LinkButton } from "../styles/Link"
import { P } from "./NavStyle"

export const MenuItemDesktop = ({ to, children }: {to: string, children: string}) => {
  return (
    <P>
      <LinkButton
        activeStyle={{ borderBottom: "solid 3px blue", paddingBottom: "1px" }}
        style={{ textDecoration: "none" }}
        to={to}
      >
        {children}
      </LinkButton>
    </P>
  )
}

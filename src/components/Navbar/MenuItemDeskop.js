import React from "react";
import { LinkButton } from "../styles/Link";
import { P } from "../styles/NavStyle";

export const MenuItemDesktop = ({ to, children }) => {
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
  );
};

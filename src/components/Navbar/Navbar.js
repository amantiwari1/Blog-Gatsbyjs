import React from "react";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Icon from "../icon";
import { Form } from "react-bootstrap";
import { CloseIcon, SearchIcon } from "./Search";
import {
  NavBackgroudColor,
  NavShort,
  P,
  Nav,
  BackgroundNav,
  sidebar,
  Brand,
  SearchBtton,
} from "../styles/NavStyle";
import {LinkButton} from "../styles/Link"

export const Navbar = ({ isOpen, toggleOpen, mode, toggleMode }) => {
  const [close, isClose] = React.useState(false);

  return (
    <>
      <NavShort margintop="50px">
        <Brand>Clock Education</Brand>
        <div>
          <Icon mode={mode} toggleMode={toggleMode} />
        </div>
      </NavShort>
      <NavBackgroudColor>
        <NavShort>
          <div>
            <LinkButton style={{ textDecoration: 'none'  }} to="/" > <P>Home</P></LinkButton>
            <P>Internship</P>
            <P>Course</P>
            <P>Data structure</P>
          </div>

          <div style={{ display: "flex" }}>
            {close ? (
              <Form>
                <Form.Group
                  style={{
                    display: "inline-block",
                    margin: 0,
                    marginRight: "5px",
                  }}
                  controlId="form.BasicEmail"
                >
                  <Form.Control
                    placeholder="Your Search"
                    style={{ display: "inline-block" }}
                  />
                  <SearchBtton type="submit" />
                </Form.Group>
              </Form>
            ) : null}
            <SearchBtton onClick={() => isClose(!close)}>
              {!close ? (
                <SearchIcon color={mode==="dark" ? "#fff" : "#000"} />
              ) : (
                <CloseIcon color={mode==="dark" ? "#fff" : "#000"} />
              )}
            </SearchBtton>
          </div>
        </NavShort>
      </NavBackgroudColor>

      <Nav initial={false} animate={isOpen ? "open" : "closed"}>
        <BackgroundNav variants={sidebar} />
        <Navigation isDark={mode==="dark"} />
        <MenuToggle toggle={() => toggleOpen(!isOpen)} />
      </Nav>
    </>
  );
};

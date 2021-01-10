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
import { LinkButton } from "../styles/Link";

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
          <P><LinkButton  activeStyle={{ borderBottom: "solid 3px blue", paddingBottom: "1px" }} style={{  textDecoration: "none" }} to="/">
              {" "}
              Home
            </LinkButton></P>
            <P> <LinkButton  activeStyle={{ borderBottom: "solid 3px blue", paddingBottom: "1px" }}  style={{   textDecoration: "none" }} to="/posts">
              {" "}
              All Posts
            </LinkButton></P>
            <P> <LinkButton  activeStyle={{ borderBottom: "solid 3px blue", paddingBottom: "1px" }}  style={{   textDecoration: "none" }} to="/coursefree">
              {" "}
              Course
            </LinkButton></P>
            <P> <LinkButton  activeStyle={{ borderBottom: "solid 3px blue", paddingBottom: "1px" }}  style={{   textDecoration: "none" }} to="/internship">
              {" "}
              Internship
            </LinkButton></P>
            <P> <LinkButton  activeStyle={{ borderBottom: "solid 3px blue", paddingBottom: "1px" }}  style={{   textDecoration: "none" }} to="/datastructure">
              {" "}
              Data structure
            </LinkButton></P>
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
                <SearchIcon color={mode === "dark" ? "#fff" : "#000"} />
              ) : (
                <CloseIcon color={mode === "dark" ? "#fff" : "#000"} />
              )}
            </SearchBtton>
          </div>
        </NavShort>
      </NavBackgroudColor>

      <Nav initial={false} animate={isOpen ? "open" : "closed"}>
        <BackgroundNav variants={sidebar} />
        <Navigation
          remove={() => toggleOpen(!isOpen)}
          isDark={mode === "dark"}
        />
        <MenuToggle toggle={() => toggleOpen(!isOpen)} />
      </Nav>
    </>
  );
};

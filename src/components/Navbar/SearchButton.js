import React from "react";
import { CloseIcon, SearchIcon } from "./SearchIcons";
import { Form } from "react-bootstrap";
import { SearchButtonStyle } from "../styles/NavStyle";



export const SearchButton = ({mode}) => {

    const [close, isClose] = React.useState(false);
  
    return (
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
            <SearchButtonStyle type="submit" />
          </Form.Group>
        </Form>
      ) : null}
      <SearchButtonStyle onClick={() => isClose(!close)}>
        {!close ? (
          <SearchIcon color={mode === "dark" ? "#fff" : "#000"} />
        ) : (
          <CloseIcon color={mode === "dark" ? "#fff" : "#000"} />
        )}
      </SearchButtonStyle>
    </div>
    )
  
  
  }
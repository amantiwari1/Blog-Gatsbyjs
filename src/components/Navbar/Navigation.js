import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components";
import { CloseIcon, SearchIcon } from "./Search";
import { FormControl } from "react-bootstrap";
import { P } from "../styles/NavStyle";
import { LinkButton } from "../styles/Link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    zIndex: 1,
  },
  closed: {
    transitionEnd: { zIndex: 0 },
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Ul = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

const SearchBtton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Navigation = ({ isDark, remove }) => {
  const [close, isClose] = React.useState(false);

  return (
    <Ul variants={variants}>
      <MenuItem>
        {close ? <FormControl placeholder="Your Search"></FormControl> : null}
        <SearchBtton onClick={() => isClose(!close)}>
          {!close ? (
            <SearchIcon color={isDark ? "#fff" : "#000"} />
          ) : (
            <CloseIcon color={isDark ? "#fff" : "#000"} />
          )}
        </SearchBtton>
      </MenuItem>
      {itemIds.map((i) => (
        <>
          <LinkButton
            onClick={remove}
            style={{ textDecoration: "none" }}
            to={`${i.slug}`}
          >
            {" "}
            <MenuItem>
              {" "}
              <P>{i.name}</P>
            </MenuItem>{" "}
          </LinkButton>
          <br />{" "}
        </>
      ))}
    </Ul>
  );
};

const itemIds = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "All Posts",
    slug: "/posts",
  },
  {
    name: "Course",
    slug: "/coursefree",
  },
  {
    name: "Internship",
    slug: "/",
  },
  {
    name: "Data structure",
    slug: "/",
  },
];

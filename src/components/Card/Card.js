import React from "react";
import { Card } from "react-bootstrap";
import { CardButton } from "../styles/Button";
import {
  CardImgCustom,
  CardCustom,
  CardBorder,
  Category,
} from "../styles/CardStyle";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { TitleCardLink } from "../styles/Link";

const NavAnimation = ({ children }) => {
  return <motion.div whileHover={{ scale: 1.05 }}>{children}</motion.div>;
};

export const CardContent = ({
  time,
  height,
  maxwidth,
  title,
  content,
  link,
  cat,
  catlink,
  image,
}) => {
  return (
    <CardCustom height={height} maxwidth={maxwidth} className="bg-transparent">
      <CardBorder>
        <NavAnimation>
          <CardImgCustom variant="top" as={Img} fluid={image} />
          <Card.Body>
            <Link
              style={{ transition: "all 0.5s ease-out" }}
              to={`/${catlink}`}
            >
              <Category style={{ transition: "all 0.5s ease-out" }}>
                {cat}
              </Category>
            </Link>
            {time ? (
              <Card.Subtitle className="mb-2 text-muted">
                {time} MINUTES TO READ
              </Card.Subtitle>
            ) : null}
              <Card.Title>
            <TitleCardLink style={{ textDecoration: "none" }} to={link}>
                {title}
            </TitleCardLink>
                </Card.Title>

            <Card.Text> {content[0]} </Card.Text>
          </Card.Body>
        </NavAnimation>
      </CardBorder>
    </CardCustom>
  );
};

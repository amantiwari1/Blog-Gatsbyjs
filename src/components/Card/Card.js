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

const NavAnimation = ({ children }) => {
  return <motion.div whileHover={{ scale: 1.05 }}>{children}</motion.div>;
};

export const CardContent = ({ title, content, link, cat, catlink, image }) => {
  return (
    <CardCustom className="bg-transparent">
      <CardBorder>
        <NavAnimation>
          <CardImgCustom variant="top" as={Img} fluid={image} />
          <Card.Body>
            <Link style={{transition: "all 0.5s ease-out"}} to={`/${catlink}`}>
              <Category style={{transition: "all 0.5s ease-out"}} >{cat}</Category>
            </Link>
            <Card.Title>{title}</Card.Title>
            <Card.Text> {content[0]} </Card.Text>
            <Link to={link}>
              <CardButton>Read More</CardButton>
            </Link>
          </Card.Body>
        </NavAnimation>
      </CardBorder>
    </CardCustom>
  );
};

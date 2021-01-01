import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "../styles/Button";
import { CardImgCustom, CardCustom } from "../styles/CardStyle";
import { motion } from "framer-motion";
import {Link} from "gatsby"

const NavAnimation = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      {children}
    </motion.div>
  );
};

export const CardContent = ({title, content, link}) => {
  return (
    <CardCustom>
      <NavAnimation>
        <CardImgCustom
          variant="top"
          src="https://thewowstyle.com/wp-content/uploads/2015/07/Natural-World-Wallpaper-HD-.jpg"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text> {content[0]} </Card.Text>
          <Link  to={link} >
          <Button>
            Read More
          </Button>
          </Link>
        </Card.Body>
      </NavAnimation>
    </CardCustom>
  );
};

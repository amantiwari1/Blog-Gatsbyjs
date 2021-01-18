import React from "react";
import {
  CardImgCustom,
  TimeToRead,
  Category,
  BodyCardText,
  Card,
  CardBody
} from "../styles/CardStyle";
import { Link } from "gatsby";
import { TitleCardLink } from "../styles/Link";
import { TimetoReadIcon } from "../../images/icons";


export const NewCardContent = ({
  time,
  title,
  link,
  cat,
  catlink,
  image,
}) => {
  return (
    <Card>
      
    <TitleCardLink style={{ textDecoration: "none" }} to={link}>
          <CardImgCustom  fluid={image} />
          <CardBody>

          <Link style={{ transition: "all 0.5s ease-out" }} to={`/${catlink}`}>
            <Category style={{ transition: "all 0.5s ease-out" }}>
              {cat}
            </Category>
          </Link>
          {time ? (
            <>
            <TimetoReadIcon/> 
            <TimeToRead  >
              {time} min read
            </TimeToRead>
         </> ) : null}
          <BodyCardText>{title}</BodyCardText>

            </CardBody>
    </TitleCardLink>
    </Card>
  );
};

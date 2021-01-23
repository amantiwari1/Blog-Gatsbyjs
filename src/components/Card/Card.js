import React from "react";
import {
  CardImgCustom,
  TimeToRead,
  Category,
  BodyCardText,
  Card,
  CardBody,
} from "../styles/CardStyle";
import { Link } from "gatsby";
import { TitleCardLink } from "../styles/Link";
import { TimetoReadIcon } from "../../images/icons";

const slug = (name) => {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const NewCardContent = ({ time, title, link, cat, catlink, image }) => {
  return (
    <Card>
      <TitleCardLink style={{ textDecoration: "none" }} to={`/${slug(link)}`}>
        <CardImgCustom fluid={image} />
        <CardBody>
          <Link to={`/${slug(catlink)}`}>
            <Category style={{ transition: "all 0.5s ease-out" }}>
              {cat}
            </Category>
          </Link>
          {time && (
            <div>
              <TimetoReadIcon />
              <TimeToRead>{time} min read</TimeToRead>
            </div>
          )}
          <BodyCardText>{title}</BodyCardText>
        </CardBody>
      </TitleCardLink>
    </Card>
  );
};

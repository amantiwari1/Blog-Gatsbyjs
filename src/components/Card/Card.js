import React from "react"
import {
  CardImgCustom,
  TimeToRead,
  Category,
  BodyCardText,
  Card,
  CardBody,
  TitleCardLink
} from "./CardStyle"
import { Link } from "gatsby"
import { TimetoReadIcon } from "../../images/icons"


export const NewCardContent = ({ time, title, link, cat, catlink, image }) => {
  return (
    <Card>
      <TitleCardLink style={{ textDecoration: "none" }} to={`/${link}`}>
        <CardImgCustom alt={title} fluid={image} />
        <CardBody>
          <Link to={`/${catlink}`}>
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
  )
}

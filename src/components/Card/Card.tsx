import React from "react"
import {
  TimeToRead,
  Category,
  BodyCardText,
  Card,
  CardBody,
  TitleCardLink
} from "./CardStyle"
import { Link } from "gatsby"
import { TimetoReadIcon } from "../../images/icons"
import Img from "gatsby-image"


interface CardProps {
  time?: string;
  title: string; 
  link: string ;
  cat: string ;
  catlink: string; 
  image: any;
}


export const NewCardContent = ({ time, title, link, cat, catlink, image }: CardProps) => {
  return (
    <Card>
      <TitleCardLink style={{ textDecoration: "none" }} to={`/${link}`}>
        <Img alt={title} fluid={image} />
        <CardBody>
          <Link to={`/${catlink}`}>
            <Category style={{ transition: "all 0.5s ease-out" }}>
              {cat}
            </Category>
          </Link>
          {time && (
            <div>
              <TimetoReadIcon  />
              <TimeToRead>{time} min read</TimeToRead>
            </div>
          )}
          <BodyCardText>{title}</BodyCardText>
        </CardBody>
      </TitleCardLink>
    </Card>
  )
}

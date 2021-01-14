import React from "react";
import { Card, Header, Item } from "../styles/RecentPosts";
import Img from "gatsby-image";
import {Row, Col } from "react-bootstrap";


export const RecentPost = ({ data }) => {
  const recentpost = data.nodes;
  return (
    <Card>
      <Header>Recent Posts</Header>
      {recentpost.map((node) => (

        <>
        <Item
          to={`/${node.frontmatter.title.split(" ").join("-").toLowerCase()}`}
        >
          {node.frontmatter.title}
        </Item>
        </>
      ))}
    </Card>
  );
};

export const CourseRecentPost = ({ data }) => {
  const recentpost = data.nodes;
  return (
    <Card>
      <Header>Latest Free Courses</Header>
      <Row>
      {recentpost.map((node) => (
        <Col>
        <Img fluid={node.localImage.childImageSharp.fluid} />
        <Item
          to={`/${node.title.split(" ").join("-").toLowerCase()}`}
        >
          {node.title}
        </Item>
        </Col>
      ))}
      </Row>
    </Card>
  );
};
export const RelatedPostCard = ({ data }) => {
  const recentpost = data.nodes;
  return (
    <Card>
      <Header>Related Posts</Header>
      {recentpost.map((node) => (
        <Item
          to={`/${node.frontmatter.title.split(" ").join("-").toLowerCase()}`}
        >
          {node.frontmatter.title}
        </Item>
      ))}
    </Card>
  );
};

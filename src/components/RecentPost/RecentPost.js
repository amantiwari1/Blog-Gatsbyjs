import React from "react";
import { Card, Header, Item } from "../styles/RecentPosts";
import Img from "gatsby-image";
import { Row, Col } from "react-bootstrap";

export const RecentPost = (props) => {
  const {post} = props;
  return (
    <Card>
      <Header>Recent Posts</Header>

      <Row>
        {post.map((node) => (
          <Col {...props} key={node.frontmatter.title}  >
            <Img fluid={node.frontmatter.featureImage.childImageSharp.fluid} />
            <Item
              to={`/${node.frontmatter.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
            >
              {node.frontmatter.title}
            </Item>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export const CourseRecentPost = ({ post }) => {
  return (
    <Card>
      <Header>Latest Free Courses</Header>
      <Row>
        {post.map((node) => (
          <Col key={node.title} >
            <Item  to={`/${node.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}>
            <Img  fluid={node.localImage.childImageSharp.fluid} />
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
          key={node.frontmatter.title} to={`/${node.frontmatter.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
        >
          {node.frontmatter.title}
        </Item>
      ))}
    </Card>
  );
};

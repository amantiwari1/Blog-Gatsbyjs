import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "../styles/RecentPosts";
import { NewCardContent } from "../../components";

const HomeFeatureCard = ({ post }) => {
  return (
    <Card>
      <Row>
        {post.map((post) => (
          <Col xs={6} sm={4}   >
            <NewCardContent
              image={post.frontmatter.featureImage.childImageSharp.fluid}
              catlink={post.frontmatter.category
                .split(" ")
                .join("-")
                .toLowerCase()}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={`/${post.frontmatter.title
                .split(" ")
                .join("-")
                .toLowerCase()}`}
                time={post.timeToRead}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

const AllPostCard = ({ post }) => {
  return (
    <Card>
      <Row>
        {post.map((post) => (
          <Col  style={{marginBottom: "20px"}} xs={6} sm={4} md={3}>
            <NewCardContent
              image={post.frontmatter.featureImage.childImageSharp.fluid}
              catlink={post.frontmatter.category
                .split(" ")
                .join("-")
                .toLowerCase()}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={`/${post.frontmatter.title
                .split(" ")
                .join("-")
                .toLowerCase()}`}
                time={post.timeToRead}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

const AllCourseCard = ({ post }) => {
  return (
    <Card>
      <Row>
        {post.map((post) => (
          <Col xs={6} sm={4} md={3}>
            <NewCardContent
              image={post.localImage.childImageSharp.fluid}
              catlink={post.category.split(" ").join("-").toLowerCase()}
              cat={post.category}
              title={post.title}
              link={`/${post.slug}`}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export { HomeFeatureCard, AllPostCard, AllCourseCard };

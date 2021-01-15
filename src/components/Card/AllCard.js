import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "../styles/RecentPosts";
import { NewCardContent } from "../../components";
import {  Topicstyle } from "../styles/Homestyle";


const HomeFeatureCard = (props) => {
  const {post} = props;

  return (
    <Card>
      <Row>
        {post.map((post) => (
          <Col style={{marginBottom: "20px"}} {...props}  >
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

const AllPostCard = (props) => {
  const {post} = props;
  return (
    <Card>
      <Row>
        {post.map((post) => (
          <Col  style={{marginBottom: "20px"}} {...props} >
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

const AllCourseCard = (props) => {
  const {post} = props;

  return (
    <Card>
      <Row>
        {post.map((post) => (
          <Col style={{marginBottom: "20px"}} {...props}>
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
const AllHomeCourseCard = (props) => {
  const {post} = props;

  return ( 
    <Card>
      <Topicstyle>{post[0].category}</Topicstyle>
      <Row>
        {post.map((post) => (
          <Col style={{marginBottom: "20px"}} {...props}>
            <NewCardContent
              image={post.localImage.childImageSharp.fluid}
              catlink={post.category.split(" ").join("-").toLowerCase()}
              cat={post.category}
              title={post.title}
              link={`/${post.title.split(" ").join("-").toLowerCase()}`}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

const HomeAllPostCard = (props) => {
  const {post} = props;


  return (
    <Card>
      <Topicstyle>{post[0].frontmatter.category}</Topicstyle>

      <Row>
        {post.map((post) => (
          <Col style={{marginBottom: "20px"}} {...props}  >
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


export { HomeFeatureCard, AllPostCard, AllCourseCard, AllHomeCourseCard, HomeAllPostCard };

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
                .toLowerCase().replace(/ /g, '-') 
                .replace(/[^\w-]+/g, '')}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={`/${post.frontmatter.title
                .toLowerCase().replace(/ /g, '-') 
                .replace(/[^\w-]+/g, '')}`}
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
                .toLowerCase().replace(/ /g, '-') 
                .replace(/[^\w-]+/g, '')}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={`/${post.frontmatter.title
                .toLowerCase().replace(/ /g, '-') 
                .replace(/[^\w-]+/g, '')}`}
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
              catlink={post.category.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}
              cat={post.category}
              title={post.title}
              link={`/${post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
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
              catlink={post.category.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}
              cat={post.category}
              title={post.title}
              link={`/${post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
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
              catlink={post.frontmatter.category.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={`/${post.frontmatter.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
                time={post.timeToRead}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};


export { HomeFeatureCard, AllPostCard, AllCourseCard, AllHomeCourseCard, HomeAllPostCard };

import React from "react";
import { CardContent } from "../../components";
import { Topicstyle } from "../../components/styles/Homestyle";
import { Row, Col } from "react-bootstrap";




export const RelatedPost = ({ data }) => {
  const relatedpost = data.nodes;
  return (
      <>
      <Topicstyle>Related Posts</Topicstyle>
      <div>

        <Row>

          {relatedpost.map((post) => (
              <Col md={4} >
              
              <CardContent
                image={
                    post.frontmatter.featureImage.childImageSharp.fluid
                }
                catlink={post.frontmatter.category.split(" ").join("-").toLowerCase()}
                cat={post.frontmatter.category}
                title={post.frontmatter.title}
                content=" "
                link={`/${post.frontmatter.title.split(" ").join("-").toLowerCase()}`}
                />
          
          </Col>
            ))}
            </Row>
            </div>
        </>
  );
};
export const CourseRelatedPost = ({ data }) => {
  const relatedpost = data.nodes;
  return (
      <>
      <Topicstyle>Related Courses</Topicstyle>
      <div>

        <Row>

          {relatedpost.map((post) => (
              <Col md={4} >
              
              <CardContent
                image={post.localImage.childImageSharp.fluid}
                catlink={post.category.split(" ").join("-").toLowerCase()}
                cat={post.category}
                content=" "
                title={post.title}
                link={`/${post.slug}`}
              />
          
          </Col>
            ))}
            </Row>
            </div>
        </>
  );
};

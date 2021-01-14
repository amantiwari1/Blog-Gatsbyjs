import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import imggif from "../images/computer.gif";
import { HeaderImage, Topicstyle } from "../components/styles/Homestyle";
import { CategoryPost } from "../components/CategoryPost/CategoryPost";
import {HomeFeatureCard} from "../components/Card/AllCard"

const AllPosts = ({ data }) => {
  const catpost = data.allCourseCategoryCsv.nodes;
  const post = data.allMdx.nodes;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <center style={{ margin: "100px 0" }}>
              <h1>Be More Learn Everything is Free!!</h1>
            </center>
          </Col>
          <Col>
            <HeaderImage src={imggif} />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Topicstyle>Featured Posts</Topicstyle>
            <HomeFeatureCard  post={post} />
          </Col>
          <Col lg={4}>
            <Topicstyle>Categories Course</Topicstyle>
            <CategoryPost data={catpost}></CategoryPost>
          </Col>
        </Row>
        <Row>
          <Topicstyle>Featured Posts</Topicstyle>
        </Row>
      </Container>
    </>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  {
    allMdx(filter: { frontmatter: { feature: { eq: true } } }) {
      nodes {
        timeToRead
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          featureImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          category
        }
      }
    }
    allCourseCategoryCsv {
      nodes {
        name
        slug
      }
    }
  }
`;

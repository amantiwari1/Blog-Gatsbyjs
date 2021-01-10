import React from "react";
import { graphql } from "gatsby";
// import ReactHtmlParser from "react-html-parser";
import { CardContent } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import imggif from "../images/computer.gif";
import { HeaderImage, Topicstyle } from "../components/styles/Homestyle";
import { CategoryPost } from "../components/CategoryPost/CategoryPost";

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
            <Row>
              {post.map((post) => (
                <>
                  <Col md={4}>
                    <CardContent
                      image={
                        post.frontmatter.featureImage.childImageSharp.fluid
                      }
                      catlink={post.frontmatter.category
                        .split(" ")
                        .join("-")
                        .toLowerCase()}
                      cat={post.frontmatter.category}
                      title={post.frontmatter.title}
                      content=" "
                      link={`/${post.frontmatter.title
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    />
                  </Col>
                </>
              ))}
            </Row>
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

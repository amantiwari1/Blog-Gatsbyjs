import React from "react";
import { graphql } from "gatsby";
// import ReactHtmlParser from "react-html-parser";
// import {CardContent } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import imggif from "../images/computer.gif";
import { HeaderImage, Topicstyle } from "../components/styles/Homestyle";
import { CategoryPost } from "../components/CategoryPost/CategoryPost";

const AllPosts = ({ data }) => {
  const catpost = data.allCourseCategoryCsv.nodes;

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
          </Col>
          <Col lg={4}>
            <Topicstyle>Categories Course</Topicstyle>
            <CategoryPost data={catpost}></CategoryPost>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  {
    allCourseCategoryCsv {
      nodes {
        name
        slug
      }
    }
  }
`;

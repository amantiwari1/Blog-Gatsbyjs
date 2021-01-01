import React from "react";
import { graphql } from "gatsby";
import ReactHtmlParser from "react-html-parser";
import {CardContent } from "../components";
import "bootstrap/dist/css/bootstrap.css";
import {Container , Row , Col } from "react-bootstrap";


const AllPosts = ({ data }) => {
  const posts = data.wordpress.posts.nodes;
  return (
    <>
   
    <Container>
        <Row>
      {posts.map((post) => (
        <>
        <Col sm={6} md={4}  lg={4} >
        <CardContent title={post.title} content={ReactHtmlParser(post.content)} link={post.slug} />
        </Col>
        </>
      ))}
      {posts.map((post) => (
        <>
        <Col sm={6} md={4}  lg={4} >
        <CardContent title={post.title} content={ReactHtmlParser(post.content)} link={`${post.categories.nodes[0].slug}/${post.slug}`} />
        </Col>
        </>
      ))}
      {posts.map((post) => (
        <>
        <Col sm={6} md={4}  lg={4} >
        <CardContent title={post.title} content={ReactHtmlParser(post.content)} link={`${post.categories.nodes[0].slug}/${post.slug}`} />
        </Col>
        </>
      ))}
    </Row>
    </Container> 
    </>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  {
    wordpress {
      posts {
        nodes {
          title
          content
          slug
          categories {
            nodes {
              slug
            }
          }
        }
      }
    }
  }
`;


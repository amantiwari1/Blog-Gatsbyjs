import React from "react";
import { graphql } from "gatsby"; 
import ReactHtmlParser from "react-html-parser";
import { Container, Row, Col } from "react-bootstrap";
import { FeatureImage } from "../components/styles/FeatureStyle";
import { LinkButton } from "../components/styles/Link";
import { Post } from "../components/styles/SingePost";
import { BreadcrumbLayout } from "../components/styles/BreadcrumbLayout";
import {  RecentPost} from "../components/RecentPost/RecentPost";

const singlePost = ({ data }) => {
  const post = data.wordpress.post;
  const FeatureImageUrl = post.featuredImage;
  const date = new Date(post.date)
  const datestr  = date.toDateString()


  return (
    <>
      <Container>
        <Row>
          <Col lg="8">
            <Row>
              <Col>
              <Post>
                <BreadcrumbLayout>
                  <LinkButton to="/">Home</LinkButton> {" > "}
                  <LinkButton to={`/${post.categories.nodes[0].slug}`}>
                    {post.categories.nodes[0].name}
                  </LinkButton> {">"} {datestr}
                </BreadcrumbLayout>
                <br />
                {FeatureImageUrl ? (
                  <FeatureImage
                    fixed={FeatureImageUrl.node.imageFile.childImageSharp.fixed}
                  />
                ) : null}
                <h1>{post.title}</h1>
                <p>{ReactHtmlParser(post.content)}</p>
                </Post>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col>
              <RecentPost data={data}></RecentPost>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default singlePost;

export const pageQuery = graphql`
  query SinglePostQuery($Postid: ID!) {
    wordpress {
      posts(first: 4) {
      nodes {
        title
        slug
      }
    }
      post(id: $Postid) {
        title
        content
        featuredImage {
          node {
            sourceUrl
            imageFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        date
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

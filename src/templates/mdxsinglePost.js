import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Row, Col } from "react-bootstrap";
import { FeatureImage } from "../components/styles/FeatureStyle";
import { CategoryPost } from "../components/CategoryPost/CategoryPost";
import { Post } from "../components/styles/SingePost";
import {TOC } from "../components/styles/Tableofcontent";

export default ({ data }) => {
  const { body, frontmatter, tableOfContents } = data.mdx;
  const catpost = data.allCourseCategoryCsv.nodes;

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <TOC>
            <h5>Table of Content</h5>
          <ul>
            {tableOfContents.items.map((i) => (
              <li>
                <a href={i.url}>{i.title}</a>
              </li>
            ))}
          </ul>
            </TOC>
        </Col>

        <Col md={6}>
          <Post>
            {frontmatter.featureImage ? (
              <FeatureImage
                fluid={frontmatter.featureImage.childImageSharp.fluid}
              />
            ) : null}
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
          </Post>
        </Col>
        <Col md={3}>
          <CategoryPost data={catpost}></CategoryPost>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export const query = graphql`
  query PostBySlug($title: String!) {
    mdx(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM, DD")
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
      excerpt
      tableOfContents
      timeToRead
      fields {
        slug
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

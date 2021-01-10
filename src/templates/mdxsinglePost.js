import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Row, Col } from "react-bootstrap";
import { FeatureImage } from "../components/styles/FeatureStyle";
import { CategoryPost } from "../components/CategoryPost/CategoryPost";
import { Post } from "../components/styles/SingePost";
import { BreadcrumbLayout } from "../components/styles/BreadcrumbLayout";
import { LinkButton } from "../components/styles/Link";

import {TOC } from "../components/styles/Tableofcontent";

export default ({ data }) => {
  const { body, frontmatter, tableOfContents } = data.mdx;
  const catpost = data.allCourseCategoryCsv.nodes;

  return (
    <Container fluid>
      <Row>
        <Col md={0} lg={0} xl={1} ></Col>
        <Col md={3} lg={3} xl={2}>
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

        <Col md={9} lg={6} xl={5}>
          <Post>
          <BreadcrumbLayout>
                    <LinkButton to="/">Home</LinkButton> {" > "}
                    <LinkButton to="/posts">All Posts</LinkButton> {" > "}
                    <LinkButton
                      to={`/${frontmatter.category.split(" ").join("-").toLowerCase()}`}
                    >
                      {frontmatter.category}
                    </LinkButton>{" "}
                    {" > "}{" "}{frontmatter.date}
                  </BreadcrumbLayout>
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
        <Col md={0} lg={3} xl={2}>
          <CategoryPost data={catpost}></CategoryPost>
        </Col>
      </Row>
    </Container>
  );
};

export const query = graphql`
  query PostBySlug($title: String!) {
    mdx(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        category
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

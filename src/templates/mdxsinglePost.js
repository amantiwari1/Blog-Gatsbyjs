import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Row, Col } from "react-bootstrap";

export default ({ data }) => {
  const { body, frontmatter,tableOfContents } = data.mdx;

  return (
    <Container fluid>
      <Row>
        <Col md={2}>

            {
                tableOfContents.items.map(i => (
                    <ul>
                        <a href={i.url} >{i.title}</a>
                    </ul>
                ))
            }
        </Col>

        <Col md={5}>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </Col>
        <Col md={3}>
        <MDXRenderer>{body}</MDXRenderer>
        </Col>
        <Col md={2}>hello</Col>
      </Row>
    </Container>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
      excerpt
      tableOfContents
      timeToRead
      fields {
        slug
      }
    }
  }
`;

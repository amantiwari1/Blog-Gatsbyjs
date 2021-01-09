import React from "react";
import { graphql } from "gatsby";
import { Container, CardColumns } from "react-bootstrap";
import { CardContent } from "../components";

const allPosts = ({ data }) => {
  const post = data.allMdx.nodes;

  return (
    <Container>
       <CardColumns>
          {post.map((post) => (
            <>
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
            </>
          ))}
        </CardColumns>
    </Container>
  );
};

export default allPosts;

export const CatQuery = graphql`
  query CatQuery($name: String!) {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $name}}}) {
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
      timeToRead
    }
  }
   
  }
`;

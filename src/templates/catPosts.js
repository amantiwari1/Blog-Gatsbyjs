import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import {AllPostCard} from "../components/Card/AllCard";


const allPosts = ({ data }) => {
  const post = data.allMdx.nodes;

  return (
    <Container>
        <AllPostCard post={post} />
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

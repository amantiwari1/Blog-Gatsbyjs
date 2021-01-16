import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import {AllPostCard} from "../components/Card/AllCard";
import  SEO from "../components/seo";



const allPosts = ({ data }) => {
  const post = data.allMdx.nodes;
  

  return (
    <Container>
     <SEO 
          title={post[0].frontmatter.category.replace(/^\w/, c => c.toUpperCase())}
        />

        <AllPostCard xs={6} sm={6} md={4} lg={3} post={post} />
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

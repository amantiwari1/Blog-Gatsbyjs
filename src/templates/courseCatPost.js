import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import {AllCourseCard} from "../components/Card/AllCard";
import  SEO from "../components/seo";



const allPosts = ({ data }) => {
  const post = data.allCourseCsv.nodes;

  return (
    <Container>
        <SEO 
          title={post[0].category}
        />

      <AllCourseCard xs={6} sm={4} md={3} post={post} />
    </Container>
  );
};

export default allPosts;

export const CatQuery = graphql`
  query CourseCatQuery($name: String!) {
    allCourseCsv(filter: { category: { eq: $name } }) {
      nodes {
        category
        date
        featureimage
        title
        localImage {
          childImageSharp {
            fluid(cropFocus: CENTER, fit: COVER, maxHeight: 300, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

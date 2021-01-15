import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import {AllCourseCard} from "../components/Card/AllCard";


const allPosts = ({ data }) => {
  const post = data.allCourseCsv.nodes;

  return (
    <Container>
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
        categoryslug
        date
        featureimage
        slug
        title
        localImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

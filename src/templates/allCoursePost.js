import React from "react";
import { graphql } from "gatsby";
import { Container} from "react-bootstrap";
import {AllCourseCard} from "../components/Card/AllCard";



const AllPosts = ({ data }) => {
  const post = data.allCourseCsv.nodes;
  return (
      <Container> 
          <AllCourseCard post={post} />
      </Container>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  {
    allCourseCsv(sort: { fields: date, order: DESC }) {
      nodes {
        category
        title
        slug
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

import React from "react";
import { graphql } from "gatsby";
import { Container} from "react-bootstrap";
import {AllCourseCard} from "../components/Card/AllCard";
import  SEO from "../components/seo";




const AllPosts = ({ data }) => {
  const post = data.allCourseCsv.nodes;
  return (
      <Container> 
        <SEO 
          title="100% OFF Coupon Course"
        />
          <AllCourseCard  xs={6} sm={4} md={3} post={post} />
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

import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import { AllCourseCard } from "../components/Card/AllCard";
import SEO from "../components/seo";
import { Paginations } from "../components/Pagination/Pagination";
import styled from "styled-components";

const CnterDiv = styled.div`
  text-align: center;
`;

const AllPosts = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const post = data.allCourseCsv.nodes;
  return (
    <Container>
      <SEO title="100% OFF Coupon Course" />
      <AllCourseCard xs={6} sm={4} md={3} post={post} />

      <CnterDiv>
        <Paginations currentPage={currentPage} numPages={numPages} />
      </CnterDiv>
    </Container>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allCourseCsv(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        category
        title
        localImage {
          childImageSharp {
            fluid(
              cropFocus: CENTER
              fit: COVER
              maxHeight: 300
              maxWidth: 600
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
